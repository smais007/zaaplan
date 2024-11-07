import { DATABASE_ID, DOCUMENTS_ID } from "@/config";
import { Databases, Query } from "node-appwrite";

interface GetDocumentProps {
  databases: Databases;
  workspaceId: string;
  projectId: string;
}

export const getDocument = async ({
  databases,
  workspaceId,
  projectId,
}: GetDocumentProps) => {
  const documents = await databases.listDocuments(DATABASE_ID, DOCUMENTS_ID, [
    Query.equal("workspaceId", workspaceId),
    Query.equal("projectId", projectId),
  ]);

  return documents.documents[0];
};
