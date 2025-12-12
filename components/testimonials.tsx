"use client";
import { Check, Quote } from "lucide-react";
import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const features = [
  "Conductores profesionales y amables",
  "Flota moderna y limpia",
  "Puntualidad garantizada",
];

const testimonials = [
  {
    text: "El servicio para nuestra boda fue impecable. Los autobuses llegaron antes de tiempo y los conductores fueron muy atentos con los invitados.",
    author: "Laura & David",
    role: "Boda en Toledo",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop"
  },
  {
    text: "Llevamos años trabajando con ellos para el transporte de nuestros empleados y nunca han fallado. Profesionalidad al 100%.",
    author: "Grupo Inditex",
    role: "Transporte Corporativo",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=100&auto=format&fit=crop"
  },
  {
    text: "Organizamos un circuito por Andalucía para 50 personas y todo salió perfecto. El guía y el conductor hicieron un gran equipo.",
    author: "Viajes El Corte Inglés",
    role: "Agencia de Viajes",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=100&auto=format&fit=crop"
  }
];

export function Testimonials() {
  return (
    <section className="relative w-full py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Lo que dicen <br />
              <span className="text-orange-600">Nuestros Clientes</span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              La satisfacción de nuestros pasajeros es nuestra mejor carta de presentación.
              Nos esforzamos cada día por ofrecer una experiencia de viaje segura, cómoda y memorable.
            </p>

            <div className="space-y-4 pt-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center">
                    <Check className="w-4 h-4 text-orange-600" />
                  </div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <Button className="bg-gray-900 text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl">
                Ver más reseñas
              </Button>
            </div>
          </div>

          {/* Right Side - Testimonial Cards */}
          <div className="relative space-y-6">
            {/* Decorative background element */}
            <div className="absolute top-10 -right-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute -bottom-10 right-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

            {testimonials.map((t, index) => (
              <div
                key={index}
                className={cn(
                  "bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 relative z-10 transform transition-transform hover:-translate-y-1 duration-300",
                  index === 1 ? "lg:translate-x-12" : ""
                )}
              >
                <Quote className="w-8 h-8 text-orange-200 mb-4" />
                <p className="text-gray-700 text-lg mb-6 italic">&quot;{t.text}&quot;</p>
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-orange-100">
                    <Image
                      src={t.image}
                      alt={t.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{t.author}</h4>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
