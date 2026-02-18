"use client";
import LogoCafe from '@/components/LogoCafe';
import { Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/40 via-black to-black opacity-50" />
      <div className="relative z-10 space-y-8 flex flex-col items-center animate-fade-in">
        <div className="scale-150 mb-4">
          <LogoCafe className="w-20 h-20 text-white" />
        </div>
        <div className="space-y-2">
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-white tracking-tighter uppercase">
            Club Café
          </h1>
          <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-[0.4em]">
            Temuco, Chile
          </p>
        </div>
        <div className="h-px w-24 bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
        <div className="space-y-4 max-w-md">
          <p className="text-zinc-400 font-body text-lg font-light leading-relaxed">
            Estamos preparando una nueva experiencia digital para ti. <br />
            El aroma ya se siente.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900/50 border border-white/5 rounded-full text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
            <Sparkles size={12} /> Próximamente
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 text-zinc-700 text-[9px] font-bold uppercase tracking-widest">
        © 2026 Club Café
      </div>
    </div>
  );
}