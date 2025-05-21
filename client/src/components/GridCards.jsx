import React from 'react'
import { useState } from "react";
import Disertante1 from '../assets/images/disertantes/disertante-guillermo-steg.png'
import Disertante2 from '../assets/images/disertantes/disertante-javier-saez.png'
import Disertante3 from '../assets/images/disertantes/disertante-cain-orban.png'
import Disertante4 from '../assets/images/disertantes/disertante-victor-vesconi.png'
import Disertante5 from '../assets/images/disertantes/disertante-matias-amarilla.png'
import Disertante6 from '../assets/images/disertantes/disertante-simon-cuberas.png'
import Disertante7 from '../assets/images/disertantes/disertante-daniel-ojeda.png'
import Disertante8 from '../assets/images/disertantes/disertante-nicolas-pedrido.png'
const disertantes = [
    {
      nombre: "Guillermo Steg",
      charla: "Optimizá tu resistencia:",
      descripcion: "Evaluación y prescripción en fitness.",
      imagen: Disertante1,
    },
    {
      nombre: "Javier Saez",
      charla: "Desarrollo de la fuerza en el deporte:",
      descripcion: "Técnicas y progresiones efectivas.",
      imagen: Disertante2,
    },
    {
      nombre: "Caín Orban",
      charla: "Movilidad funcional:",
      descripcion: "Evaluación y mejora en entrenamiento fitness.",
      imagen: Disertante3,
    },
    {
      nombre: "Victor Vesconi",
      charla: "Prevención de lesiones:",
      descripcion: "Estrategias esenciales para un fitness seguro.",
      imagen: Disertante4,
    },
    {
      nombre: "Matías Amarilla",
      charla: "Entrenamiento de la fuerza:",
      descripcion: "Diferencias clave entre deporte y fitness.",
      imagen: Disertante5,
    },
    {
      nombre: "Simón Cuberas",
      charla: "Gestión inteligente",
      descripcion: "para la expansión de tu gimnasio.",
      imagen: Disertante6,
    },
    {
      nombre: "Daniel Ojeda",
      charla: "Negocios que crecen:",
      descripcion: "Cómo poner al cliente en el centro de tu estrategia.",
      imagen: Disertante7,
    },
    {
      nombre: "Nicolás Pedrido",
      charla: "Hidratación consciente:",
      descripcion: "Lo que todo deportista debe saber.",
      imagen: Disertante8,
    }
  ];
function GridCards() {
  const [flippedCards, setFlippedCards] = useState({});

  const toggleFlip = (index) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section className="bg-[#1E1E1E] px-1 py-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[6px] max-w-[850px] mx-auto justify-items-center">
          {disertantes.map((disertante, index) => {
            const isFlipped = flippedCards[index];

            return (
              <div
                key={index}
                className="w-[200px] h-[310px] [perspective:1000px] group cursor-pointer"
                onClick={() => toggleFlip(index)}
              >
                <div
                  className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
                    isFlipped ? "[transform:rotateY(180deg)]" : ""
                  } md:group-hover:[transform:rotateY(180deg)]`}
                >
                  {/* Cara frontal */}
                  <div className="absolute w-full h-full rounded-xl overflow-hidden flex items-start justify-center [backface-visibility:hidden]">
                    <img
                      src={disertante.imagen}
                      alt={disertante.nombre}
                      className="object-contain h-[400px] max-w-[180px] translate-y-[-6px]"
                    />
                  </div>

                  {/* Cara trasera */}
                  <div className="absolute w-full h-full rounded-xl shadow-lg bg-gradient-to-t from-black via-[#181818] to-[#1E1E1E] p-3 flex flex-col justify-end [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <p className="text-[10px] bg-[#98C61B] text-[#1E1E1E] font-semibold inline-block px-2 py-[2px] rounded w-fit">
                      CHARLA
                    </p>
                    <h3 className="text-base font-bold text-[#98C61B] mt-1">
                      {disertante.charla}
                    </h3>
                    <p className="text-xs text-white">{disertante.descripcion}</p>
                    <p className="text-sm text-white font-semibold mt-2">
                      {disertante.nombre}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
    </section>
  )
}

export default GridCards
