import React from 'react'
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import "../styles/Footer.css"

const Footer = () => {
  const year = new Date().getFullYear();

  return (
      <footer className="bg-[#1E1E1E] text-white px-6 py-10">
        <div className="grid lg:grid-cols-3 gap-20 sm:grid-cols-1 p-6 lg:justify-items-center">
            <div className="flex flex-col gap-5">
                <h2 className="text-3xl text-[#F4004A]">Natural Shop</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, deleniti dolores
                    vel ipsa reiciendis corporis similique dolor earum aut itaque.
                </p>
            </div>

            

            <div>
                <li className="text-[22px] list-none font-semibold text-[#F4004A] py-2 uppercase">
                    Secciones</li>
                <ul className="list-none space-y-1 font-medium">
                    <li>
                    <NavLink to="/expo" className="hover:text-[#98C61B] transition-colors duration-200">
                        Expo
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="/copa" className="hover:text-[#98C61B] transition-colors duration-200">
                        Copa
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="/programa" className="hover:text-[#98C61B] transition-colors duration-200">
                        Programa
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="/participa" className="hover:text-[#98C61B] transition-colors duration-200">
                        Participá
                    </NavLink>
                    </li>
                </ul>
            </div>

            <div className="mb-4 md:mb-0">
                <h2 className="text-[22px] font-semibold text-[#F4004A] py-2 uppercase">Contacto</h2>
                <p className="text-[16px] my-4">Email: youremail@gmail.com</p>
                <p className="text-[16px] my-4">Phone: +1 113-456-7890 </p>
                <div className="flex space-x-6 !mt-2">
                    <a
                        className="text-white hover:text-[#98C61B] transform hover:scale-150 
                        transition-all duration-150 ease-in-out !mr-4" href="https://www.instagram.com/expoycopa.naturalshop?igsh=Y3dxOXFvNTFiNmRz">
                        <FaInstagram />
                    </a>
                    <a
                        className="text-white hover:text-[#98C61B] transform hover:scale-150
                        transition-all duration-150 ease-in-out !mr-4" href="https://www.facebook.com/share/16dVGKqu2i/">
                        <FaFacebookF />
                    </a>
                    <a
                        className="text-white hover:text-[#98C61B] transform hover:scale-150
                        transition-all duration-150 ease-in-out !mr-4" href="https://wa.me/5493625437602?text=Hola+Expo+Fitness+2025">
                        <FaWhatsapp />
                    </a>
                </div>
            </div>
        </div>

        <h6 className="text-center text-sm text-gray-400 !mt-10">
            &copy; Natural Shop {new Date().getFullYear()} - Todos los derechos reservados.
        </h6>
  </footer>
  );
};

export default Footer;
