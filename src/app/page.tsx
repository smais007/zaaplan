import { getCurrent } from "@/features/auth/actions";
import { UserButton } from "@/features/auth/components/user-button";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await getCurrent();
  console.log("User from home page:", user);
  if (!user) redirect("/sign-in");

  return (
    <div className="flex gap-4 p-20">
      <UserButton />
    </div>
  );
}
