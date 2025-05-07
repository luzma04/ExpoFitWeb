import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { initMercadoPago, Wallet} from '@mercadopago/sdk-react';
import axios from 'axios';

const Form = ({ categoriaDefault = 'Asistente', editable, onSubmit }) => {
  const [preferenceId, setPreferenceId] = useState(null);

  const publicKey = import.meta.env.VITE_MP_PUBLIC_KEY;
  //Inicializacion de mp
  initMercadoPago(publicKey, {
    locale: "es-AR"
  });

  //Crear preferencia que se va a enviar al server
  const createPreference = async() => {
    try {
      const response = await axios.post("http://localhost:3000/create_preference",{
        title: "servicio x",
        quantity: 1,
        price: 100,
      });
      const { id } = response.data;
      return id;
    } catch (error) {
      console.log(error);
    }
  }

  const handleBuy = async () => {
    const id = await createPreference();
    if (id) {
      setPreferenceId(id);
    }
  }

  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    ciudad: '',
    provincia: '',
    categoria: categoriaDefault,
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Agregar los datos del formulario a Firestore
      const docRef = await addDoc(collection(db, "inscripciones"), {
        nombre: formData.nombre,
        correo: formData.correo,
        telefono: formData.telefono,
        ciudad: formData.ciudad,
        provincia: formData.provincia,
        categoria: formData.categoria,
        fecha: new Date(),
      });

      console.log("Documento agregado con ID:", docRef.id);

      Swal.fire({
        title: '¡Éxito!',
        text: 'Tus datos fueron enviados correctamente. Espera unos segundos para proceder al pago.',
        icon: 'success',
        confirmButtonText: '¡Entendido!',
      }).then(() => {
        handleBuy();
      });

      setFormData({
        nombre: '',
        correo: '',
        telefono: '',
        ciudad: '',
        provincia: '',
        categoria: categoriaDefault,
      });
    } catch (e) {
      console.error("Error agregando documento:", e);
      Swal.fire({
        title: 'Error',
        text: 'Hubo un problema al enviar tus datos. Por favor, inténtalo de nuevo.',
        icon: 'error',
        confirmButtonText: 'Cerrar',
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-xl mx-auto bg-white shadow-xl rounded-2xl p-8 space-y-6"
    >
      <h2 className="text-2xl font-bold text-center text-[#1E1E1E] mb-2">Formulario de inscripción</h2>

      {/* Nombre completo */}
      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700">Nombre y Apellido</label>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          placeholder="Ej: Juan Pérez"
          className="w-full px-4 py-2 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#F4004A] transition"
          required
        />
      </div>

      {/* Correo */}
      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700">Correo electrónico</label>
        <input
          type="email"
          name="correo"
          value={formData.correo}
          onChange={handleChange}
          placeholder="Ej: juan@mail.com"
          className="w-full px-4 py-2 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#F4004A] transition"
          required
        />
      </div>

      {/* Ciudad y Provincia */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Ciudad</label>
          <input
            type="text"
            name="ciudad"
            value={formData.ciudad}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#F4004A] transition"
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Provincia</label>
          <input
            type="text"
            name="provincia"
            value={formData.provincia}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#F4004A] transition"
          />
        </div>
      </div>

      {/* Teléfono y Categoría */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Teléfono</label>
          <input
            type="tel"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            placeholder="Ej: 1123456789"
            className="w-full px-4 py-2 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#F4004A] transition"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Categoría</label>
          <select
            name="categoria"
            value={formData.categoria}
            onChange={handleChange}
            disabled={!editable}
            className="w-full px-4 py-2 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#F4004A] transition"
          >
            <option value="Sponsor">Sponsor</option>
            <option value="Expositor">Expositor</option>
            <option value="Asistente Capacitacion">Asistente (Capacitación)</option>
            <option value="Competidor">Competidor</option>
            <option value="Asistente Copa">Asistente (Copa)</option>
          </select>
        </div>
      </div>

      {/* Botón */}
      <div className="flex flex-col items-center justify-center pt-2">
        <button
          type="submit"
          className="bg-[#F4004A] hover:bg-[#d1003f] text-white font-semibold px-6 py-3 rounded-full transition"
        >
          Enviar
        </button>
        {preferenceId && <Wallet initialization={{ preferenceId: preferenceId}}/>}
      </div>
    </form>
  );
};


export default Form;