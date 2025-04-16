import React, { useState, useEffect } from 'react';

function Timer({ duration }) {
  const [time, setTime] = useState(duration);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime((prevTime) => prevTime - 1000);
    }, 1000);

    return () => clearTimeout(timer);
  }, [time]);

  const getTimeParts = () => {
    const totalSeconds = Math.floor(time / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const days = Math.floor(totalHours / 24);

    const seconds = totalSeconds % 60;
    const minutes = totalMinutes % 60;
    const hours = totalHours % 24;

    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = getTimeParts();

  return (
    <div className="flex justify-center gap-4 sm:gap-8 md:gap-12 flex-wrap sm:flex-nowrap">
      {[
        { label: 'Días', value: days },
        { label: 'Horas', value: hours },
        { label: 'Minutos', value: minutes },
        { label: 'Segundos', value: seconds },
      ].map((item, index) => (
        <div key={index} className="text-center">
          <div className="text-[3rem] sm:text-[2.5rem] md:text-[5rem] font-extrabold text-white">
            {item.value}
          </div>
          <div className="text-white text-sm sm:text-base md:text-lg">{item.label}</div>
        </div>
      ))}
    </div>
  );
}

export default Timer;
