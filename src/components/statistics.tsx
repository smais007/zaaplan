import { getTotalUser } from "@/features/members/queries";
import { getTotalProjects } from "@/features/projects/queries";
import { getTotalWorkspaces } from "@/features/workspaces/queries";
import { DollarSign, Files, FolderClosed, Smile } from "lucide-react";

import NumberTicker from "./ui/number-ticker";

export const Statistics = async () => {
  const totalWorkspaces = await getTotalWorkspaces();
  const totalProjects = await getTotalProjects();
  const totalMembers = await getTotalUser();
  return (
    <div>
      <div className="bg-transparent py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
                Trusted by creators worldwide
              </h2>
              <p className="mt-4 text-lg/8 text-gray-600">
                Lorem ipsum dolor sit amet consect adipisicing possimus.
              </p>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col bg-gray-400/5 p-8">
                <dt className="text-sm/6 font-semibold text-gray-600  flex items-center justify-center gap-2">
                  <FolderClosed className="size-4" />
                  <p>Total Workspaces</p>
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                  <NumberTicker value={totalWorkspaces.total} />+
                </dd>
              </div>
              <div className="flex flex-col bg-gray-400/5 p-8">
                <dt className="text-sm/6 font-semibold text-gray-600  flex items-center justify-center gap-2">
                  <Files className="size-4" />
                  <p>Total Projects</p>
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                  <NumberTicker value={totalProjects.total} />+
                </dd>
              </div>
              <div className="flex flex-col bg-gray-400/5 p-8">
                <dt className="text-sm/6 font-semibold text-gray-600  flex items-center justify-center gap-2">
                  <Smile className="size-4" />
                  <p>Happy Users</p>
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                  <NumberTicker value={totalMembers.total} />+
                </dd>
              </div>
              <div className="flex flex-col bg-gray-400/5 p-8">
                <dt className="text-sm/6 font-semibold text-gray-600  flex items-center justify-center gap-2">
                  <DollarSign className="size-4" />
                  <p>Paid Users</p>
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                  <NumberTicker value={totalMembers.total} />+
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};
