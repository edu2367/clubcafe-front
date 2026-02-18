"use client";
import { X, ArrowRight, Mail, Lock } from "lucide-react";
import { useAuthStore } from "../store/authStore";
import LogoCafe from "./LogoCafe";

export default function AuthSidebar() {
    const { isOpen, closeAuth } = useAuthStore();

    // Si está cerrado, no muestra nada
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex justify-start">

            {/* Fondo oscuro (Click afuera cierra) */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={closeAuth}
            />

            {/* El Panel Negro */}
            <div className="relative w-full max-w-sm bg-zinc-950 h-full shadow-2xl border-r border-white/10 flex flex-col transform transition-transform duration-500 animate-in slide-in-from-left">

                {/* Cabecera */}
                <div className="p-6 flex justify-between items-start">
                    <div>
                        <LogoCafe className="w-10 h-10 text-white mb-2" />
                        <h2 className="text-2xl font-black text-white">Zona Club</h2>
                        <p className="text-xs text-orange-400 font-bold uppercase">Acceso Exclusivo</p>
                    </div>
                    <button onClick={closeAuth} className="p-2 bg-white/5 rounded-full text-zinc-400 hover:text-white">
                        <X size={20} />
                    </button>
                </div>

                {/* Formulario */}
                <div className="flex-1 p-6 space-y-6">
                    <div className="space-y-4">
                        <h3 className="text-zinc-400 text-sm">Ingresa tu correo</h3>

                        <div className="relative group">
                            <Mail className="absolute left-4 top-3.5 text-zinc-500 group-focus-within:text-orange-500" size={20} />
                            <input type="email" placeholder="Email" className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl py-3 pl-12 text-white focus:border-orange-500 outline-none" />
                        </div>

                        <div className="relative group">
                            <Lock className="absolute left-4 top-3.5 text-zinc-500 group-focus-within:text-orange-500" size={20} />
                            <input type="password" placeholder="Contraseña" className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl py-3 pl-12 text-white focus:border-orange-500 outline-none" />
                        </div>

                        <button className="w-full bg-white text-black font-bold py-4 rounded-2xl hover:bg-orange-500 hover:text-white transition-all flex justify-center gap-2">
                            Entrar <ArrowRight size={18} />
                        </button>
                    </div>

                    <div className="border-t border-zinc-800 pt-6">
                        <button className="w-full bg-zinc-900 text-white font-medium py-3 rounded-2xl border border-zinc-800 hover:bg-zinc-800 flex justify-center gap-2">
                            Ingresar con Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}