import Excalidraw from "./components/excalidraw";

const whiteboard = () => {
  return (
    <div className="h-[calc(90svh-72px)] overflow-hidden border rounded-2xl">
      <Excalidraw />
    </div>
  );
};

export default whiteboard;
