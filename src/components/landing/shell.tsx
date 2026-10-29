import { cn } from "@/lib/utils";

export function Shell({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("shell", className)}>{children}</div>
  );
}

export function Eyebrow({
  index,
  children,
  className,
}: {
  index?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("flex items-center gap-3 eyebrow", className)}>
      <span aria-hidden className="inline-block h-1.5 w-1.5 bg-signal" />
      {index ? (
        <span className="text-ink-mute/70">[{index}]</span>
      ) : null}
      <span>{children}</span>
    </p>
  );
}

export function SectionHead({
  index,
  eyebrow,
  title,
  body,
  className,
}: {
  index?: string;
  eyebrow: string;
  title: React.ReactNode;
  body?: React.ReactNode;
  className?: string;
}) {
  return (
    <header className={cn("max-w-3xl", className)}>
      <Eyebrow index={index}>{eyebrow}</Eyebrow>
      <h2 className="mt-5 text-[clamp(1.85rem,3.4vw,2.8rem)] font-bold leading-[1.04] tracking-[-0.035em] text-ink">
        {title}
      </h2>
      {body ? (
        <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-ink-soft">
          {body}
        </p>
      ) : null}
    </header>
  );
}

export function Rule({ className }: { className?: string }) {
  return <div aria-hidden className={cn("h-px w-full bg-line", className)} />;
}
