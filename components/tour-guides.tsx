"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, MapPin } from "lucide-react";

const guides = [
    {
        name: "María González",
        role: "Especialista en Historia del Arte",
        experience: "15 años",
        location: "Madrid & Toledo",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
        rating: 5.0,
    },
    {
        name: "Carlos Ruiz",
        role: "Guía de Montaña y Naturaleza",
        experience: "10 años",
        location: "Picos de Europa",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
        rating: 4.9,
    },
    {
        name: "Elena Vladimir",
        role: "Guía Multilingual (ES/EN/RU)",
        experience: "8 años",
        location: "Costa del Sol",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop",
        rating: 4.9,
    },
    {
        name: "Javier Torres",
        role: "Especialista Gastronómico",
        experience: "12 años",
        location: "País Vasco",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
        rating: 5.0,
    },
];

export function TourGuides() {
    return (
        <section className="py-24 bg-gray-900 text-white relative overflow-hidden" id="guides">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <span className="text-orange-500 font-semibold tracking-wider text-sm uppercase">Nuestro Equipo</span>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-3xl md:text-5xl font-bold mt-2"
                        >
                            Guías Turísticos Expertos
                        </motion.h2>
                    </div>
                    <p className="text-gray-400 max-w-md text-lg">
                        Más que un transporte, ofrecemos una experiencia completa con profesionales apasionados por mostrarte lo mejor de España.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {guides.map((guide, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-gray-800 rounded-xl overflow-hidden group hover:transform hover:-translate-y-2 transition-all duration-300 shadow-2xl"
                        >
                            <div className="relative h-80 w-full overflow-hidden">
                                <Image
                                    src={guide.image}
                                    alt={guide.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80"></div>

                                <div className="absolute bottom-4 left-4 right-4">
                                    <div className="flex items-center gap-1 text-yellow-500 mb-1">
                                        <Star className="w-4 h-4 fill-current" />
                                        <span className="font-bold text-sm">{guide.rating}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white leading-tight">{guide.name}</h3>
                                    <p className="text-sm text-gray-300 mt-1">{guide.role}</p>
                                </div>
                            </div>

                            <div className="p-4 border-t border-gray-700">
                                <div className="flex items-center justify-between text-sm">
                                    <div className="flex items-center gap-1.5 text-gray-400">
                                        <MapPin className="w-4 h-4" />
                                        <span>{guide.location}</span>
                                    </div>
                                    <span className="text-orange-400 font-medium">{guide.experience} exp.</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
