"use client";

import { DotPatternLinearGradient } from "@/components/dot-pattern-linear-gradient";
import { TestimonialTooltip } from "@/components/testimonial-tooltip";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  const pathnema = usePathname();
  const isSignIn = pathnema === "/sign-in";

  return (
    <main className=" ">
      <Toaster />

      <div className="flex items-center justify-center h-screen">
        <div className="w-full lg:w-2/5  flex  justify-center">{children}</div>
        <div className="w-3/5 bg-gray-100/40 min-h-screen hidden lg:block">
          <div className=" ">
            <DotPatternLinearGradient />
          </div>
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;
