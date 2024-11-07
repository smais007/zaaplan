import { DATABASE_ID, MEMBERS_ID } from "@/config";
import { createSessionClient } from "@/lib/appwrite";

export const getTotalUser = async () => {
  const { databases } = await createSessionClient();
  const totalUsers = await databases.listDocuments(DATABASE_ID, MEMBERS_ID);
  return totalUsers;
};
