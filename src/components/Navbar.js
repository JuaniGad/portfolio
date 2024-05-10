import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleEmailClick = () => {
    const emailAddress = "juangadpen@hotmail.com"; // Cambia esto por la dirección de correo electrónico del destinatario
    window.location.href = `mailto:${emailAddress}`;
  };

  return (
    <nav>
      <div className="fixed w-full h-20 shadow-xl z-[100] bg-[#ecf0f3]">
        <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
          <img src="/assets/navLogo.png" alt="/" width="125" height="50" />
          <div>
            <ul className="hidden md:flex">
              <li className="ml-10 text-sm uppercase hover:border-b">
                <a href={`#main`}>Home</a>
              </li>
              <li className="ml-10 text-sm uppercase hover:border-b">
                <a href={`#about`}>About</a>
              </li>
              <li className="ml-10 text-sm uppercase hover:border-b">
                <a href={`#skills`}>Skills</a>
              </li>
              <li className="ml-10 text-sm uppercase hover:border-b">
                <a href={`#projects`}>Projects</a>
              </li>
              <li className="ml-10 text-sm uppercase hover:border-b">
                <a href={`#contact`}>Contact</a>
              </li>
            </ul>
            <div onClick={handleNav} className="md:hidden">
              <AiOutlineMenu size={25} />
            </div>
          </div>
        </div>
        <div
          className={
            nav ? "fixed left-0 hrefp-0 w-full h-screen bg-black/70" : ""
          }>
          <div
            className={
              nav
                ? "fixed left-0 hrefp-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
                : "fixed left-[-100%] p-10 ease-in duration-500"
            }>
            <div>
              <div className="flex w-full items-center justify-between">
                <img src="/assets/navLogo.png" width="87" height="35" alt="/" />
                <div
                  onClick={handleNav}
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                  <AiOutlineClose />
                </div>
              </div>
            </div>
            <div className="py-4 flex flex-col">
              <ul className="uppercase">
                <a href={`#main`}>
                  <li className="py-4 text-sm">Home</li>
                </a>
                <a href={`#about`}>
                  <li className="py-4 text-sm">About</li>
                </a>
                <a href={`#skills`}>
                  <li className="py-4 text-sm">Skills</li>
                </a>
                <a href={`#projects`}>
                  <li className="py-4 text-sm">Projects</li>
                </a>
                <a href={`#contact`}>
                  <li className="py-4 text-sm">Contact</li>
                </a>
              </ul>
              <div className="pt-40">
                <p className="uppercase tracking-widest text-[#5651e5]">
                  Lets Connect
                </p>

                <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                  <a
                    href="https://www.linkedin.com/in/juangadpen/"
                    target="_blank"
                    rel="noreferrer">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href="https://github.com/JuaniGad"
                    target="_blank"
                    rel="noreferrer">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaGithub />
                    </div>
                  </a>
                  <div
                    className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
                    onClick={handleEmailClick}>
                    <AiOutlineMail />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
