import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import REACT from "../assets/react.png";
import Python from "../assets/python.png";
import GitHub from "../assets/github.png";

const Skills = () => { 
  return (
    <div
      name="skills"
      className="max-w[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full  bg-[#d5e2d1]"
    >
      {/*     Container */}

      <div className="max-w-[1000px] text-gray-500  mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            Skills
          </p>
          <p className="py-2">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8 bg-gray-">
          <div className=" shadow-md shadow-gray-700 hover:scale-110 duration-500 bg-[#97b48c]">
            <img className="w-20 mx-auto mt-4" src={HTML} alt="HTML icon"></img>
            <p className="my-4">HTML</p>
          </div>

          <div className=" shadow-md shadow-gray-700 hover:scale-110 duration-500 bg-[#97b48c]">
            <img className="w-20 mx-auto mt-4" src={CSS} alt="CSS icon"></img>
            <p className="my-4">CSS</p>
          </div>

          <div className=" shadow-md shadow-gray-700 hover:scale-110 duration-500 bg-[#97b48c]">
            <img
              className="w-20 mx-auto mt-4"
              src={JavaScript}
              alt="JavaScript icon"
            ></img>
            <p className="my-4">JavaScript</p>
          </div>

          <div className=" shadow-md shadow-gray-700 hover:scale-110 duration-500 bg-[#97b48c]">
            <img
              className="w-20 mx-auto mt-4"
              src={REACT}
              alt="REACT icon"
            ></img>
            <p className="my-4">REACT JS</p>
          </div>

          <div className=" shadow-md shadow-gray-700 hover:scale-110 duration-500 bg-[#97b48c]">
            <img
              className="w-20 mx-auto mt-4"
              src={Python}
              alt="Python icon"
            ></img>
            <p className="my-4">PYTHON</p>
          </div>

          <div className=" shadow-md shadow-gray-700 hover:scale-110 duration-500 bg-[#97b48c]">
            <img
              className="w-20 mx-auto mt-4"
              src={GitHub}
              alt="GitHub icon"
            ></img>
            <p className="my-4">GitHub</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
