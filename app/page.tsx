"use client";
import LogoCafe from '@/components/LogoCafe';
import { Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
      {/* Fondo con gradiente sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/30 via-black to-black opacity-60" />

      <div className="relative z-10 space-y-6 md:space-y-8 flex flex-col items-center animate-in fade-in duration-1000">

        {/* Logo con tamaño ajustable */}
        <div className="scale-110 md:scale-150 mb-2">
          <LogoCafe className="w-16 h-16 md:w-20 md:h-20 text-white" />
        </div>

        <div className="space-y-3">
          <h1 className="font-heading text-3xl md:text-6xl font-bold text-white tracking-tighter uppercase">
            Club Café
          </h1>
          <p className="text-[9px] md:text-[10px] text-zinc-500 font-bold uppercase tracking-[0.5em] leading-none">
            Temuco, Chile
          </p>
        </div>

        <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />

        <div className="space-y-6 max-w-[280px] md:max-w-md">
          <p className="text-zinc-400 font-body text-base md:text-lg font-light leading-relaxed">
            Estamos preparando una nueva experiencia digital para ti. <br className="hidden md:block" />
            <span className="italic">El aroma ya se siente.</span>
          </p>

          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-900/80 border border-white/10 rounded-full text-[10px] text-zinc-300 font-bold uppercase tracking-[0.2em]">
            <Sparkles size={14} className="text-zinc-400" />
            Próximamente
          </div>
        </div>
      </div>

      {/* Footer minimalista fijo abajo */}
      <div className="absolute bottom-8 text-zinc-800 text-[8px] md:text-[9px] font-bold uppercase tracking-[0.3em]">
        © 2026 Club Café — Todos los derechos reservados
      </div>
    </div>
  );
}