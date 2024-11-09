"use client";
import { PageError } from "@/components/page-error";
import { PageLoader } from "@/components/page-loader";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useGetProject } from "@/features/projects/api/use-get-project";
import { useGetProjectAnalytics } from "@/features/projects/api/use-get-project-analytics";
import { ProjectAvatar } from "@/features/projects/components/project-avatar";
import { useProjectId } from "@/features/projects/hooks/use-project-id";
import { Bot, DraftingCompass, FileText, PencilIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const Tools = () => {
  const projectId = useProjectId();
  const router = useRouter();
  const { data: project, isLoading: isLoadingProject } = useGetProject({
    projectId,
  });

  if (!project) {
    return <PageError message="Project Data not found" />;
  }

  // Handle selection change for redirection
  const handleSelectChange = (value: string) => {
    if (value === "astroAI") {
      router.push(
        `/workspaces/${project.workspaceId}/projects/${project.$id}/whiteboard`
      );
    } else if (value === "canvas") {
      router.push(
        `/workspaces/${project.workspaceId}/projects/${project.$id}/whiteboard`
      );
    } else if (value === "documents") {
      router.push(
        `/workspaces/${project.workspaceId}/projects/${project.$id}/documents`
      );
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <Link
            className="flex items-center gap-x-2"
            href={`/workspaces/${project.workspaceId}/projects/${project.$id}`}
          >
            <ProjectAvatar
              image={project.imageUrl}
              name={project.name}
              className="size-8"
            />
            <p className="text-lg font-semibold">{project.name}</p>
          </Link>
        </div>
        <div className="flex items-center gap-x-2">
          <Select onValueChange={handleSelectChange}>
            <SelectTrigger className="w-[150px] h-8">
              <SelectValue placeholder="Select a tool" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Tools</SelectLabel>
                <SelectItem value="astroAI">
                  <div className="flex items-center">
                    <Bot className="size-4 mr-2" />
                    Astro AI
                  </div>
                </SelectItem>
                <SelectItem value="canvas">
                  <div className="flex items-center">
                    <DraftingCompass className="size-4 mr-2" />
                    Canvas
                  </div>
                </SelectItem>
                <SelectItem value="documents">
                  <div className="flex items-center">
                    <FileText className="size-4 mr-2" />
                    Documents
                  </div>
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <div>
            <Button size="sm" variant="primary" asChild>
              <Link
                href={`/workspaces/${project.workspaceId}/projects/${project.$id}/settings`}
              >
                <PencilIcon className="size-4 mr-2" />
                Edit Project
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
