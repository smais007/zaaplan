import { z } from "zod";

export const createWorkspaceSchema = z.object({
  name: z.string().trim().min(2, {
    message: "Name must be at least 2 characters.",
  }),
});
