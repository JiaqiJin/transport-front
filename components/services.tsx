"use client";

import React from "react";
import { motion } from "framer-motion";
import { Bus, Briefcase, Map, GraduationCap, PartyPopper, Plane } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
    {
        title: "Transporte Corporativo",
        description: "Soluciones de movilidad para empresas, congresos y eventos corporativos. Puntualidad y confort garantizados.",
        icon: Briefcase,
        color: "bg-blue-500",
    },
    {
        title: "Turismo y Circuitos",
        description: "Descubre España y Europa con nuestros autocares de lujo. Guías expertos y rutas personalizadas.",
        icon: Map,
        color: "bg-green-500",
    },
    {
        title: "Bodas y Eventos",
        description: "Hacemos que tu día especial sea perfecto. Transporte elegante y coordinado para tus invitados.",
        icon: PartyPopper,
        color: "bg-pink-500",
    },
    {
        title: "Transporte Escolar",
        description: "Seguridad absoluta para los más pequeños. Flota moderna con los últimos sistemas de seguridad.",
        icon: GraduationCap,
        color: "bg-yellow-500",
    },
    {
        title: "Transfers Aeropuerto",
        description: "Conexiones directas con todos los aeropuertos principales. Espera garantizada y monitoreo de vuelos.",
        icon: Plane,
        color: "bg-purple-500",
    },
    {
        title: "Alquiler Privado",
        description: "Autobuses a medida para grupos privados, clubes deportivos o asociaciones.",
        icon: Bus,
        color: "bg-orange-500",
    },
];

export function Services() {
    return (
        <section className="py-24 bg-white" id="services">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-4"
                    >
                        Nuestros Servicios
                    </motion.h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Ofrecemos soluciones de transporte adaptadas a cada necesidad, desde grandes eventos hasta traslados privados.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group p-8 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                        >
                            <div className={cn("absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-transparent to-white/10 rounded-bl-full z-0 opacity-0 group-hover:opacity-100 transition-opacity", service.color)}></div>

                            <div className={cn("w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-white shadow-lg relative z-10 transition-transform group-hover:scale-110", service.color)}>
                                <service.icon className="w-7 h-7" />
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed relative z-10">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
