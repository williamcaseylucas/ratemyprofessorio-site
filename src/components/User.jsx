import React from "react";
import Markdown from "react-markdown";
import { Link } from "react-router-dom";

const User = ({ header, image, text, link, index, buttonActive }) => {
  return (
    <div className="max-w-8xl mx-auto">
      <div
        className={`flex ${index % 2 ? "flex-row" : "flex-row-reverse"} p-8`}
      >
        <div id="left" className="w-[50%] m-4 p-8 ">
          <h1 className="text-6xl mb-8">{header}</h1>
          <p className="text-2xl">{text}</p>
          {buttonActive && (
            <>
              <div className="w-full mx-auto mt-8 flex items-center justify-center">
                <Link
                  className="p-5 min-w-[30%] bg-cyan-700 text-white rounded-lg shadow-xl text-center text-2xl font-semibold"
                  to={link}
                  onClick={(event) => {
                    console.log("clicked!", link);
                  }}
                >
                  Learn More
                </Link>
              </div>
            </>
          )}
        </div>
        <div
          id="right"
          className="w-[50%] h-fit mx-auto flex items-center justify-center"
        >
          <div className="flex flex-col m-4">
            <img
              className="h-[580px] object-contain rounded-md mb-4"
              src={image}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
