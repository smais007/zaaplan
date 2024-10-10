"use client";

import { useRouter } from "next/navigation";
import { useCurrent } from "./features/auth/api/use-current";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useLogout } from "./features/auth/api/use-logout";
import { UserButton } from "./features/auth/components/user-button";

export default function Home() {
  const router = useRouter();
  const { data, isLoading } = useCurrent();
  const { mutate } = useLogout();

  useEffect(() => {
    if (!isLoading && !data) {
      router.push("/sign-in");
    }
  }, [data, isLoading, router]);

  return (
    <div className="flex gap-4 p-20 ">
      <h1>Only visiable for authenticated users</h1>
      <Button onClick={() => mutate()}>Logout</Button>
      <UserButton />
    </div>
  );
}
