"use client";

import React, { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import { Tools } from "../tools";

const Documents = () => {
  const [docs, setDocs] = useState("**Hello world!!!**");
  console.log(docs);
  return (
    <div className="flex flex-col gap-y-4">
      <Tools />
      <div data-color-mode="light" className="w-full">
        <MDEditor
          value={docs}
          preview="edit"
          height="calc(90svh - 72px)"
          style={{ borderRadius: "1rem", overflow: "hidden" }}
          textareaProps={{
            placeholder: "Start typing here...",
          }}
          previewOptions={{
            disallowedElements: ["style"],
          }}
          onChange={(value) => setDocs(value as string)}
        />
      </div>
    </div>
  );
};

export default Documents;
