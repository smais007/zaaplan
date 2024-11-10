import { Tools } from "../tools";
import Excalidraw from "./components/excalidraw";

const whiteboard = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <Tools />
      <div className="h-[calc(90svh-72px)] overflow-hidden border rounded-2xl">
        <Excalidraw />
      </div>
    </div>
  );
};

export default whiteboard;
