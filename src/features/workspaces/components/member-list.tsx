"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useGetMembers } from "@/features/members/api/use-get-members";
import { ArrowLeft, MoreVerticalIcon } from "lucide-react";
import Link from "next/link";
import { useWorkspaceId } from "../hooks/use-workspace-id";
import { Fragment } from "react";
import { MemberAvatar } from "@/features/members/components/members-avatar";
import { Separator } from "@/components/ui/separator";
import { useDeleteMember } from "@/features/members/api/use-delete-member";
import { useUpdateMember } from "@/features/members/api/use-update-member";
import { MemberRole } from "@/features/members/types";
import { useConfirm } from "@/hooks/use-confirm";

export const MemberList = () => {
  const workspaceId = useWorkspaceId();
  const { data } = useGetMembers({ workspaceId });

  const [ConfirmDialog, confirm] = useConfirm(
    "Delete Member",
    "Are you sure you want to delete this member?",
    "destructive"
  );

  const { mutate: deleteMember, isPending: isDeletingMember } =
    useDeleteMember();

  const { mutate: updateMember, isPending: isUpdatingMember } =
    useUpdateMember();

  const handleUpdateMember = (memberId: string, role: MemberRole) => {
    updateMember({
      json: { role },
      param: { memberId },
    });
  };

  const handleDeleteMember = async (memberId: string) => {
    const ok = await confirm();
    if (!ok) return;

    deleteMember(
      { param: { memberId } },
      {
        onSuccess: () => {
          window.location.reload();
        },
      }
    );
  };

  return (
    <Card className="w-full h-full border-none shadow-none">
      <ConfirmDialog />
      <CardHeader className="flex  items-center flex-row space-x-4">
        <Button asChild variant="secondary" size="sm">
          <Link href="/">
            <ArrowLeft className="size-4 mr-2" />
            Backe
          </Link>
        </Button>
        <CardTitle className="text-xl font-bold">Members List</CardTitle>
      </CardHeader>
      <CardContent className="p-7">
        {data?.documents.map((member, index) => (
          <Fragment key={index}>
            <div className="flex items-center  gap-2">
              <MemberAvatar
                className="size-10"
                name={member.name}
                fallbackClassName="text-lg"
              />
              <div className="flex flex-col">
                <p className="text-sm font-medium">{member.name}</p>
                <p className="text-xs text-muted-foreground">{member.email}</p>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="ml-auto" variant="secondary" size="icon">
                    <MoreVerticalIcon className="size-4 text-muted-foreground" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent side="bottom" align="end">
                  <DropdownMenuItem
                    className="font-medium"
                    onClick={() =>
                      handleUpdateMember(member.$id, MemberRole.ADMIN)
                    }
                    disabled={isUpdatingMember}
                  >
                    Set as Administrator
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="font-medium"
                    onClick={() =>
                      handleUpdateMember(member.$id, MemberRole.MEMBER)
                    }
                    disabled={isUpdatingMember}
                  >
                    Set as Member
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="font-medium text-red-800"
                    onClick={() => handleDeleteMember(member.$id)}
                    disabled={isUpdatingMember}
                  >
                    Remove {member.name}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            {index < data?.documents.length - 1 && (
              <Separator className="my-2.5 " />
            )}
          </Fragment>
        ))}
      </CardContent>
    </Card>
  );
};
