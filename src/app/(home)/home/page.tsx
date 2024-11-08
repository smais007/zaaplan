import { CTA } from "@/components/home/cta";
import { FeaturesSectionDemo } from "@/components/home/features";
import { Hero } from "@/components/home/hero";
import { LogoCloud } from "@/components/home/logo-cloud";
import { VisualWorkflows } from "@/components/home/visual-workflows";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <LogoCloud />
      {/* <Statistics /> */}
      <VisualWorkflows />
      <FeaturesSectionDemo />
      <CTA />
    </div>
  );
};

export default LandingPage;
