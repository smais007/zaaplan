import React from "react";
import { Navbar } from "../_components/navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const LandingPageLayout = ({ children }: LayoutProps) => {
  return (
    <main className="mx-auto container px-4 sm:px-6 lg:px-8">
      <Navbar />
      {children}
    </main>
  );
};

export default LandingPageLayout;
