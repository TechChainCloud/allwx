import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-sm px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-[0.14em]",
  {
    variants: {
      tone: {
        default: "bg-elevated text-muted",
        earn: "bg-earn/15 text-earn",
        suffer: "bg-suffer/15 text-suffer",
        warn: "bg-warn/15 text-warn",
        hold: "bg-hold/15 text-hold",
        invert: "bg-accent text-accent-fg",
      },
    },
    defaultVariants: { tone: "default" },
  },
);

export function Badge({
  className,
  tone,
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & VariantProps<typeof badgeVariants>) {
  return <span className={cn(badgeVariants({ tone }), className)} {...props} />;
}
