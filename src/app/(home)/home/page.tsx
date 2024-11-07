import React from "react";
import { Hero } from "../_components/hero";
import { LogoCloud } from "../_components/logo-cloud";
import { VisualWorkflows } from "../_components/visual-workflows";
import { CTA } from "../_components/cta";
import { Statistics } from "@/components/statistics";
import { FeaturesSectionDemo } from "../_components/features";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <LogoCloud />
      <Statistics />
      <VisualWorkflows />
      <FeaturesSectionDemo />
      <CTA />
    </div>
  );
};

export default LandingPage;
