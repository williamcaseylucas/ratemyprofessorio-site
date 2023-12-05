import React from "react";
import Markdown from "react-markdown";

const Tutorial = ({ header, text, image }) => {
  return (
    <div className="flex flex-col min-h-[30rem] mt-5 items-center justify-center">
      <h1 className="text-6xl mb-8">{header}</h1>
      <img
        className="h-full  object-contain rounded-md mb-4"
        src={image}
        alt=""
      />

      <Markdown className="prose mb-4">{text}</Markdown>
    </div>
  );
};

export default Tutorial;
