"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

export function Hero() {
  return (
    <div className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop"
          alt="Luxury Bus"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full flex flex-col md:flex-row items-center">
        <div className="w-full md:w-2/3 text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-orange-600/20 text-orange-400 border border-orange-500/30 text-sm font-semibold mb-6">
              Líderes en Transporte de Pasajeros en España
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              Viaja con <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">
                Máximo Confort
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed">
              Soluciones de movilidad premium para empresas, turismo y eventos.
              Flota moderna, conductores expertos y un servicio adaptado a tus necesidades.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg rounded-full transition-all hover:scale-105"
              >
                <Link href="#calculator">
                  Calcular Presupuesto
                </Link>
              </Button>
              <Button
                asChild
                variant="secondary"
                className="bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-sm px-8 py-6 text-lg rounded-full"
              >
                <Link href="#services">
                  Ver Servicios
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="hidden md:block w-1/3">
          {/* Minimalist floating element or stats could go here */}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
      >
        <span className="text-xs uppercase tracking-widest">Descubre más</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0"></div>
      </motion.div>
    </div>
  );
}
