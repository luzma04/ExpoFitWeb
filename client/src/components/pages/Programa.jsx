import React from 'react'
import Schedule from '../Schedule'
import GridCards from '../GridCards.jsx';
import { FaChevronDown } from "react-icons/fa";

function Programa() {
  return (
    <>
      <section className="relative">
        {/* Banner */}
        <div
            className="min-h-[40vh] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center px-4 text-center"
            style={{ backgroundImage: "url('/images/white-texture-banner.jpg')" }}
        >
            <p className="text-[#1E1E1E] text-4xl sm:text-4xl md:text-4xl lg:text-5xl">
            PROGRAMA DE
            </p>

            <h1
            className="font-bold text-7xl sm:text-7xl md:text-7xl lg:text-8xl bg-gradient-to-r from-[#F4004A] via-[#FF0080] to-[#F4004A] bg-clip-text text-transparent"
            style={{ fontFamily: 'Manuka Condensed' }}
            >
            ACTIVIDADES
            </h1>
        </div>

        {/* Flecha */}
        <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 z-9">
            <div className="w-14 h-14 bg-[#98C61B] rounded-full shadow-lg flex items-center justify-center">
            <FaChevronDown className="text-white text-xl" />
            </div>
        </div>
      </section>

      <div className="p-4 bg-[#1E1E1E] text-white min-h-[50vh]">
          <Schedule/>
      </div>
      
      <div className="bg-[#1E1E1E] p-3 flex flex-col justify-center">
        <h2
          className="font-bold text-center text-7xl sm:text-7xl md:text-7xl lg:text-7xl bg-gradient-to-r from-[#F4004A] via-[#FF0080] to-[#F4004A] bg-clip-text text-transparent uppercase"
          style={{ fontFamily: 'Manuka Condensed' }}
        >DISERTANTES</h2>

        <GridCards/>
      </div>
    </>
  )
}

export default Programa
