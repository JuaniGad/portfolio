import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Main = () => {
  const handleEmailClick = () => {
    const emailAddress = "juangadpen@hotmail.com"; // Cambia esto por la dirección de correo electrónico del destinatario
    window.location.href = `mailto:${emailAddress}`;
  };

  return (
    <div id="main" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="">
          <h1 className="py-4 text-gray-700">
            Hola, soy <span className=" text-[#5651e5]">Juan Gadpen</span>
          </h1>
          <h1 className="py-4 text-gray-700">Full Stack Web Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            Soy programador Web Full Stack, actualmente me encuentro en la
            búsqueda de mi primera oportunidad laboral para demostrar y aplicar
            mis habilidades y conocimientos.
          </p>

          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
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
  );
};
export default Main;
