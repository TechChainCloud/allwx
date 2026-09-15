import type { ErrorComponentProps } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { TriangleAlert } from "lucide-react";

export function AppErrorComponent({ error }: ErrorComponentProps) {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center gap-3 px-6 text-center">
      <span className="text-down" aria-hidden="true">
        <TriangleAlert className="size-10" strokeWidth="1.5" />
      </span>
      <h1 className="font-mono text-2xl text-fg">FAULT</h1>
      <p className="max-w-md font-sans text-sm text-muted">
        {error.message || "An unexpected error occurred. Reload the tape."}
      </p>
      <Link to="/" className="mt-2 font-mono text-sm text-accent hover:underline">
        ALLWX {"<GO>"}
      </Link>
    </main>
  );
}

export function NotFoundComponent() {
  return (
    <main className="flex min-h-[50vh] flex-col items-center justify-center gap-3 px-6 py-20 text-center">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
        404
      </p>
      <h1 className="font-mono text-3xl">Mnemonic not found</h1>
      <Link to="/" className="mt-2 font-mono text-sm text-accent hover:underline">
        ALLWX {"<GO>"}
      </Link>
    </main>
  );
}
