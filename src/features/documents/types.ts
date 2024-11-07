import { Models } from "node-appwrite";

export type Docs = Models.Document & {
  workspaceId: string;
  projectId: string;
  createdAt: string;
};
