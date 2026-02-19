"use client";
import { useState, useEffect } from 'react';
import LogoCafe from '@/components/LogoCafe';
import { Sparkles, Instagram, Mail, PawPrint, Quote, ChevronDown } from "lucide-react";

export default function Home() {
  const [isPetFriendlyView, setIsPetFriendlyView] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsPetFriendlyView((prev) => !prev);
    }, 6000); // 6 segundos por escena
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center relative overflow-hidden bg-black font-sans transition-all duration-1000">

      {/* FONDO 1: CAFÉ */}
      <div
        className={`absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-105 transition-opacity duration-1000 ease-in-out ${isPetFriendlyView ? 'opacity-0' : 'opacity-100'}`}
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop')",
          filter: "brightness(0.18) contrast(1.1) blur(1px)"
        }}
      />

      {/* FONDO 2: MASCOTA */}
      <div
        className={`absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-105 transition-opacity duration-1000 ease-in-out ${isPetFriendlyView ? 'opacity-100' : 'opacity-0'}`}
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2070&auto=format&fit=crop')",
          filter: "brightness(0.2) contrast(1.1) blur(2px)"
        }}
      />

      <div className="absolute inset-0 z-1 bg-gradient-to-b from-black/80 via-black/20 to-black/95" />

      {/* CONTENIDO PRINCIPAL */}
      <div className="relative z-10 w-full max-w-2xl flex flex-col items-center justify-center min-h-[450px]">

        {/* ESCENA 1: MARCA */}
        <div className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000 transform ${isPetFriendlyView ? 'opacity-0 translate-y-10 scale-95 pointer-events-none' : 'opacity-100 translate-y-0 scale-100'}`}>
          <div className="scale-110 md:scale-150 mb-8 drop-shadow-[0_0_25px_rgba(255,255,255,0.15)]">
            <LogoCafe className="w-16 h-16 md:w-20 md:h-20 text-white" />
          </div>

          <h1 className="text-5xl md:text-8xl font-bold text-white tracking-tighter uppercase drop-shadow-2xl mb-4">
            Club Café
          </h1>

          <p className="text-zinc-300 text-lg md:text-2xl font-light leading-relaxed italic mb-10 max-w-sm">
            "Pura esencia. Puro café. Muy pronto."
          </p>
        </div>

        {/* ESCENA 2: PET FRIENDLY */}
        <div className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000 transform ${isPetFriendlyView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-10 scale-95 pointer-events-none'}`}>
          <div className="mb-6 p-4 bg-white/5 rounded-full border border-white/10 backdrop-blur-md">
            <PawPrint className="w-12 h-12 md:w-16 md:h-16 text-white" />
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter uppercase drop-shadow-2xl mb-8">
            Somos Pet Friendly
          </h2>

          <div className="relative max-w-md px-10">
            <Quote className="absolute top-0 left-0 text-white/10 w-10 h-10 -translate-x-4 -translate-y-4" />
            <p className="text-zinc-200 text-lg md:text-xl font-light leading-relaxed italic mb-4">
              "El ambiente es increíble y mi perro siempre es bienvenido. ¡Calidad total!"
            </p>
            <p className="text-white/60 text-[10px] font-bold uppercase tracking-[0.4em] text-right">
              — Comunidad Club Café
            </p>
          </div>
        </div>
      </div>

      {/* SECCIÓN DE ACCIÓN (Botones fijos en el centro bajo) */}
      <div className="relative z-20 flex flex-col items-center gap-6 mt-4">
        <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] text-zinc-400 font-bold uppercase tracking-[0.3em]">
          <Sparkles size={12} className="text-yellow-500 animate-pulse" />
          Próximamente
        </div>

        {/* BOTÓN "NUESTRA CARTA" ESTILO DROPDOWN */}
        <a
          href="https://app.qrpro.io/q/3845c8"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center gap-2 transition-all hover:scale-105"
        >
          <div className="flex items-center gap-3 px-10 py-4 bg-white text-black rounded-sm shadow-[0_10px_30px_rgba(255,255,255,0.1)] transition-all group-hover:bg-zinc-200">
            <span className="text-[12px] md:text-sm font-black uppercase tracking-[0.2em]">Nuestra Carta</span>
            <ChevronDown size={18} className="animate-bounce" />
          </div>
        </a>
      </div>

      {/* FOOTER */}
      <div className="absolute bottom-6 flex flex-col items-center gap-5">
        <div className="flex items-center gap-8 text-zinc-500">
          <a href="https://www.instagram.com/clubcafe.temuco" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <Instagram size={20} />
          </a>
          <div className="h-4 w-px bg-zinc-800" />
          <a href="mailto:hola@clubcafe.cl" className="hover:text-white transition-colors">
            <Mail size={20} />
          </a>
        </div>
        <p className="text-zinc-700 text-[8px] font-bold uppercase tracking-[0.4em]">
          © 2026 Club Café — Temuco
        </p>
      </div>
    </div>
  );
}