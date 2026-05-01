import type { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: ReactNode;
  title: ReactNode;
  description: ReactNode;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left"
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={cn("space-y-5", centered && "mx-auto max-w-3xl text-center")}>
      {typeof eyebrow === "string" ? (
        <Badge className={centered ? "mx-auto" : undefined}>{eyebrow}</Badge>
      ) : (
        <div className={centered ? "mx-auto" : undefined}>{eyebrow}</div>
      )}
      
      <div className="space-y-3">
        <h2 className="text-balance text-3xl font-semibold uppercase leading-tight text-foreground sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        {description && (
          <p
            className={cn(
              "max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg",
              centered && "mx-auto"
            )}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
