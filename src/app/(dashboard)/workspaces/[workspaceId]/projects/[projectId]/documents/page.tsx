"use client";

import React, { useState } from "react";
import MDEditor from "@uiw/react-md-editor";

const Documents = () => {
  const [docs, setDocs] = useState("**Hello world!!!**");
  console.log(docs);
  return (
    <div>
      <div>
        <div>
          <h1>Documents</h1>
        </div>
      </div>
      <div data-color-mode="light" className="container">
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
