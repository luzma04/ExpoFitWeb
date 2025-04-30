import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "¿Cuál es el horario del evento?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna a erat laoreet laoreet.",
  },
  {
    question: "¿Necesito registrarme previamente?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti.",
  },
  {
    question: "¿Hay actividades para principiantes?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam efficitur est et felis aliquet, ac hendrerit nisl ultrices.",
  },
  {
    question: "¿Qué debo llevar al evento?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus.",
  },
  {
    question: "¿Se permite el ingreso con mascotas?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in lectus nec ipsum pulvinar porta.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#1E1E1E] py-10 px-4 text-white">
      <div className="m-8">
        <h2 className="text-4xl font-bold mb-6 text-center text-[#98C61B]">
          Preguntas Frecuentes
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="overflow-hidden">
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center gap-x-3 px-4 py-3 text-left focus:outline-none"
              >
                <FaChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
                <span className="text-xl">{faq.question}</span>
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4 text-base text-gray-500">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}