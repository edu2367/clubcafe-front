"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, MapPin, Wallet } from "lucide-react";

// Imágenes de las sucursales
const locationImages = [
    "https://images.unsplash.com/photo-1554118811-1e0d58224f24",
    "https://images.unsplash.com/photo-1521017432531-fbd92d768814",
    "https://images.unsplash.com/photo-1497935586351-b67a49e012bf",
];

// Direcciones oficiales en el orden correcto
const branchAddresses = [
    "Claro Solar 692",
    "Av. Francia 481",
    "Av. Pablo Neruda 02430"
];

export default function SplitSection() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % locationImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="w-full relative py-12 bg-black">
            <div className="max-w-6xl mx-auto px-4 relative z-10">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-[500px] items-stretch">

                    {/* === LADO IZQUIERDO: CLUB WALLET (RESALTADO) === */}
                    {/* CAMBIO 1: Agregamos un contenedor con fondo sutil, borde y redondeado para darle peso visual */}
                    <div className="relative p-8 md:p-12 flex flex-col justify-center space-y-8 group rounded-[2.5rem] border border-white/10 bg-zinc-950/50 overflow-hidden shadow-2xl shadow-black/50">

                        {/* CAMBIO 2: Aumentamos la opacidad del icono de fondo (de 0.02 a 0.08) para que se note mucho más */}
                        <div className="absolute top-1/2 left-0 text-white/[0.08] transform rotate-12 -translate-y-1/2 -translate-x-10 pointer-events-none transition-transform group-hover:scale-110 duration-1000">
                            <Wallet size={450} strokeWidth={0.5} />
                        </div>

                        <div className="relative z-10 space-y-6">
                            <span className="inline-flex items-center gap-2 text-zinc-500 font-bold uppercase tracking-[0.3em] text-[10px] font-heading">
                                Membresía Digital
                            </span>
                            {/* CAMBIO 3: Aumentamos el tamaño del título un poco más */}
                            <h2 className="font-heading text-5xl md:text-7xl font-bold text-white leading-[0.9] tracking-tighter drop-shadow-lg">
                                Únete a <br />Club Wallet.
                            </h2>
                            <p className="text-zinc-400 font-body text-lg max-w-sm font-light leading-relaxed">
                                Acumula saldo en cada visita y accede a recompensas exclusivas por ser parte de la casa.
                            </p>
                            <div className="pt-8">
                                <a
                                    href="https://walletclub.cl"
                                    target="_blank"
                                    // Botón más prominente con fondo al hacer hover
                                    className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 hover:bg-white text-white hover:text-black rounded-full font-bold uppercase tracking-widest text-[10px] transition-all group/btn border border-white/10 hover:border-transparent shadow-lg"
                                >
                                    Registrarme Gratis
                                    <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* LADO DERECHO: SUCURSALES DINÁMICAS (Igual que antes) */}
                    <div className="relative rounded-[2.5rem] overflow-hidden min-h-[500px] group border border-white/5">
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
                        <div className="absolute inset-0 z-20 p-10 flex flex-col justify-end pb-16">
                            <div className="inline-flex items-center gap-2 text-white/50 font-bold uppercase tracking-[0.3em] text-[10px] mb-3 font-heading">
                                <MapPin size={12} /> Dónde Encontrarnos
                            </div>
                            <h2 className="font-heading text-4xl font-bold text-white tracking-tight mb-6">
                                Sucursales
                            </h2>

                            <div className="relative h-20">
                                {branchAddresses.map((address, index) => (
                                    <div
                                        key={index}
                                        className={`absolute inset-0 flex flex-col justify-center transition-opacity duration-[1500ms] ease-in-out ${index === currentImageIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                                            }`}
                                    >
                                        <span className="text-white font-heading text-3xl font-bold tracking-tight">
                                            {address}
                                        </span>
                                        <span className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest mt-2">
                                            Temuco, Chile
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="absolute bottom-10 left-10 z-30 flex gap-2">
                            {locationImages.map((_, index) => (
                                <div
                                    key={index}
                                    className={`h-1 rounded-full transition-all duration-500 ${index === currentImageIndex ? "w-8 bg-white" : "w-2 bg-white/20"
                                        }`}
                                />
                            ))}
                        </div>

                        {locationImages.map((src, index) => (
                            <Image
                                key={src}
                                src={`${src}?q=80&w=1000&auto=format&fit=crop`}
                                alt={`Sucursal Club Café - ${branchAddresses[index]}`}
                                fill
                                className={`object-cover transition-opacity duration-[1500ms] ease-in-out ${index === currentImageIndex ? "opacity-50" : "opacity-0"
                                    }`}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}