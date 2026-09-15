import type { ReactNode } from "react";
import { useEffect } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { StickyPlayer } from "@/components/player/sticky-player";
import { Ticker } from "@/components/ticker";
import { cn } from "@/lib/utils";
import { rehydratePlayer } from "@/store/player";

const NAV = [
  { to: "/", label: "HOME" },
  { to: "/learn", label: "LEARN" },
  { to: "/listen", label: "LISTEN" },
  { to: "/tape", label: "TAPE" },
  { to: "/house", label: "HOUSE" },
  { to: "/lab", label: "LAB" },
] as const;

export function Shell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => {
    rehydratePlayer();
  }, []);

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-sm focus:bg-accent focus:px-3 focus:py-2 focus:text-bg"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-30 border-b border-line bg-bg">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-3 py-2">
          <Link to="/" className="flex items-baseline gap-2 font-mono">
            <span className="bg-accent px-1.5 py-0.5 text-sm font-semibold text-bg">ALLWX</span>
            <span className="hidden text-xs text-muted sm:inline">{"<GO>"}</span>
            <span className="hidden text-xs text-faint lg:inline">
              All Weather · Bridgewater-inspired classroom
            </span>
          </Link>
          <nav className="flex items-center gap-0.5 overflow-x-auto">
            {NAV.map((item) => {
              const active =
                item.to === "/"
                  ? pathname === "/"
                  : pathname === item.to || pathname.startsWith(`${item.to}/`);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "rounded-sm px-2 py-2 font-mono text-[11px] tracking-wide",
                    active
                      ? "bg-line text-accent"
                      : "text-muted hover:bg-panel hover:text-fg",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
        <Ticker />
      </header>
      <main id="main" className="pb-36">
        {children}
      </main>
      <p className="px-4 pb-28 text-center font-mono text-[10px] leading-relaxed text-muted">
        EDUCATION ONLY. NOT INVESTMENT ADVICE. NOT BRIDGEWATER ASSOCIATES. NOT THE ALL
        WEATHER FUND. CLASSROOM WEIGHTS ARE A TEACHING OBJECT, NOT A PERSONAL PLAN.
      </p>
      <StickyPlayer />
    </div>
  );
}
