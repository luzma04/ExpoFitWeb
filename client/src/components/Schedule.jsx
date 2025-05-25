import React, { useState, useEffect } from "react";
import dayjs from 'dayjs';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import { db } from "../firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";
dayjs.extend(isSameOrBefore);

const actividadesMock = [
  {
    nombre: 'Expo',
    inicio: '2025-06-14T09:00:00',
    fin: '2025-06-14T21:00:00',
    tipo: 'Feria',
    lugar: 'Salón Principal',
    descripcion: 'Control de peso y talla'
  },
  {
    nombre: 'Pesaje',
    inicio: '2025-06-14T13:30:00',
    fin: '2025-06-14T17:00:00',
    tipo: 'Copa',
    lugar: 'Sala 2',
    descripcion: 'Charla para competidores'
  },
  {
    nombre: 'Charlas',
    inicio: '2025-06-14T09:00:00',
    fin: '2025-06-14T18:00:00',
    tipo: 'Capacitación',
    lugar: 'Escenario Principal',
    descripcion: 'Bienvenida oficial'
  },
  {
    nombre: 'Masterclass',
    inicio: '2025-06-14T10:00:00',
    fin: '2025-06-14T20:00:00',
    tipo: 'Capacitación',
    lugar: 'Escenario Principal',
    descripcion: 'Bienvenida oficial'
  },
  {
    nombre: 'Torneo push pull',
    inicio: '2025-06-14T10:00:00',
    fin: '2025-06-14T11:00:00',
    tipo: 'Capacitación',
    lugar: 'Escenario Principal',
    descripcion: 'Bienvenida oficial'
  },
  {
    nombre: 'Competencias Funcionales',
    inicio: '2025-06-15T09:00:00',
    fin: '2025-06-15T13:00:00',
    tipo: 'Actividad Física',
    lugar: 'Pista Central',
    descripcion: 'Competencia de resistencia y fuerza funcional.'
  },
  {
    nombre: 'Clase de Zumba',
    inicio: '2025-06-15T10:30:00',
    fin: '2025-06-15T11:30:00',
    tipo: 'Actividad Física',
    lugar: 'Escenario Principal',
    descripcion: 'Clase abierta de Zumba para todos los niveles.'
  },
  {
    nombre: 'Nutrición Deportiva',
    inicio: '2025-06-15T12:00:00',
    fin: '2025-06-15T13:30:00',
    tipo: 'Capacitación',
    lugar: 'Sala 1',
    descripcion: 'Charla sobre alimentación y suplementación.'
  },
  {
    nombre: 'Clase de Yoga',
    inicio: '2025-06-15T14:00:00',
    fin: '2025-06-15T15:30:00',
    tipo: 'Actividad Física',
    lugar: 'Zona Verde',
    descripcion: 'Yoga para la recuperación post entrenamiento.'
  },
  {
    nombre: 'Cierre del Evento',
    inicio: '2025-06-15T18:00:00',
    fin: '2025-06-15T20:00:00',
    tipo: 'Ceremonia',
    lugar: 'Escenario Principal',
    descripcion: 'Entrega de reconocimientos y cierre oficial de la Expo.'
  }
];

  


export default function Schedule() {
  const [actividades, setActividades] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fechaSeleccionada, setFechaSeleccionada] = useState("2025-06-14");
  const [selectedEventType, setSelectedEventType] = useState("Mostrar todo");

  const horas = Array.from({ length: 13 }, (_, i) => 8 + i);
  
  useEffect(() => {
    const fetchActividades = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "actividades"));
        const data = querySnapshot.docs.map(doc => doc.data());
        setActividades(data);
      } catch (error) {
        console.error("Error al obtener actividades:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchActividades();
  }, []);

  if (loading) {
    return <div className="text-center m-5 text-gray-500">Cargando actividades...</div>;
  }

  const tiposDeEvento = ["Mostrar todo", ...new Set(actividades.map((a) => a.tipo))];

  const actividadesDelDia = actividades.filter((act) => {
    const esMismaFecha = dayjs(act.inicio).format("YYYY-MM-DD") === fechaSeleccionada;
    const esTipoSeleccionado = selectedEventType === "Mostrar todo" || act.tipo === selectedEventType;
    return esMismaFecha && esTipoSeleccionado;
  });

  const calcularPosicion = (inicio, fin) => {
    const hInicio = dayjs(inicio).hour() + dayjs(inicio).minute() / 60;
    const hFin = dayjs(fin).hour() + dayjs(fin).minute() / 60;
    return {
      left: `${((hInicio - 8) * 100) / 12}%`,
      width: `${((hFin - hInicio) * 100) / 12}%`,
    };
  };

  const niveles = [];
  actividadesDelDia
    .sort((a, b) => dayjs(a.inicio).diff(dayjs(b.inicio)))
    .forEach((act) => {
      const inicioAct = dayjs(act.inicio);
      let colocado = false;

      for (let i = 0; i < niveles.length; i++) {
        const ultimaEnNivel = niveles[i][niveles[i].length - 1];
        const finUltima = dayjs(ultimaEnNivel.fin);

        if (finUltima.isSameOrBefore(inicioAct)) {
          niveles[i].push(act);
          colocado = true;
          break;
        }
      }

      if (!colocado) {
        niveles.push([act]);
      }
    });

  return (
    <div className="p-4 md:p-6">
      <div className="flex justify-center items-center mb-6 gap-2">
        {["2025-06-14", "2025-06-15"].map((fecha, idx) => {
          const isSelected = fechaSeleccionada === fecha;
          return (
            <button
              key={fecha}
              onClick={() => setFechaSeleccionada(fecha)}
              className={`px-4 py-2 rounded-3xl cursor-pointer transition-colors duration-200
                ${isSelected
                  ? "bg-[#F4004A] text-white"
                  : "bg-[#1E1E1E] text-[#F4004A] border-2 border-[#F4004A]"}`}
            >
              {idx === 0 ? "14 de Junio" : "15 de Junio"}
            </button>
          );
        })}
        
        <select
          className="p-2"
          value={selectedEventType}
          onChange={(e) => setSelectedEventType(e.target.value)}
        >
          {tiposDeEvento.map((tipo) => (
            <option key={tipo} value={tipo} className="bg-[#1E1E1E]">
              {tipo}
            </option>
          ))}
        </select>

      </div>

      <div className="overflow-x-auto">
        {/* Horas */}
        <div className="flex border-b border-gray-300 text-sm min-w-[768px]">
          {horas.map((h) => (
            <div
              key={h}
              className="min-w-[8.33%] text-center text-gray-600 border-r border-gray-200"
            >
              {h}:00
            </div>
          ))}
        </div>

        {/* Cronograma */}
        <div
          className="relative mt-4 min-w-[768px]"
          style={{ height: `${niveles.length * 64}px` }}
        >
          {niveles.map((nivel, filaIndex) =>
            nivel.map((act, i) => {
              const posicion = calcularPosicion(act.inicio, act.fin);
              return (
                <div
                  key={`${filaIndex}-${i}`}
                  className="absolute bg-[#98C61B] text-white px-3 py-2 rounded-md shadow-md text-xs whitespace-normal overflow-hidden"
                  style={{
                    ...posicion,
                    top: `${filaIndex * 64}px`,
                    height: "56px",
                  }}
                >
                  <div className="font-semibold truncate">{act.nombre}</div>
                  <div className="text-[11px]">{dayjs(act.inicio).format("HH:mm")} - {dayjs(act.fin).format("HH:mm")}</div>
                  <div className="text-[11px] truncate">{act.lugar}</div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}