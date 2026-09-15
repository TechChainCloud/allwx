import { JOBS, type JobId } from "@/lib/content";
import { cn } from "@/lib/utils";

const CX = 100;
const CY = 100;
const R = 72;
const IR = 42;

function n(v: number) {
  return v.toFixed(4);
}

function polar(cx: number, cy: number, r: number, a: number) {
  const rad = ((a - 90) * Math.PI) / 180;
  return { x: n(cx + r * Math.cos(rad)), y: n(cy + r * Math.sin(rad)) };
}

function arc(start: number, end: number) {
  const s = polar(CX, CY, R, end);
  const e = polar(CX, CY, R, start);
  const si = polar(CX, CY, IR, end);
  const ei = polar(CX, CY, IR, start);
  const large = end - start > 180 ? 1 : 0;
  return `M ${s.x} ${s.y} A ${R} ${R} 0 ${large} 0 ${e.x} ${e.y} L ${ei.x} ${ei.y} A ${IR} ${IR} 0 ${large} 1 ${si.x} ${si.y} Z`;
}

const SLICES = (() => {
  let acc = 0;
  return JOBS.map((job) => {
    const start = (acc / 100) * 360;
    acc += job.weight;
    const end = (acc / 100) * 360;
    return { job, d: arc(start, end) };
  });
})();

export function PieChart({
  active,
  onSelect,
  className,
}: {
  active?: JobId | null;
  onSelect?: (id: JobId) => void;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={cn("w-full max-w-md", className)}
      role="img"
      aria-label="Classroom seven-sleeve allocation"
    >
      {SLICES.map(({ job, d }) => {
        const isActive = !active || active === job.id;
        return (
          <path
            key={job.id}
            d={d}
            fill={job.color}
            fillOpacity={isActive ? 1 : 0.22}
            className={onSelect ? "cursor-pointer transition-opacity duration-200" : undefined}
            onClick={() => onSelect?.(job.id)}
            aria-label={`${job.name} ${job.weight} percent`}
          />
        );
      })}
      <circle cx={CX} cy={CY} r={IR - 0.5} fill="var(--color-panel)" />
      <text
        x={CX}
        y={CY - 4}
        textAnchor="middle"
        fill="var(--color-fg)"
        fontFamily="IBM Plex Mono, ui-monospace, monospace"
        fontSize="12"
        fontWeight="500"
      >
        ALLWX
      </text>
      <text
        x={CX}
        y={CY + 12}
        textAnchor="middle"
        fill="var(--color-muted)"
        fontFamily="IBM Plex Mono, ui-monospace, monospace"
        fontSize="7"
        letterSpacing="0.14em"
      >
        CLASSROOM
      </text>
    </svg>
  );
}
