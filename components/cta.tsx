import { Button } from "./ui/button";
import React from "react";
import { MoveRight } from "lucide-react";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="relative w-full overflow-hidden bg-black py-32">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-900/20 to-black/20 z-0"></div>

      <div className="relative z-20 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          ¿Listo para tu <span className="text-orange-500">Próximo Viaje?</span>
        </h2>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          Solicita tu presupuesto personalizado sin compromiso y descubre por qué somos la opción preferida para el transporte de pasajeros.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            asChild
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg rounded-full transition-all hover:scale-105 flex items-center gap-2"
          >
            <Link href="#calculator" className="flex items-center gap-2">
              Calcular Presupuesto <MoveRight className="w-5 h-5" />
            </Link>
          </Button>
          <Button
            asChild
            variant="secondary"
            className="bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-sm px-8 py-6 text-lg rounded-full"
          >
            <Link href="#contact">
              Contactar Soporte
            </Link>
          </Button>
        </div>
      </div>

      <div className="absolute inset-0 top-1/2 bg-gradient-to-t from-orange-500/10 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default CTA;
