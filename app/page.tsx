"use client";
import Hero from "@/components/Hero";
import InstagramSection from "@/components/InstagramSection";
import SplitSection from "@/components/SplitSection";

export default function Home() {
  return (
    <div className="flex flex-col bg-black min-h-screen">

      {/* 1. Portada */}
      <Hero />

      {/* --- SEPARADOR AJUSTADO (Más corto) --- */}
      <div className="w-full h-12 md:h-16 bg-black" />

      {/* 2. Sección Wallet + Sucursales */}
      <SplitSection />

      {/* --- SEPARADOR AJUSTADO (Equilibrado) --- */}
      <div className="w-full h-12 md:h-20 bg-black" />

      {/* 3. Instagram */}
      <InstagramSection />

      {/* Espacio mínimo al final */}
      <div className="w-full h-12 bg-black" />

    </div>
  );
}