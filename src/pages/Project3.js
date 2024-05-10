import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Project3 = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <img
          className="absolute z-1 object-cover h-full w-full"
          src="/assets/projects/estudioJ1.png"
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Estudio Jurídico</h2>
          <h3>JavaScript / React/ NodeJS / TailwindCSS </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Estudio Juridico</p>
          <h2>Descripción</h2>
          <p>
            Esta app y sitio web fue realizada utilizando Javascript y la
            librería React para el frontend y para el diseño del backend y su
            funcionamiento se empleó el entorno de ejecución NodeJS.
          </p>
          <p>
            El funcionamiento de esta app consiste en la actualización
            automática del frontend mediante modificaciones la plataforma del
            backend, esto genera que se actualice y se apliquen los cambios
            automáticamente en la página del estudio.
          </p>

          <a
            href="https://github.com/JuaniGad/ProyectoFullstackUTN-ReactJs-NodeJs"
            target="_blank"
            rel="noreferrer">
            <button className="px-8 py-2 mt-4 mr-8">Código</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Tecnologías</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> JavaScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> NodeJS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> SQL
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> TailwindCSS
              </p>
            </div>
          </div>
        </div>
        <Link to="/#main">
          <p className="underline cursor-pointer">Volver</p>
        </Link>
      </div>
    </div>
  );
};

export default Project3;
