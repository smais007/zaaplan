import { Loader } from "lucide-react";

export const PageLoader = () => {
  return (
    <div className=" h-full flex justify-center items-center">
      <Loader className="size-6 animate-spin text-muted-foreground" />
    </div>
  );
};
