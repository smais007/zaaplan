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
import Link from "next/link";
import { useJoinWorkspace } from "../api/use-join-workspace";
import { useInviteCode } from "../hooks/use-invite-code";
import { useWorkspaceId } from "../hooks/use-workspace-id";
import { useRouter } from "next/navigation";

interface JoinWorkspaceProps {
  initialValues: {
    name: string;
  };
}

export const JoinWorkspaceForm = ({ initialValues }: JoinWorkspaceProps) => {
  const router = useRouter();
  const workspaceId = useWorkspaceId();
  const inviteCode = useInviteCode();
  const { mutate, isPending } = useJoinWorkspace();

  const onSubmit = () => {
    mutate(
      {
        param: { workspaceId: workspaceId },
        json: { code: inviteCode },
      },
      {
        onSuccess: ({ data }) => {
          router.push(`/workspaces/${data.$id}`);
        },
      }
    );
  };

  return (
    <Card className="w-full h-full border-none shadow-none">
      <CardHeader className="pt-7">
        <CardTitle className="text-xl font-bold">Join Workspace</CardTitle>
        <CardDescription>
          You&apos;ve been invited to join{" "}
          <span className="font-semibold">{initialValues.name}</span> workspace
        </CardDescription>
      </CardHeader>
      <CardContent className="p-7">
        <div className="flex items-center  gap-2 justify-between flex-col lg:flex-row">
          <Button
            asChild
            variant="outline"
            type="button"
            className="w-full lg:w-fit"
            disabled={isPending}
          >
            <Link href="/"> Cancel</Link>
          </Button>
          <Button
            type="button"
            disabled={isPending}
            onClick={onSubmit}
            className="w-full lg:w-fit"
          >
            Join Workspace
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
