import React, { useState } from "react";
import dayjs from 'dayjs';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
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
    tipo: 'Control',
    lugar: 'Sala 2',
    descripcion: 'Charla para competidores'
  },
  {
    nombre: 'Capacitaciones',
    inicio: '2025-06-14T09:00:00',
    fin: '2025-06-14T18:00:00',
    tipo: 'Capacitaciones',
    lugar: 'Escenario Principal',
    descripcion: 'Bienvenida oficial'
  },
  {
    nombre: 'Masterclass',
    inicio: '2025-06-14T10:00:00',
    fin: '2025-06-14T22:00:00',
    tipo: 'Capacitaciones',
    lugar: 'Escenario Principal',
    descripcion: 'Bienvenida oficial'
  },
  {
    nombre: 'Torneo push pull',
    inicio: '2025-06-14T10:00:00',
    fin: '2025-06-14T11:00:00',
    tipo: 'Capacitaciones',
    lugar: 'Escenario Principal',
    descripcion: 'Bienvenida oficial'
  },
];

const horas = Array.from({ length: 13 }, (_, i) => 8 + i);

export default function Schedule() {
  const [fechaSeleccionada, setFechaSeleccionada] = useState("2025-06-15");

  const actividadesDelDia = actividadesMock.filter(
    (act) => dayjs(act.inicio).format("YYYY-MM-DD") === fechaSeleccionada
  );

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