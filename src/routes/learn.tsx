import { Link, Outlet, createFileRoute, useRouterState } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/learn")({ component: LearnLayout });

const TABS = [
  { to: "/learn", label: "HUB" },
  { to: "/learn/machine", label: "MACHINE" },
  { to: "/learn/atlas", label: "ATLAS" },
  { to: "/learn/library", label: "LIBRARY" },
  { to: "/learn/years", label: "YEARS" },
  { to: "/learn/compare", label: "BOOKS" },
  { to: "/learn/prime2", label: "PRIME II" },
  { to: "/learn/universe", label: "UNIVERSE" },
  { to: "/learn/derrick", label: "DERRICK" },
  { to: "/learn/decide", label: "DECIDE" },
  { to: "/learn/path", label: "PATH" },
  { to: "/learn/lock", label: "LOCK" },
  { to: "/learn/quiz", label: "DRILLS" },
] as const;

function LearnLayout() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <div>
      <div className="border-b border-line bg-bg-2">
        <div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-3 py-2">
          {TABS.map((t) => {
            const exact = t.to === "/learn";
            const active = exact ? pathname === t.to : pathname.startsWith(t.to);
            return (
              <Link
                key={t.to}
                to={t.to}
                className={cn(
                  "shrink-0 rounded-sm px-3 py-2 font-mono text-[11px] tracking-wide",
                  active ? "bg-line text-accent" : "text-muted hover:text-fg",
                )}
              >
                {t.label}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Outlet />
      </div>
    </div>
  );
}
