import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-mono text-sm font-medium tracking-tight transition-colors duration-150 ease-[var(--ease-out)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-40",
  {
    variants: {
      variant: {
        primary: "bg-accent text-bg hover:bg-accent-2 active:scale-[0.98]",
        ghost: "bg-transparent text-fg hover:bg-line",
        outline:
          "bg-transparent text-fg shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-fg)_18%,transparent)] hover:bg-line",
        cream: "bg-cyan text-bg hover:bg-fg",
      },
      size: {
        sm: "h-9 rounded-sm px-3",
        md: "h-11 rounded-md px-4",
        lg: "h-12 rounded-md px-5",
        icon: "size-11 rounded-md",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type Props = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export function Button({ className, variant, size, ...props }: Props) {
  return (
    <button className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}
