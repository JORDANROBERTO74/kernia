import { cn } from "@/lib/utils";

export function ClientLogo({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "flex items-center gap-2 text-[#101418]",
        className
      )}
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-md bg-[#101418] text-sm font-extrabold text-white">
        {name.charAt(0)}
      </span>
      <span className="whitespace-nowrap text-xl font-extrabold tracking-tight">
        {name}
      </span>
    </span>
  );
}
