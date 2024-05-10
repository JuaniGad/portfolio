import React from "react";
import { NavLink } from "react-router-dom";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">Mis proyectos</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <img
              className="rounded-xl group-hover:opacity-10 p-4"
              src="/assets/projects/gestor-2.png"
              alt="/"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center">
                Gestor de empleados
              </h3>
              <p className="pb-4 pt-2 text-white text-center">
                JAVA-JavaScript-Springboot-React-SQL-TailwindCSS
              </p>
              <NavLink to="/project1">
                <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                  Más Información
                </p>
              </NavLink>
            </div>
          </div>
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <img
              className="rounded-xl p-4 group-hover:opacity-10"
              src="/assets/projects/recursoshumanos.png"
              alt="/"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center">
                Recursos Humanos
              </h3>
              <p className="pb-4 pt-2 text-white text-center">
                JavaScript-React-NodeJS-TailwindCSS-SQL
              </p>
              <NavLink to="/project2">
                <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                  Más Información
                </p>
              </NavLink>
            </div>
          </div>
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <img
              className="p-4 rounded-xl group-hover:opacity-10"
              src="/assets/projects/estudioJ1.png"
              alt="/"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center">
                Estudio Jurídico
              </h3>
              <p className="pb-4 pt-2 text-white text-center">
                JavaScript-React-NodeJS-SQL-CSS
              </p>
              <NavLink to="/project3">
                <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                  Más Información
                </p>
              </NavLink>
            </div>
          </div>
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <img
              className="p-4 rounded-xl group-hover:opacity-10"
              src="/assets/projects/webResponsive_1.png"
              alt="/"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center">
                Práctica Web-Responsive
              </h3>
              <p className="pb-4 pt-2 text-white text-center">
                JavaScript-React-TailwindCSS
              </p>
              <NavLink to="/project4">
                <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                  Más Información
                </p>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
