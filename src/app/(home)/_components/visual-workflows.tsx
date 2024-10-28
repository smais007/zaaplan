export const VisualWorkflows = () => {
  return (
    <div className="py-20 mx-auto container ">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-semibold ">Visual Workflows</h1>
        <p className="text-muted-foreground mt-4 text-base">
          Select a view and work the way you want
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* List views */}
        <div className="mx-auto flex flex-col  w-80 h-72 items-center">
          <h1 className="text-xl font-semibold">List Views</h1>
          <div>
            <div className="h-64 w-80 shadow-lg rounded-xl drop-shadow-lg border-none p-5 flex  flex-col gap-y-4">
              <div className=" flex flex-col gap-y-1.5">
                <div className="h-4 w-20 rounded-lg bg-violet-400/50"></div>
                <div className="h-4 w-40 rounded-lg bg-gray-400/20"></div>
                <div className="h-4 w-full rounded-lg bg-gray-400/20"></div>
              </div>
              <div className=" flex flex-col gap-y-2">
                <div className="h-4 w-20 rounded-lg bg-green-400/50"></div>
                <div className="h-4 w-full rounded-lg bg-gray-400/20"></div>
                <div className="h-4 w-32 rounded-lg bg-gray-400/20"></div>
              </div>
              <div className=" flex flex-col gap-y-2">
                <div className="h-4 w-20 rounded-lg bg-sky-400/50"></div>
                <div className="h-4 w-52 rounded-lg bg-gray-400/20"></div>
                <div className="h-4 w-36 rounded-lg bg-gray-400/20"></div>
              </div>
            </div>
          </div>
        </div>
        {/* Kanban */}
        <div className="flex flex-col mx-auto  w-80 h-72 items-center">
          <h1 className="text-xl font-semibold">Kanban Board</h1>
          <div className="flex gap-x-3">
            <div className="h-64 w-40 shadow-lg rounded-xl drop-shadow-lg border-none p-5 flex flex-col gap-y-4">
              <div className=" flex flex-col gap-y-2 border-b-2 border-gray-400/20 pb-2">
                <div className="h-4 w-14 rounded-lg bg-green-400/50"></div>
                <div className="h-4 w-full rounded-lg bg-gray-400/20"></div>
                <div className="h-4 w-14 rounded-lg bg-gray-400/20"></div>
              </div>
              <div className=" flex flex-col gap-y-2 border-b-2 border-gray-400/20 pb-2">
                <div className="h-4 w-14 rounded-lg bg-sky-400/50"></div>
                <div className="h-4 w-24 rounded-lg bg-gray-400/20"></div>
                <div className="h-4 w-16 rounded-lg bg-gray-400/20"></div>
              </div>
            </div>
            <div className="h-64 w-40 shadow-lg rounded-xl drop-shadow-lg border-none p-5 flex flex-col gap-y-4">
              <div className=" flex flex-col gap-y-2 border-b-2 border-gray-400/20 pb-2">
                <div className="h-4 w-14 rounded-lg bg-violet-400/50"></div>
                <div className="h-4 w-20 rounded-lg bg-gray-400/20"></div>
                <div className="h-4 w-full rounded-lg bg-gray-400/20"></div>
              </div>
            </div>
          </div>
        </div>
        {/* Calendar */}
        <div className="flex flex-col mx-auto w-80 h-72 items-center">
          <h1 className="text-xl font-semibold">Calendar View</h1>
          <div className="h-64 w-80 shadow-lg rounded-xl drop-shadow-lg border-none p-5 flex flex-col gap-y-4">
            <div className="border h-full w-full rounded-lg border-gray-400/20 p-4">
              <div className="grid grid-cols-4 gap-1">
                <div className="bg-gray-200/40 rounded-lg p-2 h-4 w-auto shadow-none"></div>
                <div className="bg-gray-200/40 rounded-lg p-2 h-4 w-auto shadow-none"></div>
                <div className="bg-gray-200/40 rounded-lg p-2 h-4 w-auto shadow-none"></div>
                <div className="bg-gray-200/40 rounded-lg p-2 h-4 w-auto shadow-none"></div>
              </div>
              <div className=""></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
