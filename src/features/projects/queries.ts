import { createSessionClient } from "@/lib/appwrite";
import { getMember } from "../members/util";
import { DATABASE_ID, PROJECTS_ID } from "@/config";
import { Project } from "./types";

interface GetProjectProps {
  projectId: string;
}

export const getProject = async ({ projectId }: GetProjectProps) => {
  const { account, databases } = await createSessionClient();

  const user = await account.get();

  const project = await databases.getDocument<Project>(
    DATABASE_ID,
    PROJECTS_ID,
    projectId
  );

  const member = await getMember({
    databases,
    userId: user.$id,
    workspaceId: project.workspaceId,
  });

  if (!member) {
    throw new Error("Unauthorized");
  }

  return project;
};

export const getTotalProjects = async () => {
  const { databases } = await createSessionClient();
  const totalProjects = await databases.listDocuments(DATABASE_ID, PROJECTS_ID);
  return totalProjects;
};
