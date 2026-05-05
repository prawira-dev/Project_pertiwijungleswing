import type { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: ReactNode;
  description: ReactNode;
  align?: "left" | "center";
  inverted?: boolean;
  size?: "default" | "lg";
};

export function SectionHeading({
  title,
  description,
  align = "left",
  inverted = false,
  size = "default"
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={cn("space-y-5", centered && "mx-auto max-w-4xl text-center")}>
      <div className="space-y-4">
        <h2 className={cn(
          "text-balance font-bold leading-[1.1] font-heading",
          size === "lg" 
            ? "text-4xl sm:text-5xl lg:text-7xl" 
            : "text-3xl sm:text-4xl lg:text-5xl",
          inverted ? "text-white" : "text-foreground"
        )}>
          {title}
        </h2>
        {description && (
          <p
            className={cn(
              "leading-relaxed",
              size === "lg"
                ? "text-base lg:text-xl max-w-3xl"
                : "text-sm lg:text-base max-w-2xl",
              inverted ? "text-white/80" : "text-muted-foreground",
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
