import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";
import CV from "/Users/lucia/Desktop/my-portfolio/src/assets/Lucia Tacchetti CV ENG.pdf"


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#699261] text-gray-100 ">
      {/* <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#2b3186] text-gray-100 "> */}
      <div className="text-xl">LT</div>
      <div className="absolute right-10">
        <ul className="hidden md:flex text-lg">
          <li>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>

          <li>
            <Link to="projects" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Hamburguer */}
      <div onClick={handleClick} className=" md:hidden z-10 absolute right-10">
        {!nav ? <FaBars size={20} /> : <FaTimes size={20} />}
      </div>
      {/*  Mobile Menu */}
      <div>
        <ul
          className={
            !nav
              ? "hidden"
              : " absolute top-0 left-0 w-full h-screen bg-[#699261] flex flex-col justify-center items-center"
          }
        >
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>{" "}
          <li className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to="skills"
              smooth={true}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to="projects"
              smooth={true}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to="contact"
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/*   Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500">
            <a
              className="flex justify-between items-center w-full text-grey-300"
              href="https://www.linkedin.com/in/lucia-tacchetti-574223217/"
            >
              LinkedIn
              <FaLinkedin size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#454444]">
            <a
              className="flex justify-between items-center w-full text-grey-300"
              href="https://github.com/lutacch"
            >
              Github
              <FaGithub size={30} />
            </a>
          </li>

          <Link to="contact" smooth={true} duration={500}>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-400 ">
              <a
                className="flex justify-between items-center w-full text-grey-300"
                href="https://lu.tacchetti@gmail.com"
              >
                Mail
                <HiOutlineMail size={30} />
              </a>
            </li>
          </Link>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-500 ">
            <a
              className="flex justify-between items-center w-full text-grey-300"
              href={CV}
            >
              Resume
              <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
