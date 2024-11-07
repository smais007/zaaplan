"use client";

import React, { use } from "react";
import { Button } from "@/components/ui/button";
import { AlignRight } from "lucide-react";
import Image from "next/image";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserButton } from "@/features/auth/components/user-button";
import { useCurrent } from "@/features/auth/api/use-current";

const navLinks = [
  {
    name: "Home",
    href: "/",
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
  const pathname = usePathname();
  const { data: user } = useCurrent();
  return (
    <div className="flex items-center justify-between  fixed top-0 left-0 right-0 z-50 mx-auto max-w-screen-2xl p-4   rounded-full mt-3  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 bg-gray-400 ">
      <div>
        <Link href="/" className="flex items-center gap-x-2">
          <Image
            src="/logo.svg"
            alt="logo"
            width={20}
            height={20}
            className="h-8 w-8 rounded-full"
          />
          <h1 className="text-xl md:text-2xl font-semibold">AstroColab</h1>
          <p className="text-sm font-semibold bg-gradient-to-r from-pink-500 to-violet-500 px-2 text-gray-50 py-0.5 rounded-full">
            Beta
          </p>
        </Link>
      </div>
      <div className="hidden lg:block">
        <ul className="flex items-center gap-x-12">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className={`font-medium ${
                pathname === link.href
                  ? "font-semibold text-primary"
                  : "text-gray-700"
              }`}
            >
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="hidden lg:block">
        {!user ? (
          <>
            <Button
              asChild
              className="bg-transparent border-none text-black shadow-none hover:bg-transparent"
            >
              <Link href="/sign-in">Sign in</Link>
            </Button>
            <Button asChild variant="primary" className="ml-2 rounded-full">
              <Link href="/sign-up">Get Started</Link>
            </Button>
          </>
        ) : (
          <UserButton />
        )}
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
                <Button asChild variant="secondary" className="rounded-full">
                  <Link href="/sign-in">Sign in</Link>
                </Button>
                <Button asChild variant="primary" className="rounded-full">
                  <Link href="/sign-up">Get Started</Link>
                </Button>
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
};
