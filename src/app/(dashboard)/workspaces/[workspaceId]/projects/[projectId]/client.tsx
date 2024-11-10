"use client";

import { Analytics } from "@/components/analytics";
import { PageError } from "@/components/page-error";
import { PageLoader } from "@/components/page-loader";
import { Button } from "@/components/ui/button";
import { useGetProject } from "@/features/projects/api/use-get-project";
import { useGetProjectAnalytics } from "@/features/projects/api/use-get-project-analytics";
import { ProjectAvatar } from "@/features/projects/components/project-avatar";
import { useProjectId } from "@/features/projects/hooks/use-project-id";
import { TaskViewSwitcher } from "@/features/tasks/components/task-view-switcher";
import { DraftingCompass, FileText, PencilIcon } from "lucide-react";
import Link from "next/link";
import { Tools } from "./tools";

export const ProjectIdClient = () => {
  const projectId = useProjectId();

  const { data: analytics, isLoading: isLoadingAnalytics } =
    useGetProjectAnalytics({ projectId });
  const { data: project, isLoading: isLoadingProject } = useGetProject({
    projectId,
  });

  const isLoading = isLoadingProject || isLoadingAnalytics;

  if (isLoading) {
    return <PageLoader />;
  }

  if (!project) {
    return <PageError message="Project Data not dound" />;
  }

  return (
    <div className="flex flex-col gap-y-4">
      <Tools />
      {analytics ? <Analytics data={analytics} /> : null}

      <TaskViewSwitcher hideProjectFilter />
    </div>
  );
};
