import React from "react";

const Certificaciones = () => {
  return (
    <div className="max-w-[1240px] mx-auto">
      <h2 className="text-2xl font-bold mb-4">Certificaciones</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-1 gap-4">
        <li className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-semibold mb-2">
            Diplomatura en programación Java
          </h3>
          <p>
            Centro de estudios: Universidad Tecnológica Nacional - Centro
            e-Learning
          </p>
        </li>
        <li className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-semibold mb-2">
            Diplomatura en programación web full stack con ReactJs
          </h3>
          <p>
            Centro de estudios: Universidad Tecnológica Nacional - Centro
            e-Learning
          </p>
        </li>
        <li className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-semibold mb-2">JavaScript</h3>
          <p>Centro de estudios: Coderhouse</p>
        </li>
        <li className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-semibold mb-2">
            Fundamentos de programación
          </h3>
          <p>
            Centro de estudios: Universidad Tecnológica Nacional - Centro
            e-Learning
          </p>
        </li>
        <li className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-semibold mb-2">
            Título universitario graduado de Corredor Inmobiliario, Martillero
            Público y Administrador de Consorcio
          </h3>
          <p> Centro de estudios: Universidad Abierta Interamericana</p>
        </li>
      </ul>
    </div>
  );
};

export default Certificaciones;
