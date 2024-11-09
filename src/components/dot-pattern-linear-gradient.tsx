"use client";

import { cn } from "@/lib/utils";
import DotPattern from "./ui/dot-pattern";
import { TestimonialTooltip } from "./testimonial-tooltip";

export function DotPatternLinearGradient() {
  return (
    <div className="relative flex size-full items-center h-screen bg-gray-100/50 justify-center overflow-hidden   ">
      <div className="text-center">
        <TestimonialTooltip />
        <h1 className="text-xl font-semibold">
          AstroColab is used by thousands of users
        </h1>
        <p className="max-w-lg mx-auto pt-4 text-muted-foreground">
          AstroColab helps teams collaborate on projects, share ideas, and build
          amazing things together.
        </p>
      </div>
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
        )}
      />
    </div>
  );
}
