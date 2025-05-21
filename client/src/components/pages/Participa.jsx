import React from 'react'
import { useState } from 'react';
import { FaChevronDown } from "react-icons/fa";
import FAQs from '../F&Qs.jsx';
import Mapa from '../../assets/images/stands-map.png';
import Form from '../Form';

export default function Participa() {
  const [openIndex, setOpenIndex] = useState(null);
  const [isMapOpen, setIsMapOpen] = useState(false);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sections = [
    {
      title: 'Reservar un Stand',
      content: (
          <div className="space-y-8 px-1 py-8">
            <p className="text-lg text-[#1E1E1E] max-w-3xl mx-auto text-justify">
              Los stands están diseñados para ofrecer máxima exposición y contacto
              con potenciales clientes y socios comerciales.
            </p>

            <div className="flex flex-col items-center space-y-4 ">
              <img
                src={Mapa}
                alt="Mapa de Stands"
                className="rounded-lg shadow-lg w-full max-w-2xl h-auto"
              />
              <button
                onClick={() => setIsMapOpen(true)}
                className="bg-[#98C61B] text-white px-4 py-2 rounded hover:bg-[#7cab17] transition"
              >
                Ver mapa en pantalla completa
              </button>
            </div>

            {/* Modal */}
            {isMapOpen && (
              <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 min-h-[100vh] pt-20">
                <div className="relative">
                <button
                  onClick={() => setIsMapOpen(false)}
                  className="absolute top-4 right-4 bg-[#F4004A] text-white rounded-full p-3 hover:bg-[#F4004A] text-2xl leading-none"
                >
                  ×
                </button>
                  <img src={Mapa} alt="Mapa de Stands" className="max-h-[80vh] max-w-[80vw] rounded-lg z-50" />
                </div>
              </div>
            )}

            <div className="space-y-6">
              <h3 className="text-2xl text-[#98C61B] font-bold text-center">PRECIOS</h3>

              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-600 text-[#1E1E1E]">
                  <thead>
                    <tr className="bg-[#1E1E1E] text-[#98C61B] font-bold">
                      <th className="border border-gray-600 px-4 py-2">STAND</th>
                      <th className="border border-gray-600 px-4 py-2">MEDIDAS</th>
                      <th className="border border-gray-600 px-4 py-2">MARZO</th>
                      <th className="border border-gray-600 px-4 py-2">ABRIL</th>
                      <th className="border border-gray-600 px-4 py-2">MAYO</th>
                      <th className="border border-gray-600 px-4 py-2">JUNIO</th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    <tr>
                      <td className="px-4 py-2 flex items-center gap-2 justify-center">
                        <div className="w-4 h-4 bg-pink-300 rounded-sm"></div> Chico
                      </td>
                      <td className="border border-gray-600 px-4 py-2">6 m²</td>
                      <td className="border border-gray-600 px-4 py-2">$655.200,00</td>
                      <td className="border border-gray-600 px-4 py-2">$748.800,00</td>
                      <td className="border border-gray-600 px-4 py-2">$842.400,00</td>
                      <td className="border border-gray-600 px-4 py-2">$936.000,00</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-600 px-4 py-2 flex items-center gap-2 justify-center">
                        <div className="w-4 h-4 bg-yellow-300 rounded-sm"></div> Mediano
                      </td>
                      <td className="border border-gray-600 px-4 py-2">9 m²</td>
                      <td className="border border-gray-600 px-4 py-2">$982.800,00</td>
                      <td className="border border-gray-600 px-4 py-2">$1.123.200,00</td>
                      <td className="border border-gray-600 px-4 py-2">$1.263.600,00</td>
                      <td className="border border-gray-600 px-4 py-2">$1.404.000,00</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-600 px-4 py-2 flex items-center gap-2 justify-center">
                        <div className="w-4 h-4 bg-red-800 rounded-sm"></div> Isla
                      </td>
                      <td className="border border-gray-600 px-4 py-2">16 m²</td>
                      <td className="border border-gray-600 px-4 py-2">$1.746.108,00</td>
                      <td className="border border-gray-600 px-4 py-2">$1.995.552,00</td>
                      <td className="border border-gray-600 px-4 py-2">$2.244.996,00</td>
                      <td className="border border-gray-600 px-4 py-2">$2.494.440,00</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-600 px-4 py-2 flex items-center gap-2 justify-center">
                        <div className="w-4 h-4 bg-orange-400 rounded-sm"></div> Grande
                      </td>
                      <td className="border border-gray-600 px-4 py-2">21 m²</td>
                      <td className="border border-gray-600 px-4 py-2">$2.29.200,00</td>
                      <td className="border border-gray-600 px-4 py-2">$2.620.800,00</td>
                      <td className="border border-gray-600 px-4 py-2">$2.948.400,00</td>
                      <td className="border border-gray-600 px-4 py-2">$3.276.000,00</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div>
                  <h3 className="text-[#98C61B] font-bold text-xl mb-4">CARACTERÍSTICAS GENERALES:</h3>
                  <ul className="list-disc list-inside space-y-2 text-[#1E1E1E]">
                    <li>Delimitación perimetral según el espacio contratado.</li>
                    <li>Equipamiento básico opcional (1 mesa, 2 sillas, tomacorriente).</li>
                    <li>Islas centrales: ubicación estratégica dentro del predio, sin pared perimetral.</li>
                    <li>Stands laterales: pared perimetral de fondo.</li>
                    <li>El plano general y los planos de los sectores son de carácter ilustrativo, no aptos para ser tomados como referencia para el montaje.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-[#98C61B] font-bold text-xl mb-4">CONDICIONES DE CONTRATACIÓN:</h3>
                  <ul className="list-disc list-inside space-y-2 text-[#1E1E1E]">
                    <li>Reserva con el 40% del valor total del stand.</li>
                    <li>Financiación disponible.</li>
                    <li>Descuentos por pago anticipado.</li>
                    <li>Opción de ampliación del espacio según disponibilidad - ¡Consultanos!</li>
                    <li>El saldo total debe estar abonado antes del 10/06/2025.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='flex justify-center'>
              <h3 className='uppercase font-bold text-[#98C61B] text-x1 m-3'>Reservá tu stand!</h3>
            </div>
            <Form
              categoriaDefault='Expositor'
              editable={false}
              onSubmit={(data) => console.log(data)}
            />
          </div>
      )
    },
    {
      title: 'Quiero ser sponsor del evento',
      content: (
        <div className="text-[#1E1E1E] space-y-6">
          <h3 className="text-[#F4004A] font-bold text-3xl">POSICIONÁ TU MARCA EN EL EVENTO</h3>
          <p className="leading-relaxed">
            Acompañanos como sponsor y obtené máxima visibilidad ante un público clave.
            Tu marca estará presente en todas las actividades, materiales de difusión y cobertura
            del evento, impactando a miles de asistentes, incluyendo visitantes y medios de
            comunicación.
          </p>

          <div className="space-y-4">
            <h3 className="text-[#98C61B] font-bold text-2xl">BENEFICIOS PARA SPONSORS:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Visibilidad ante un público altamente segmentado y comprometido.</li>
              <li>Oportunidad de networking con otros referentes de la industria.</li>
              <li>Generación de contactos comerciales y nuevos clientes potenciales.</li>
              <li>Acceso a un espacio ideal para lanzamientos de productos y activaciones de marca.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-[#98C61B] font-bold text-2xl">PARTNERS, SPONSORS Y ESPACIOS PUBLICITARIOS</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <b>Patrocinio oficial:</b> posicionamiento destacado en todas las comunicaciones del evento, incluyendo menciones en prensa, redes sociales y materiales impresos.
              </li>
              <li>
                <b>Sponsoreo de categoría:</b> oportunidad de asociar tu marca a un segmento específico del evento (capacitaciones, charlas, demostraciones, etc.)
              </li>
              <li>
                <b>Espacios publicitarios:</b> opciones de branding en cartelería, pantallas LED, merchandising y publicidad en
                programas digitales e impresos.
              </li>
            </ul>
          </div>
          <Form
              categoriaDefault='Sponsor'
              editable={false}
              onSubmit={(data) => console.log(data)}
          />
        </div>
      )
    },
    {
      title: 'Asistir a las capacitaciones',
      content: (
        <div className="flex flex-col items-center">
          <Form
            categoriaDefault="Asistente Capacitacion"
            editable={false}
            onSubmit={(data) => console.log(data)}
          />
          <h3 className="text-xl font-semibold text-[#1E1E1E] mt-8 text-center">
            ¡Explora el programa y las capacitaciones que tenemos para vos!
          </h3>
          <button className="bg-[#98C61B] text-white m-2 px-4 py-2 rounded hover:text-[#1E1E1E]">
            Ver capacitaciones
          </button>
        </div>
      )
    },
    {
      title: 'Participar en la Copa Natural Shop',
      content: (
        <div className="">
          <h3 className="text-2xl font-semibold text-[#98C61B]">
            Sumate a la 11° COPA NATURAL SHOP
          </h3>
          <p className="text-[#1E1E1E] text-lg mb-4">
            Ya sea como atleta competidor o como asistente al evento, tenemos un lugar para vos!
          </p>
          <Form
            categoriaDefault="Competidor"
            editable={true}
            onSubmit={(data) => console.log(data)}
          />
        </div>
      )
    }
  ];

  return (
    <>
      <section className="relative">
        {/* Banner */}
        <div
            className="min-h-[40vh] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center px-4 text-center"
            style={{ backgroundImage: "url('/images/white-texture-banner.jpg')" }}
        >
            <p className="text-[#1E1E1E] text-4xl sm:text-4xl md:text-4xl lg:text-5xl">
            INSCRIPCIONES
            </p>

            <h1
            className="font-bold text-7xl sm:text-7xl md:text-7xl lg:text-8xl bg-gradient-to-r from-[#F4004A] via-[#FF0080] to-[#F4004A] bg-clip-text text-transparent"
            style={{ fontFamily: 'Manuka Condensed' }}
            >
            EXPO Y COPA
            </h1>
        </div>

        {/* Flecha */}
        <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 z-9">
            <div className="w-14 h-14 bg-[#98C61B] rounded-full shadow-lg flex items-center justify-center">
            <FaChevronDown className="text-white text-xl" />
            </div>
        </div>
      </section>

      <section className="relative py-20 bg-[#1E1E1E] px-4 flex justify-center">
        <div className="relative w-full max-w-6xl">

          <div className="bg-gradient-to-r from-[#F4004A] via-[#FF0080] to-[#F4004A] rounded-3xl p-4 pt-8 space-y-4 shadow-lg relative z-0">
            
            <h2 className="absolute -top-6 left-6 bg-[#98C61B] text-white text-3xl font-bold px-4 py-2 rounded-2xl shadow-lg">
              ¡Sumate al evento!
            </h2>

            {sections.map((section, index) => (
              <div key={index}>
                <div
                  className="flex justify-between items-center bg-white/20 backdrop-blur-sm rounded-xl px-6 py-4 cursor-pointer hover:bg-white/30 transition"
                  onClick={() => toggle(index)}
                >
                  <h3 className="text-white text-xl font-semibold">{section.title}</h3>
                  <p className="text-white text-3xl font-bold">{openIndex === index ? '−' : '+'}</p>
                </div>

                {openIndex === index && (
                  <div className="bg-white rounded-xl mt-2 p-6 text-[#1E1E1E]">
                    {section.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <FAQs/>
    </>
  );
}