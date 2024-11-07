import React from "react";
import { Navbar } from "./_components/navbar";
import Footer from "./_components/footer";

interface LayoutProps {
  children: React.ReactNode;
}

const LandingPageLayout = ({ children }: LayoutProps) => {
  return (
    <main className="mx-auto container px-4 sm:px-6 lg:px-8">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default LandingPageLayout;
