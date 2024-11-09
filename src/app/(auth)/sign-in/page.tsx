import { getCurrent } from "@/features/auth/queries";
import { SignInCard } from "@/features/auth/components/sign-in-card";
import { redirect } from "next/navigation";
import React from "react";
import { TestimonialTooltip } from "@/components/testimonial-tooltip";

const SignInPage = async () => {
  const user = await getCurrent();
  if (user) redirect("/");

  return (
    <div className=" flex justify-between">
      <div className="bg-green-50 w-full lg:w-1/2">
        <SignInCard />
      </div>
    </div>
  );
};

export default SignInPage;
