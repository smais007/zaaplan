"use client";

import React from "react";
import { Hero } from "../_components/hero";
import { LogoCloud } from "../_components/logo-cloud";
import { VisualWorkflows } from "../_components/visual-workflows";
import { CTA } from "../_components/cta";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <LogoCloud />
      <VisualWorkflows />
      <CTA />
    </div>
  );
};

export default LandingPage;
