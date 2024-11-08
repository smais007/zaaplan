"use client";
import {
  Headset,
  LayoutDashboard,
  Loader,
  LogOut,
  Settings,
  User,
} from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useCurrent } from "../api/use-current";
import { useLogout } from "../api/use-logout";
import Link from "next/link";
import { useWorkspaces } from "@/features/workspaces/api/use-workspaces";

export const UserButton = () => {
  const { data: user, isLoading } = useCurrent();
  const { mutate: logout } = useLogout();
  const { data } = useWorkspaces();
  if (isLoading) {
    return (
      <div className="size-10 rounded-full flex items-center justify-center  bg-neutral-200 border border-neutral-200 ">
        <Loader className="size-4 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (!user) {
    return null;
  }
  const { name, email } = user;

  const avatarFallback = name
    ? name.charAt(0).toUpperCase()
    : email.charAt(0).toUpperCase() ?? "U";

  const workspacesCount = data?.total ?? 0;
  const workspaceId = data?.documents?.[0]?.$id ?? null;

  const redirectPath =
    workspacesCount === 0 || !workspaceId
      ? "/workspaces/create"
      : `/workspaces/${workspaceId}`;

  console.log("Dashboard path: ", redirectPath);

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger className="outline-none relative">
        <Avatar className="cursor-pointer size-10 hover:opacity-75 transition border border-neutral-300">
          <AvatarFallback className="bg-neutral-200 font-medium text-neutral-500 flex items-center justify-center">
            {avatarFallback}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-60"
        align="end"
        side="bottom"
        sideOffset={10}
      >
        <div className="flex flex-col items-center justify-center gap-2 px-2.5 py-4">
          <Avatar className="size-[52px]  transition border border-neutral-300">
            <AvatarFallback className="bg-neutral-200 text-2xl font-medium text-neutral-500 flex items-center justify-center">
              {avatarFallback}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-center justify-center">
            <p className="text-sm font-medium text-neutral-900">
              {name || "User"}
            </p>
            <p className="text-xs text-neutral-500">{email}</p>
          </div>
        </div>
        <DropdownMenuSeparator className="mb-1" />
        <DropdownMenuItem>
          <LayoutDashboard className="size-4 mr-2" />
          <Link href={redirectPath}>Dashboard</Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          <User className="size-4 mr-2" />
          <Link href="/">Profile</Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          <Settings className="size-4 mr-2" />
          <Link href="/">Settings</Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          <Headset className="size-4 mr-2" />
          <Link href="/">Support</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="mb-1" />
        <DropdownMenuItem onClick={() => logout()} className="cursor-pointer">
          <LogOut className="size-4 mr-2" /> Log Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
