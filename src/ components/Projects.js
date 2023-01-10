import React from "react";

import weatherApp from "../assets/WeatherApp.png";
import tictactoe from "../assets/Tic-tac-toe.png";
import StarWars from "../assets/StarWars.png";
import RealState from "../assets/Real-State.png";
import Puzzle from "../assets/Puzzle.png";
import MovieApp from "../assets/MovieAPP.png";

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full md:h-screen text-gray-200 bg-[#97b48c]"
    >
      <div className="max-w[1000px] mx-auto p-5 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-200">
            Projects
          </p>
          <p className="py-3">Check out some of my recent projects</p>
        </div>

        <div className="grid sm:grid-cols-3 md:grid-col-2 gap-4">
          <div
            style={{ backgroundImage: `url(${weatherApp})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font bold text-white tracking-wider ">
                WeatherApp
              </span>
              <div className="pt-8 text-center">
                <a href="https://weather-app-responsive.vercel.app/">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                  >
                    Demo
                  </button>
                </a>
                <a href="https://github.com/lutacch/weather-app-responsive.git">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${MovieApp})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font bold text-white tracking-wider ">
                Movies App
              </span>
              <div className="pt-8 text-center">
                <a href="https://movie-app-project-ten.vercel.app/">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                  >
                    Demo
                  </button>
                </a>
                <a href="https://github.com/lutacch/Movie-app">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${RealState})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font bold text-white tracking-wider ">
                Real State
              </span>
              <div className="pt-8 text-center">
                <a href="https://real-state-react-five.vercel.app/">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                  >
                    Demo
                  </button>
                </a>
                <a href="https://github.com/lutacch/real-state-react">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${tictactoe})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font bold text-white tracking-wider ">
                Tic-Tac-Toe
              </span>
              <div className="pt-8 text-center">
                <a href="https://63b309e48592e611f849e5d9--effulgent-nasturtium-1a008c.netlify.app/">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                  >
                    Demo
                  </button>
                </a>
                <a href="https://github.com/lutacch/tic-tac-toe">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Puzzle})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font bold text-white tracking-wider ">
                Puzzle
              </span>
              <div className="pt-8 text-center">
                <a href="https://lutacch.github.io/puzzle/">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                  >
                    Demo
                  </button>
                </a>
                <a href="https://github.com/lutacch/puzzle">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${StarWars})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font bold text-white tracking-wider ">
                StarWars Blog
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                  >
                    Demo
                  </button>
                </a>
                <a href="https://github.com/lutacch/star-wars-blog-FLUX">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
