import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#97b48c]">
      {/*  <div name="home" className="w-full h-screen bg-[#c6afbb]"> */}
      {/* Container*/}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-lg text-gray-200">👋🏼 Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-gray-200">
          Lucia Tacchetti
        </h1>
        <h2 className="text-3xl sm:text-6xl text-gray-500">
          I'm a Full Stack Developer
        </h2>
        <p className="text-gray-600 max-w-[700px]">

        I'm a very creative person and in constant search of changes.
I decided to start studying programming and make a professional turn to change my life.
I enjoy creating solutions and giving my vision.
          
        </p>
        <div>
          <Link to="projects" smooth={true} duration={500}>
            <button className="text-gray-200  px-6 py-3 mt-2 hover:bg-green-400">
              View Work
              <HiArrowNarrowRight size={30} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
