import { sessionMiddleware } from "@/lib/session-middleware";
import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { z } from "zod";
import { getDocument } from "../utils";
import { DATABASE_ID, DOCUMENTS_ID } from "@/config";
import { Query } from "node-appwrite";
import { Docs } from "../types";

const app = new Hono().get(
  "/",
  sessionMiddleware,
  zValidator(
    "query",
    z.object({
      workspaceId: z.string(),
      projectId: z.string(),
    })
  ),
  async (c) => {
    const databases = c.get("databases");
    const { workspaceId, projectId } = c.req.valid("query");

    const document = await getDocument({
      databases,
      workspaceId,
      projectId,
    });

    const documents = await databases.listDocuments<Docs>(
      DATABASE_ID,
      DOCUMENTS_ID,
      [
        Query.equal("workspaceId", workspaceId),
        Query.equal("projectId", projectId),
        Query.orderDesc("$createdAt"),
      ]
    );
    return c.json({ data: document, documents });
  }
);

export default app;
