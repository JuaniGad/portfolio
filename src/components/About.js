import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className=" max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About me
          </p>
          <h2 className="py-4">Quien soy?</h2>
          <p className="py-2 text-gray-600">
            Actualmente trabajo de Administrativo Contable y Back-Office con una
            pasión autodidacta por la programación.
          </p>
          <p className="py-2 text-gray-600">
            Mi capacidad para adquirir rápidamente nuevos conocimientos y
            habilidades me ha permitido incursionar en el mundo del desarrollo
            web por mi cuenta, inicialmente aprendiendo HTML, CSS y JavaScript.
            Esta experiencia despertó aún más mi interés, lo que me llevó a
            realizar cursos y diplomaturas en instituciones reconocidas como
            Coderhouse y la Universidad Tecnológica Nacional (UTN).
          </p>
          <p className="py-2 text-gray-600">
            Valorando la responsabilidad y la organización como pilares
            fundamentales en mi trabajo actual, busco constantemente nuevos
            retos que me permitan crecer tanto personal como profesionalmente.
            Utilizo mis habilidades de programación para mejorar la eficiencia
            en mi trabajo actual y contribuir al desarrollo de proyectos
            propios.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img className="rounded-xl" src="/assets/image.png" alt="/"></img>
        </div>
      </div>
    </div>
  );
};

export default About;
