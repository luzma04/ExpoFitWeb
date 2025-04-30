import React from 'react'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer'

const stats = [
  { end: 8, label: 'provincias participantes', prefix: '+' },
  { end: 450, label: 'm2 de superficie expositiva', prefix: '+', suffix: 'm2' },
  { end: 30, label: 'marcas locales, regionales y nacionales', prefix: '+' },
  { end: 10000, label: 'visitantes diarios', prefix: '+', separator: '.' },
]

function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  return (
    <div ref={ref} className="py-12 px-4 flex flex-col items-center">
      <div className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <span className="text-5xl font-extrabold text-[#98C61B]">
              {inView ? (
                <CountUp
                  start={0}
                  end={stat.end}
                  duration={3}
                  prefix={stat.prefix}
                  suffix={stat.suffix || ''}
                  separator={stat.separator || ''}
                />
              ) : (
                `${stat.prefix || ''}0${stat.suffix || ''}`
              )}
            </span>
            <p className="mt-2 text-sm text-white font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Stats
