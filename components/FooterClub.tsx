"use client";
import { MapPin, Phone, Instagram, Mail } from "lucide-react";
import Link from "next/link";
import LogoCafe from './LogoCafe';

export default function Footer() {
    return (
        <footer className="w-full bg-black border-t border-white/5 pt-20 pb-10">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                    {/* 1. BRANDING */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-3">
                            <LogoCafe className="w-10 h-10 text-white" />
                            <div className="flex flex-col leading-tight">
                                <span className="font-heading font-bold text-xl tracking-tighter uppercase">Club Café</span>
                                <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-[0.2em]">Temuco</span>
                            </div>
                        </Link>
                        <p className="text-zinc-500 text-sm font-light leading-relaxed">
                            Cafetería de especialidad y tostado local. Un espacio para el diseño, el sabor y la comunidad en el corazón de la Araucanía.
                        </p>
                    </div>

                    {/* 2. ENLACES RÁPIDOS */}
                    <div className="space-y-6">
                        <h4 className="text-white font-heading font-bold uppercase tracking-widest text-[11px]">Explorar</h4>
                        <ul className="space-y-4">
                            <li><Link href="/category/cafe" className="text-zinc-500 hover:text-white transition-colors text-sm font-light">Nuestra Carta</Link></li>
                            <li><Link href="/especiales" className="text-zinc-500 hover:text-white transition-colors text-sm font-light">Especiales</Link></li>
                            <li><Link href="https://walletclub.cl" className="text-zinc-500 hover:text-white transition-colors text-sm font-light">Club Wallet</Link></li>
                        </ul>
                    </div>

                    {/* 3. ENCUÉNTRANOS (ACTUALIZADO) */}
                    <div className="space-y-6">
                        <h4 className="text-white font-heading font-bold uppercase tracking-widest text-[11px]">Encuéntranos</h4>
                        <ul className="space-y-5">
                            <li className="flex gap-4">
                                {/* CAMBIO: Icono zinc/blanco, no naranja */}
                                <MapPin size={18} className="text-zinc-400 shrink-0" />
                                <div className="flex flex-col gap-2">
                                    <span className="text-zinc-300 text-sm font-light leading-tight">Claro Solar 692</span>
                                    <span className="text-zinc-300 text-sm font-light leading-tight">Av. Francia 481</span>
                                    <span className="text-zinc-300 text-sm font-light leading-tight">Av. Pablo Neruda 02430</span>
                                </div>
                            </li>
                            <li className="flex items-center gap-4">
                                <Phone size={18} className="text-zinc-400" />
                                <span className="text-zinc-300 text-sm font-light">+56 9 1234 5678</span>
                            </li>
                        </ul>
                    </div>

                    {/* 4. SOCIAL */}
                    <div className="space-y-6">
                        <h4 className="text-white font-heading font-bold uppercase tracking-widest text-[11px]">Comunidad</h4>
                        <div className="flex flex-col gap-4">
                            <a
                                href="https://instagram.com/clubcafe.temuco"
                                target="_blank"
                                className="inline-flex items-center gap-3 text-zinc-400 hover:text-white transition-all group"
                            >
                                {/* CAMBIO: Sin fondo gris, solo texto e icono flotando */}
                                <Instagram size={18} />
                                <span className="text-sm font-light border-b border-transparent group-hover:border-white pb-0.5">@clubcafe.temuco</span>
                            </a>
                            <a
                                href="mailto:hola@clubcafe.cl"
                                className="inline-flex items-center gap-3 text-zinc-400 hover:text-white transition-all group"
                            >
                                <Mail size={18} />
                                <span className="text-sm font-light border-b border-transparent group-hover:border-white pb-0.5">hola@clubcafe.cl</span>
                            </a>
                        </div>
                    </div>

                </div>

                {/* BOTTOM FOOTER */}
                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-zinc-600 text-[10px] uppercase tracking-widest font-bold">
                        © {new Date().getFullYear()} Club Café. Todos los derechos reservados.
                    </p>
                    <div className="flex gap-8">
                        <Link href="/terminos" className="text-zinc-600 hover:text-white text-[10px] uppercase tracking-widest font-bold transition-colors">Términos</Link>
                        <Link href="/privacidad" className="text-zinc-600 hover:text-white text-[10px] uppercase tracking-widest font-bold transition-colors">Privacidad</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}