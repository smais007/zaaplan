"use client";

import { UserButton } from "@/features/auth/components/user-button";
import { MobileSidebar } from "./mobile-sidebar";
import { usePathname, useRouter } from "next/navigation";

const pathnameMap = {
  tasks: {
    title: "My Tasks",
    description: "View all of your tasks here",
  },
  projects: {
    title: "My Project",
    description: "View tasks of your project here",
  },
};

const defaultMap = {
  title: "Home",
  description: "Monitor all of your projects and tasks",
};

export const Navbar = () => {
  const pathname = usePathname();
  const pathnameParts = pathname?.split("/");

  const pathnameMapKey = pathnameParts?.[3] as keyof typeof pathnameMap;
  const { title, description } = pathnameMap[pathnameMapKey] || defaultMap;
  return (
    <nav className="flex items-center justify-between pt-4 px-6">
      <div className="flex-col hidden lg:flex">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <MobileSidebar />
      <UserButton />
    </nav>
  );
};
