"use client";
import { useCartStore } from "@/store/cartStore";
import { X, Trash2, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CartSidebar() {
    // AQUÍ ESTABA EL ERROR: Actualizamos los nombres a los del store nuevo
    const { cart, isOpen, closeCart, removeFromCart, getTotal } = useCartStore();

    if (!isOpen) return null;

    return (
        <>
            {/* Fondo oscuro (Overlay) */}
            <div
                onClick={closeCart}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity"
            />

            {/* Panel Lateral */}
            <div className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-zinc-950 border-l border-white/10 z-[70] shadow-2xl flex flex-col transform transition-transform duration-300">

                {/* Cabecera */}
                <div className="p-5 border-b border-white/10 flex justify-between items-center bg-zinc-900/50">
                    <h2 className="text-xl font-bold font-heading text-white flex items-center gap-2">
                        <ShoppingBag size={20} className="text-orange-500" />
                        Tu Pedido
                    </h2>
                    <button onClick={closeCart} className="p-2 hover:bg-white/10 rounded-full text-zinc-400 hover:text-white transition-colors">
                        <X size={20} />
                    </button>
                </div>

                {/* Lista de Productos */}
                <div className="flex-1 overflow-y-auto p-5 space-y-4">
                    {cart.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-50">
                            <ShoppingBag size={48} />
                            <p>Tu carrito está vacío</p>
                        </div>
                    ) : (
                        cart.map((item, index) => (
                            // Usamos index en la key por si hay productos repetidos
                            <div key={`${item.id}-${index}`} className="flex gap-4 bg-zinc-900/50 p-3 rounded-xl border border-white/5 animate-in slide-in-from-right-4 duration-300">
                                {/* Imagen Mini */}
                                <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-zinc-800 shrink-0">
                                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                                </div>

                                {/* Info */}
                                <div className="flex-grow flex flex-col justify-center">
                                    <h4 className="font-bold text-white text-sm">{item.name}</h4>
                                    <p className="text-orange-400 text-sm font-bold">${item.price.toLocaleString('es-CL')}</p>
                                </div>

                                {/* Botón Borrar */}
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="p-2 text-zinc-500 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-colors self-center"
                                >
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        ))
                    )}
                </div>

                {/* Footer con Total y Botón Pagar */}
                <div className="p-5 border-t border-white/10 bg-zinc-900">
                    <div className="flex justify-between items-center mb-4 text-white font-bold text-xl">
                        <span>Total:</span>
                        <span>${getTotal().toLocaleString('es-CL')}</span>
                    </div>

                    <Link
                        href="/checkout"
                        onClick={closeCart}
                        className="block w-full bg-white text-black text-center py-3 rounded-xl font-bold font-heading uppercase tracking-wider hover:bg-orange-500 hover:text-white transition-colors"
                    >
                        Ir a Pagar
                    </Link>
                </div>

            </div>
        </>
    );
}