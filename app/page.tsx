"use client";
import { useState, useEffect } from 'react';
import LogoCafe from '@/components/LogoCafe';
import { Sparkles, Instagram, Mail, PawPrint, Quote } from "lucide-react";

export default function Home() {
  // Estado para controlar qué diapositiva se muestra
  const [isPetFriendlyView, setIsPetFriendlyView] = useState(false);

  // Efecto para cambiar automáticamente cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setIsPetFriendlyView((prev) => !prev);
    }, 5000); // 5000ms = 5 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center relative overflow-hidden bg-black font-sans transition-all duration-1000">

      {/* --- FONDO 1: CAFÉ (Se muestra si NO es vista Pet Friendly) --- */}
      <div
        className={`absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-105 transition-opacity duration-1000 ease-in-out ${isPetFriendlyView ? 'opacity-0' : 'opacity-100'}`}
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop')",
          filter: "brightness(0.2) contrast(1.1) blur(1px)"
        }}
      />

      {/* --- FONDO 2: MASCOTA (Se muestra si ES vista Pet Friendly) --- */}
      <div
        className={`absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-105 transition-opacity duration-1000 ease-in-out ${isPetFriendlyView ? 'opacity-100' : 'opacity-0'}`}
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2070&auto=format&fit=crop')", // Foto de perrito feliz
          filter: "brightness(0.25) contrast(1.1) blur(2px)"
        }}
      />

      <div className="absolute inset-0 z-1 bg-gradient-to-b from-black/70 via-black/20 to-black/90" />

      {/* CONTENIDO CENTRAL CAMBIANTE */}
      <div className="relative z-10 w-full max-w-2xl h-[400px] flex flex-col items-center justify-center">

        {/* --- ESCENA 1: MARCA Y PRÓXIMAMENTE --- */}
        <div className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000 transform ${isPetFriendlyView ? 'opacity-0 translate-y-8 scale-95' : 'opacity-100 translate-y-0 scale-100'}`}>
          <div className="scale-110 md:scale-150 mb-6 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            <LogoCafe className="w-16 h-16 md:w-20 md:h-20 text-white" />
          </div>

          <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tighter uppercase drop-shadow-2xl mb-4">
            Club Café
          </h1>

          <p className="text-zinc-200 text-lg md:text-2xl font-light leading-relaxed drop-shadow-md italic mb-8">
            "Pura esencia. Puro café. Muy pronto."
          </p>

          <div className="inline-flex items-center gap-3 px-8 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-[11px] text-white font-bold uppercase tracking-[0.3em]">
            <Sparkles size={14} className="text-yellow-500 animate-pulse" />
            Próximamente
          </div>
        </div>

        {/* --- ESCENA 2: PET FRIENDLY Y RESEÑA --- */}
        <div className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000 transform ${isPetFriendlyView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-8 scale-95'}`}>
          <div className="mb-6 p-4 bg-orange-500/10 rounded-full border border-orange-500/20 shadow-[0_0_30px_rgba(255,165,0,0.1)]">
            <PawPrint className="w-12 h-12 md:w-16 md:h-16 text-orange-400" />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter uppercase drop-shadow-2xl mb-6">
            Amamos a tu mascota
          </h2>

          <div className="relative max-w-md px-8">
            <Quote className="absolute top-0 left-0 text-white/20 w-8 h-8 -translate-x-2 -translate-y-2" />
            <p className="text-zinc-200 text-lg md:text-xl font-light leading-relaxed italic mb-4">
              "El único lugar donde mi perro es tan bienvenido como yo. ¡El ambiente es increíble!"
            </p>
            <p className="text-orange-400 text-xs font-bold uppercase tracking-widest text-right">
              — Cliente Feliz
            </p>
          </div>
        </div>

      </div>

      {/* FOOTER FIJO (Siempre visible) */}
      <div className="absolute bottom-6 flex flex-col items-center gap-5 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <div className="flex items-center gap-6">
          <a href="https://www.instagram.com/clubcafe.temuco" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white hover:scale-110 transition-all">
            <Instagram size={18} />
          </a>
          <div className="h-4 w-px bg-zinc-700" />

          {/* Indicador de qué slide estamos viendo (Puntitos) */}
          <div className="flex gap-2">
            <div className={`h-1.5 w-1.5 rounded-full transition-colors duration-500 ${!isPetFriendlyView ? 'bg-white' : 'bg-zinc-700'}`} />
            <div className={`h-1.5 w-1.5 rounded-full transition-colors duration-500 ${isPetFriendlyView ? 'bg-orange-400' : 'bg-zinc-700'}`} />
          </div>

          <div className="h-4 w-px bg-zinc-700" />
          <a href="mailto:hola@clubcafe.cl" className="text-zinc-400 hover:text-white hover:scale-110 transition-all">
            <Mail size={18} />
          </a>
        </div>
        <p className="text-zinc-600 text-[8px] font-bold uppercase tracking-[0.4em]">
          © 2026 Club Café — Temuco
        </p>
      </div>
    </div>
  );
}