"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, Users, Calculator, ArrowRight, Euro } from "lucide-react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export function RouteCalculator() {
    const [origin, setOrigin] = useState("");
    const [destination, setDestination] = useState("");
    const [date, setDate] = useState("");
    const [passengers, setPassengers] = useState("");
    const [price, setPrice] = useState<number | null>(null);
    const [loading, setLoading] = useState(false);

    const handleCalculate = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Mock calculation logic
        setTimeout(() => {
            if (!origin || !destination) {
                setLoading(false);
                return;
            }
            // Simple mock formula: Random base + random distance factor * passengers
            const mockBase = 150;
            const mockDistancePrice = Math.floor(Math.random() * 300) + 50;
            const passengerFactor = parseInt(passengers || "1") * 5;
            const calculatedPrice = mockBase + mockDistancePrice + passengerFactor;

            setPrice(calculatedPrice);
            setLoading(false);
        }, 1500);
    };

    return (
        <section className="py-20 bg-gray-50 relative overflow-hidden" id="calculator">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center opacity-5"></div>
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-4"
                    >
                        Calcula tu Ruta
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-lg text-gray-600 max-w-2xl mx-auto"
                    >
                        Obtén un presupuesto estimado para tu viaje en segundos. Sin compromisos.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 max-w-4xl mx-auto"
                >
                    <div className="grid md:grid-cols-5">
                        <div className="md:col-span-3 p-8">
                            <form onSubmit={handleCalculate} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="origin" className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4 text-orange-500" /> Origen
                                        </Label>
                                        <Input
                                            id="origin"
                                            placeholder="Madrid, Barcelona..."
                                            value={origin}
                                            onChange={(e) => setOrigin(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="destination" className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4 text-orange-500" /> Destino
                                        </Label>
                                        <Input
                                            id="destination"
                                            placeholder="Sevilla, Valencia..."
                                            value={destination}
                                            onChange={(e) => setDestination(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="date" className="flex items-center gap-2">
                                            <Calendar className="w-4 h-4 text-orange-500" /> Fecha
                                        </Label>
                                        <Input
                                            id="date"
                                            type="date"
                                            value={date}
                                            onChange={(e) => setDate(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="passengers" className="flex items-center gap-2">
                                            <Users className="w-4 h-4 text-orange-500" /> Pasajeros
                                        </Label>
                                        <Input
                                            id="passengers"
                                            type="number"
                                            min="1"
                                            placeholder="50"
                                            value={passengers}
                                            onChange={(e) => setPassengers(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>

                                <Button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full h-12 text-lg bg-orange-600 hover:bg-orange-700 text-white transition-all transform hover:scale-[1.02]"
                                >
                                    {loading ? (
                                        <span className="flex items-center gap-2">
                                            <Calculator className="w-5 h-5 animate-pulse" /> Calculando...
                                        </span>
                                    ) : (
                                        <span className="flex items-center gap-2">
                                            Calcular Precio <ArrowRight className="w-5 h-5" />
                                        </span>
                                    )}
                                </Button>
                            </form>
                        </div>

                        <div className="md:col-span-2 bg-gradient-to-br from-gray-900 to-gray-800 p-8 flex flex-col justify-center items-center text-center text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-32 bg-orange-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
                            <div className="absolute bottom-0 left-0 p-32 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>

                            <div className="relative z-10 space-y-6">
                                <h3 className="text-2xl font-semibold opacity-90">Estimación de Coste</h3>

                                <AnimatePresence mode="wait">
                                    {price !== null ? (
                                        <motion.div
                                            key="price"
                                            initial={{ opacity: 0, scale: 0.5 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.5 }}
                                            className="space-y-2"
                                        >
                                            <div className="text-5xl font-bold text-orange-400 flex items-start justify-center">
                                                <span className="text-2xl mt-2">€</span>
                                                {price}
                                            </div>
                                            <p className="text-sm text-gray-400">Precio aproximado (IVA inc.)</p>
                                            <Button variant="secondary" className="mt-4 bg-white/10 hover:bg-white/20 text-white border-0">
                                                Reservar Ahora
                                            </Button>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="placeholder"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="text-gray-400"
                                        >
                                            <Calculator className="w-16 h-16 mx-auto mb-4 opacity-50" />
                                            <p>Completa el formulario para ver tu presupuesto instantáneo</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
