"use client";
import LogoCafe from '@/components/LogoCafe';
import { Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center relative overflow-hidden bg-black font-sans">

      {/* IMAGEN DE FONDO DIRECTA (Hecha por mí para ti) */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop')",
          filter: "brightness(0.25) contrast(1.1) blur(1px)"
        }}
      />

      {/* Capa de profundidad */}
      <div className="absolute inset-0 z-1 bg-gradient-to-b from-black/70 via-black/20 to-black/90" />

      <div className="relative z-10 space-y-6 md:space-y-10 flex flex-col items-center animate-in fade-in zoom-in duration-1000">

        {/* Logo con brillo sutil */}
        <div className="scale-110 md:scale-150 mb-2 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
          <LogoCafe className="w-16 h-16 md:w-20 md:h-20 text-white" />
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tighter uppercase drop-shadow-2xl">
            Club Café
          </h1>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-8 bg-zinc-600" />
            <p className="text-[10px] md:text-[12px] text-zinc-400 font-bold uppercase tracking-[0.6em]">
              Temuco
            </p>
            <div className="h-px w-8 bg-zinc-600" />
          </div>
        </div>

        <div className="space-y-8 max-w-[300px] md:max-w-md">
          <p className="text-zinc-200 text-lg md:text-2xl font-light leading-relaxed drop-shadow-md italic">
            "El aroma ya se siente."
          </p>

          <div className="inline-flex items-center gap-3 px-8 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-[11px] text-white font-bold uppercase tracking-[0.3em] hover:bg-white/10 transition-all cursor-default">
            <Sparkles size={14} className="text-yellow-500 animate-pulse" />
            Próximamente
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 text-zinc-500 text-[9px] font-bold uppercase tracking-[0.4em]">
        © 2026 Club Café — Experiencia de Especialidad
      </div>
    </div>
  );
}