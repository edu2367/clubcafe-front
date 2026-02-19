"use client";
import LogoCafe from '@/components/LogoCafe';
import { Sparkles, Instagram, Mail, PawPrint } from "lucide-react"; // Importamos PawPrint

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center relative overflow-hidden bg-black font-sans">

      {/* Fondo Profesional */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop')",
          filter: "brightness(0.2) contrast(1.1) blur(1px)"
        }}
      />

      <div className="absolute inset-0 z-1 bg-gradient-to-b from-black/70 via-black/20 to-black/90" />

      <div className="relative z-10 space-y-6 md:space-y-10 flex flex-col items-center animate-in fade-in zoom-in duration-1000">

        <div className="scale-110 md:scale-150 mb-2 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
          <LogoCafe className="w-16 h-16 md:w-20 md:h-20 text-white" />
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tighter uppercase drop-shadow-2xl">
            Club Café
          </h1>
          <p className="text-[10px] md:text-[12px] text-zinc-400 font-bold uppercase tracking-[0.6em]">
            Temuco, Chile
          </p>
        </div>

        <div className="space-y-8 max-w-[300px] md:max-w-md">
          <p className="text-zinc-200 text-lg md:text-2xl font-light leading-relaxed drop-shadow-md italic">
            "Pura esencia. Puro café. Muy pronto."
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {/* BOTÓN PRÓXIMAMENTE */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-[11px] text-white font-bold uppercase tracking-[0.3em]">
              <Sparkles size={14} className="text-yellow-500 animate-pulse" />
              Próximamente
            </div>

            {/* DISTINTIVO PET FRIENDLY */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-[11px] text-zinc-300 font-bold uppercase tracking-[0.3em]">
              <PawPrint size={14} className="text-orange-400" />
              Pet Friendly
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 flex flex-col items-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
        <div className="flex items-center gap-6 text-zinc-400">
          <a href="https://www.instagram.com/clubcafe.temuco" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:scale-110 transition-all">
            <Instagram size={20} />
          </a>
          <a href="mailto:hola@clubcafe.cl" className="hover:text-white hover:scale-110 transition-all">
            <Mail size={20} />
          </a>
        </div>
        <p className="text-zinc-600 text-[8px] font-bold uppercase tracking-[0.4em]">
          © 2026 Club Café — Temuco
        </p>
      </div>
    </div>
  );
}