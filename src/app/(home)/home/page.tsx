"use client";

import React from "react";
import { Hero } from "../_components/hero";
import { LogoCloud } from "../_components/logo-cloud";
import { VisualWorkflows } from "../_components/visual-workflows";
import { CTA } from "../_components/cta";
import { Features } from "../_components/features";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <LogoCloud />
      <VisualWorkflows />
      <Features />
      <CTA />
    </div>
  );
};

export default LandingPage;
