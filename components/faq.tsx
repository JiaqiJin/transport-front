"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "¿Cómo puedo solicitar un presupuesto?",
    answer: "Puedes utilizar nuestra calculadora de rutas en la página principal para obtener una estimación inmediata. Para presupuestos más complejos o servicios especiales, contáctanos directamente a través del formulario o por teléfono."
  },
  {
    question: "¿Con cuánta antelación debo reservar?",
    answer: "Recomendamos reservar con al menos 2 semanas de antelación para garantizar la disponibilidad, especialmente en temporada alta (verano y navidad). Sin embargo, intentamos acomodar solicitudes de última hora siempre que sea posible."
  },
  {
    question: "¿Qué medidas de seguridad tienen los autobuses?",
    answer: "Toda nuestra flota cumple con las normativas europeas más estrictas. Incluyen cinturones de seguridad en todos los asientos, sistemas de frenado ABS/ASR, arcos de seguridad antivuelco y mantenimiento preventivo riguroso."
  },
  {
    question: "¿Se permiten mascotas a bordo?",
    answer: "Sí, permitimos mascotas siempre que viajen en su transportín homologado en el maletero del autobús, garantizando su seguridad y la comodidad del resto de pasajeros. Los perros guía pueden viajar en cabina."
  },
  {
    question: "¿Ofrecen servicios para personas con movilidad reducida?",
    answer: "Disponemos de vehículos adaptados con plataformas elevadoras y espacios reservados. Por favor, indícalo al momento de hacer la reserva para asignar el vehículo adecuado."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full py-24 bg-gray-50" id="faq">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-orange-600 font-semibold tracking-wider text-sm uppercase">Dudas Frecuentes</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 text-gray-900">
            Preguntas <span className="text-orange-600">Frecuentes</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all duration-200 hover:shadow-lg hover:border-orange-200"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between gap-4 text-left"
              >
                <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                <span className={`flex-shrink-0 text-orange-500 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}>
                  {openIndex === index ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                </span>
              </button>
              <AnimatePresence mode="sync">
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-6 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}