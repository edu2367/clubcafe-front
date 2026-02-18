"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import LogoCafe from "@/components/LogoCafe";
import { useState } from "react";

export default function Hero() {
    // Estado para controlar el mensaje al pasar el mouse
    const [showWelcome, setShowWelcome] = useState(false);

    return (
        <section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden bg-black">

            {/* 1. IMAGEN DE FONDO */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2000&auto=format&fit=crop"
                    alt="Café de especialidad"
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />
            </div>

            {/* 2. CONTENIDO CENTRAL */}
            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">

                {/* --- LOGO INTERACTIVO (HOVER) --- */}
                <div
                    className="relative group cursor-pointer mb-2"
                    onMouseEnter={() => setShowWelcome(true)} // Al entrar el mouse
                    onMouseLeave={() => setShowWelcome(false)} // Al salir el mouse
                >
                    <LogoCafe className="w-28 h-28 md:w-40 md:h-40 text-white drop-shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:text-orange-100" />

                    {/* Brillo sutil detrás */}
                    <div className="absolute inset-0 bg-white/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
                </div>

                {/* --- MENSAJE "BIENVENIDO" LIMPIO --- */}
                {/* Altura fija (h-8) para reservar el espacio y que no salte */}
                <div className={`h-8 mb-6 flex items-center justify-center transition-all duration-500 ease-out transform ${showWelcome ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                    <span className="text-white/90 font-heading tracking-[0.4em] uppercase text-sm font-medium drop-shadow-lg">
                        Bienvenido
                    </span>
                </div>

                {/* TITULARES */}
                <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[0.9] tracking-tight">
                    El Arte del Café <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-orange-500">
                        En Tus Manos
                    </span>
                </h1>

                <p className="font-body text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Disfruta de la mejor selección de granos, tostados a la perfección y
                    preparados con pasión en el corazón de Temuco.
                </p>

                {/* BOTONES */}
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                    <button
                        onClick={() => document.getElementById('menu-section')?.scrollIntoView({ behavior: 'smooth' })}
                        className="bg-white text-black px-8 py-4 rounded-full font-heading font-bold uppercase tracking-wider text-sm hover:bg-orange-500 hover:text-white transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(249,115,22,0.4)]"
                    >
                        Ordenar Ahora <ArrowRight size={18} />
                    </button>

                    <Link
                        href="/category/cafe"
                        className="px-8 py-4 rounded-full font-heading font-bold uppercase tracking-wider text-sm text-white border border-white/20 hover:bg-white/10 transition-colors backdrop-blur-sm"
                    >
                        Ver Carta
                    </Link>
                </div>

            </div>
        </section>
    );
}