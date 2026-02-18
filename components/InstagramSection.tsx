"use client";
import Image from "next/image";
import { Instagram, ArrowUpRight } from "lucide-react";

export default function InstagramSection() {
    return (
        <section className="w-full relative py-8 bg-black">

            <div className="max-w-6xl mx-auto px-4 relative z-10">

                {/* Sin fondo, solo el contenedor de contenido */}
                <div className="text-center group">

                    {/* Cabecera */}
                    <div className="mb-12 space-y-4">
                        <span className="text-zinc-600 font-bold tracking-[0.4em] uppercase text-[9px] font-heading">
                            Social Club
                        </span>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-white tracking-tight">
                            Sigue el Aroma
                        </h2>
                        <p className="text-zinc-500 font-body max-w-lg mx-auto text-lg font-light leading-relaxed">
                            Únete a nuestra comunidad. Novedades, eventos y mucho arte latte en tu feed diario.
                        </p>
                    </div>

                    {/* Grilla de Fotos */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            "https://images.unsplash.com/photo-1521017432531-fbd92d768814",
                            "https://images.unsplash.com/photo-1497935586351-b67a49e012bf",
                            "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd",
                            "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb"
                        ].map((src, idx) => (
                            <div key={idx} className="relative aspect-square overflow-hidden rounded-2xl border border-white/5 bg-zinc-950">
                                <Image
                                    src={`${src}?q=80&w=600&auto=format&fit=crop`}
                                    alt="Club Café Instagram"
                                    fill
                                    className="object-cover transition-all duration-700 opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Botón "Visitar Perfil" - Ahora separado y alineado */}
                    <div className="mt-16 flex justify-center">
                        <a
                            href="https://instagram.com/clubcafe.temuco"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-white/40 hover:text-white transition-all group/btn"
                        >
                            <span className="font-bold font-heading tracking-[0.3em] text-[10px] uppercase border-b border-white/10 group-hover/btn:border-white pb-1 transition-colors">
                                Visitar Perfil
                            </span>
                            <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}