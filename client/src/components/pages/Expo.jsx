import React from 'react'
import { FaChevronDown, FaBullseye, FaHandshake, FaStar, FaUsers, FaBullhorn, FaNetworkWired, FaPiggyBank, FaRocket } from "react-icons/fa";
import Gallery from '../gallery'
import photos from '../../assets/tools/expo-gallery.json'

function Expo() {
  return (
    <>
        <section className="relative">
        {/* Banner */}
        <div
            className="min-h-[40vh] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center px-4 text-center"
            style={{ backgroundImage: "url('/images/black-texture-banner.webp')" }}
        >
            <p className="text-white text-4xl sm:text-4xl md:text-4xl lg:text-5xl">
            4ª EXPO
            </p>

            <h1
            className="font-bold text-7xl sm:text-7xl md:text-7xl lg:text-8xl bg-gradient-to-r from-[#F4004A] via-[#FF0080] to-[#F4004A] bg-clip-text text-transparent"
            style={{ fontFamily: 'Manuka Condensed' }}
            >
            FITNESS Y SALUD NEA CHACO
            </h1>
        </div>

        {/* Flecha */}
        <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 z-9">
            <div className="w-14 h-14 bg-[#98C61B] rounded-full shadow-lg flex items-center justify-center">
            <FaChevronDown className="text-white text-xl" />
            </div>
        </div>
        </section>

        {/* Texto inferior */}
        <section className="bg-white flex flex-col items-center px-4 py-12">
        <p className="text-[#1E1E1E] max-w-[950px] text-justify text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis consequuntur eveniet architecto officiis eligendi aliquam molestias, dolorum, repellendus modi ex esse? Eius eaque quod nihil debitis, porro quas beatae ducimus placeat eveniet quidem ut at corrupti perspiciatis esse, delectus totam voluptate, nostrum enim! Nobis optio quo corrupti soluta blanditiis eius.
        </p>
        </section>

        {/* Seccion Por Que Participar*/}
        <section className="min-h-[70vh] bg-white flex flex-col justify-center items-center p-4">
            <div
                className="w-[90%] max-w-6xl bg-cover bg-center bg-no-repeat rounded-3xl shadow-lg mx-auto text-white p-10 space-y-6"
                style={{ backgroundImage: "url('/images/red-texture-square.jpg')" }}
            >
                <h2 className="text-3xl font-bold text-center mb-6">
                ¿POR QUÉ PARTICIPAR?
                </h2>

                {/* Item 1 */}
                <div className="flex flex-col sm:flex-row items-start gap-4">
                <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center aspect-square shrink-0 mx-auto sm:mx-0">
                    <FaBullseye className="text-[#F4004A] text-4xl" />
                </div>
                <div>
                    <h3 className="text-xl font-bold">Conectá con tu público objetivo.</h3>
                    <p>
                    El evento atrae a un público altamente segmentado y calificado, con decisión
                    de compra y alto interés en productos y servicios relacionados con fitness,
                    salud, nutrición, equipamiento y bienestar.
                    </p>
                </div>
                </div>

                {/* Item 2 */}
                <div className="flex flex-col sm:flex-row items-start gap-4">
                <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center aspect-square shrink-0 mx-auto sm:mx-0">
                    <FaHandshake className="text-[#F4004A] text-4xl" />
                </div>
                <div>
                    <h3 className="text-xl font-bold">Expandí tu red de contactos.</h3>
                    <p>
                    Participar te permitirá establecer alianzas estratégicas, cerrar acuerdos comerciales
                    y posicionarte frente a cientos de potenciales clientes y proveedores.
                    </p>
                </div>
                </div>

                {/* Item 3 */}
                <div className="flex flex-col sm:flex-row items-start gap-4">
                <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center aspect-square shrink-0 mx-auto sm:mx-0">
                    <FaStar className="text-[#F4004A] text-4xl" />
                </div>
                <div>
                    <h3 className="text-xl font-bold">Impulsá tu marca y destacate en el mercado.</h3>
                    <p>
                    Con un alto tráfico de visitantes y cobertura mediática, tu empresa ganará
                    visibilidad en una audiencia relevante y comprometida con la industria.
                    </p>
                </div>
                </div>
            </div>
        </section>

        <section className="bg-white py-12">
            <h2 className="text-center text-xl font-bold mb-10">
                <span className="bg-[#98C61B] px-4 py-2 rounded-lg text-white">
                PLATAFORMA INIGUALABLE PARA:
                </span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 max-w-6xl mx-auto px-4">
                {/* Item 1 */}
                <div className="flex flex-col items-center text-center h-auto lg:h-[200px] lg:justify-end">
                <div className="w-16 h-16 bg-[#F4004A] rounded-full shadow-lg flex items-center justify-center">
                    <FaUsers className="text-white text-3xl" />
                </div>
                <p className="mt-4 text-[#1E1E1E] text-x1">
                    Contacto directo con los clientes.
                </p>
                </div>

                {/* Item 2 */}
                <div className="flex flex-col items-center text-center h-auto lg:h-[200px] lg:justify-start">
                <div className="w-16 h-16 bg-[#F4004A] rounded-full shadow-lg flex items-center justify-center">
                    <FaBullhorn className="text-white text-3xl" />
                </div>
                <p className="mt-4 text-[#1E1E1E] text-x1">
                    Posicionamiento de marca.
                </p>
                </div>

                {/* Item 3 */}
                <div className="flex flex-col items-center text-center h-auto lg:h-[200px] lg:justify-end">
                <div className="w-16 h-16 bg-[#F4004A] rounded-full shadow-lg flex items-center justify-center">
                    <FaNetworkWired className="text-white text-3xl" />
                </div>
                <p className="mt-4 text-[#1E1E1E] text-x1">
                    Networking con profesionales y asociaciones comerciales.
                </p>
                </div>

                {/* Item 4 */}
                <div className="flex flex-col items-center text-center h-auto lg:h-[200px] lg:justify-start">
                <div className="w-16 h-16 bg-[#F4004A] rounded-full shadow-lg flex items-center justify-center">
                    <FaPiggyBank className="text-white text-3xl" />
                </div>
                <p className="mt-4 text-[#1E1E1E] text-x1">
                    Acceso a beneficios exclusivos con entidades financieras.
                </p>
                </div>

                {/* Item 5 */}
                <div className="flex flex-col items-center text-center h-auto lg:h-[200px] lg:justify-end">
                <div className="w-16 h-16 bg-[#F4004A] rounded-full shadow-lg flex items-center justify-center">
                    <FaRocket className="text-white text-3xl" />
                </div>
                <p className="mt-4 text-[#1E1E1E] text-x1">
                    Presentación y lanzamiento de productos.
                </p>
                </div>
            </div>
        </section>

        <section className="flex flex-col md:flex-row items-center justify-center m-10 gap-4">
            <button className="w-full md:w-auto bg-[#98C61B] text-white font-bold py-3 px-6 rounded-full shadow-md hover:bg-[#1E1E1E] transition duration-300">
                Reservá tu Stand
            </button>
            <button className="w-full md:w-auto bg-[#98C61B] text-white font-bold py-3 px-6 rounded-full shadow-md hover:bg-[#1E1E1E] transition duration-300">
                Sumate como Sponsor
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
  )
}

export default Expo
