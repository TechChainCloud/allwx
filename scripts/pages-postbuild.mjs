#!/usr/bin/env node
/**
 * GitHub Pages is static-only. TanStack SPA emits _shell.html.
 * Copy it to index.html and 404.html so /house and /listen refresh.
 * .nojekyll keeps __grok paths from being swallowed by Jekyll.
 */
import { copyFileSync, existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const candidates = ["dist/client", "dist", ".output/public"];
const dir = candidates.find(
  (d) => existsSync(join(d, "index.html")) || existsSync(join(d, "_shell.html")),
);
if (!dir) {
  console.error("[pages] no index.html or _shell.html in", candidates.join(", "));
  process.exit(1);
}
const shell = existsSync(join(dir, "index.html"))
  ? join(dir, "index.html")
  : join(dir, "_shell.html");
if (!existsSync(join(dir, "index.html"))) {
  copyFileSync(shell, join(dir, "index.html"));
}

const assetsDir = join(dir, "assets");
const css = existsSync(assetsDir)
  ? readdirSync(assetsDir).find((f) => f.startsWith("styles-") && f.endsWith(".css"))
  : null;
if (css) {
  const indexPath = join(dir, "index.html");
  const html = readFileSync(indexPath, "utf8").replace(/styles-[^"'\s]+\.css/g, css);
  writeFileSync(indexPath, html);
}

copyFileSync(join(dir, "index.html"), join(dir, "404.html"));
writeFileSync(join(dir, ".nojekyll"), "");
console.log("[pages] ready:", dir, "css", css ?? "none");
