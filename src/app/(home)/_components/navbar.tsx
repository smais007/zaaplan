import React from "react";
import { Button } from "@/components/ui/button";
import { AlignRight } from "lucide-react";
import Image from "next/image";

import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

import Link from "next/link";

const navLinks = [
  {
    name: "Home",
    href: "/home",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Pricing",
    href: "/pricing",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export const Navbar = () => {
  return (
    <div className="flex items-center justify-between  fixed top-0 left-0 right-0 z-50 mx-auto max-w-screen-2xl p-4   rounded-full mt-3  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 bg-gray-400 ">
      <div className="flex items-center gap-x-2">
        <Image
          src="/logo.svg"
          alt="logo"
          width={20}
          height={20}
          className="h-8 w-8 rounded-full"
        />
        <h1 className="text-xl md:text-2xl font-semibold">AstroCollab</h1>
      </div>
      <div className="hidden lg:block">
        <ul className="flex items-center gap-x-12">
          {navLinks.map((link) => (
            <li key={link.name} className="font-medium ">
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="hidden lg:block">
        <Button className="bg-transparent border-none text-black shadow-none hover:bg-transparent">
          Login
        </Button>
        <Button variant="primary" className="ml-2 rounded-full">
          Get Started
        </Button>
      </div>
      <div className="lg:hidden">
        <Drawer>
          <DrawerTrigger>
            <AlignRight />
          </DrawerTrigger>
          <DrawerContent>
            <div className="p-4">
              <div>
                <ul className="text-center flex flex-col gap-y-2.5 pb-4">
                  {navLinks.map((link) => (
                    <li
                      key={link.name}
                      className=" rounded-full py-1 hover:bg-gray-100/40 "
                    >
                      <Link href={link.href}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-y-3">
                <Button variant="secondary" className="rounded-full">
                  Login
                </Button>
                <Button variant="primary" className="rounded-full">
                  Get Started
                </Button>
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
};
