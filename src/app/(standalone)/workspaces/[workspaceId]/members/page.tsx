import { getCurrent } from "@/features/auth/queries";
import { MemberList } from "@/features/workspaces/components/member-list";
import { redirect } from "next/navigation";
import React from "react";

const WorkspaceIdMemberPage = async () => {
  const user = await getCurrent();
  if (!user) redirect("/sign-in");
  return (
    <div className="w-full lg:max-w-lg">
      <MemberList />
    </div>
  );
};

export default WorkspaceIdMemberPage;
