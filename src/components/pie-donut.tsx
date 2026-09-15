import type { Line } from "@/lib/machine";

export function PieDonut({ pie, size = 220 }: { pie: Line[]; size?: number }) {
  const r = 72;
  const c = 2 * Math.PI * r;
  let offset = 0;
  const cx = 110;
  const cy = 110;

  return (
    <svg
      viewBox="0 0 220 220"
      width={size}
      height={size}
      className="mx-auto text-fg"
      role="img"
      aria-label="Portfolio allocation"
    >
      {pie.map((line) => {
        const len = (line.weight / 100) * c;
        const dash = `${len} ${c - len}`;
        const el = (
          <circle
            key={line.ticker}
            cx={cx}
            cy={cy}
            r={r}
            fill="none"
            className={line.sleeve === 1 ? "stroke-accent" : "stroke-hold"}
            strokeWidth="22"
            strokeDasharray={dash}
            strokeDashoffset={-offset}
            opacity={0.35 + (line.weight / 50) * 0.65}
            transform={`rotate(-90 ${cx} ${cy})`}
          />
        );
        offset += len;
        return el;
      })}
      <circle cx={cx} cy={cy} r="52" className="fill-bg" />
      <text
        x={cx}
        y={cy - 6}
        textAnchor="middle"
        className="fill-fg"
        fontSize="22"
        fontFamily="Newsreader, Georgia, serif"
      >
        16
      </text>
      <text
        x={cx}
        y={cy + 14}
        textAnchor="middle"
        className="fill-muted"
        fontSize="9"
        letterSpacing="0.18em"
      >
        LINES
      </text>
    </svg>
  );
}
