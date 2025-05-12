import React from 'react';
import Gallery from '../gallery'
import photos from '../../assets/tools/expo-gallery.json'
import { FaChevronDown } from "react-icons/fa";

export default function Copa() {
  return (
    <>
      {/* Banner */}
      <section className="relative">
        <div
          className="min-h-[40vh] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center px-4 text-center"
          style={{ backgroundImage: "url('/images/black-texture-banner.jpg')" }}
        >
          <p className="text-white text-4xl lg:text-5xl">11° COPA</p>
          <h1
            className="font-bold text-7xl lg:text-8xl bg-gradient-to-r from-[#F4004A] via-[#FF0080] to-[#F4004A] bg-clip-text text-transparent"
            style={{ fontFamily: 'Manuka Condensed' }}
          >
            NATURAL SHOP
          </h1>
        </div>

        {/* Flecha */}
        <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 z-9">
          <div className="w-14 h-14 bg-[#98C61B] rounded-full shadow-lg flex items-center justify-center">
            <FaChevronDown className="text-white text-xl" />
          </div>
        </div>
      </section>

      {/* Introducción */}
      <section className="bg-white flex flex-col items-center px-4 py-12 text-[#1E1E1E]">
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-[#98C61B] mb-4">
            Una Copa, Muchas Oportunidades
          </h2>
          <p className="max-w-[950px] text-justify text-lg">
          Este año la 11° Copa Natural Shop marca un hito al convertirse en sede del <b>Campeonato Nacional de Fisicoculturismo y Fitness 2025</b>, clasificatorio para el Campeonato Sudamericano.
Ser sede de un torneo nacional representa una oportunidad única para la ciudad, no solo
desde el ámbito deportivo, sino también como motor de desarrollo para el turismo, la
cultura y la gastronomía local. Estos eventos atraen a atletas, entrenadores y espectadores de todo el país, generando un importante movimiento económico y social. Además,
permiten visibilizar la riqueza cultural y natural de la región, fortaleciendo su identidad y
promoviendo la gastronomía típica. En este sentido, el impacto trasciende lo deportivo y
posiciona a la ciudad como un destino clave en la agenda nacional.
          </p>
        </div>
        <button className="mt-8 bg-[#98C61B] text-white font-bold py-3 px-6 rounded-full shadow-md hover:bg-[#1E1E1E] transition duration-300">
          Inscribite
        </button>
      </section>

      <section className='py-20 bg-white'>
            <div className='container mx-auto px-4'>
                <h2 className='text-4xl text-[#1E1E1E] font-bold uppercase'>Ediciones pasadas{" "}
                    <span className='inline-block bg-[#98C61B] w-40 h-1 ml-2'></span>
                </h2>
            </div>
            <Gallery data={photos.gallery}/>
      </section>
    </>
  );
}