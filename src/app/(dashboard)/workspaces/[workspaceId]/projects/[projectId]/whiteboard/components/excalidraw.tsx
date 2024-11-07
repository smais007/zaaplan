"use client";

import dynamic from "next/dynamic";

import { Theme } from "@excalidraw/excalidraw/types/element/types";
import { useColorScheme } from "@/hooks/useColorScheme";

const ExcalidrawPrimitive = dynamic(
  async () => (await import("@excalidraw/excalidraw")).Excalidraw,
  {
    ssr: false,
  }
);

const Excalidraw = () => {
  const { theme } = useColorScheme();
  return (
    <div className="relative h-[calc(90svh-72px)] overflow-hidden">
      <ExcalidrawPrimitive
        initialData={{
          appState: {
            viewBackgroundColor: "#0000",
            currentItemFontFamily: 1,
          },
        }}
        theme={theme as Theme}
      />
    </div>
  );
};

export default Excalidraw;
