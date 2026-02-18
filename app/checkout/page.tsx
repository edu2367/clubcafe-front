"use client";
import { useCartStore } from "@/store/cartStore";
import Link from "next/link";
import Image from "next/image";
import { Trash2, ArrowLeft, ArrowRight, ShoppingBag } from "lucide-react";

export default function CheckoutPage() {
    const { cart, removeFromCart, getTotal } = useCartStore();

    return (
        <div className="min-h-screen bg-black pt-10 pb-20 font-body">
            <div className="max-w-6xl mx-auto px-4">

                {/* Botón Volver */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-zinc-500 hover:text-white mb-8 transition-colors text-sm font-bold uppercase tracking-wider"
                >
                    <ArrowLeft size={16} /> Volver a la Carta
                </Link>

                <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-8">
                    Tu Pedido <span className="text-orange-500">.</span>
                </h1>

                {cart.length === 0 ? (
                    // --- CARRITO VACÍO ---
                    <div className="text-center py-20 bg-zinc-900/50 rounded-3xl border border-dashed border-white/10">
                        <ShoppingBag size={48} className="mx-auto text-zinc-600 mb-4" />
                        <p className="text-zinc-400 text-lg mb-6">Tu bandeja está vacía 😢</p>
                        <Link
                            href="/"
                            className="inline-flex bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-zinc-200 transition-colors"
                        >
                            Ir a pedir algo rico
                        </Link>
                    </div>
                ) : (
                    // --- CARRITO CON PRODUCTOS ---
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                        {/* Columna Izquierda: Lista de Productos */}
                        <div className="lg:col-span-2 space-y-4">
                            {cart.map((item) => (
                                <div key={item.id} className="flex gap-4 bg-zinc-900/50 p-4 rounded-2xl border border-white/5 items-center">
                                    {/* Imagen Miniatura */}
                                    <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-zinc-800 shrink-0">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    {/* Info Producto */}
                                    <div className="flex-grow">
                                        <h3 className="font-heading font-bold text-white text-lg">{item.name}</h3>
                                        <p className="text-orange-400 font-bold">${item.price.toLocaleString('es-CL')}</p>
                                    </div>

                                    {/* Botón Eliminar */}
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="p-3 bg-red-500/10 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition-colors"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            ))}
                        </div>

                        {/* Columna Derecha: Resumen y Pago */}
                        <div className="bg-zinc-900 p-8 rounded-3xl border border-white/10 h-fit sticky top-24">
                            <h3 className="font-heading font-bold text-2xl text-white mb-6">Resumen</h3>

                            <div className="space-y-3 mb-8 text-zinc-400 text-sm">
                                <div className="flex justify-between">
                                    <span>Subtotal</span>
                                    <span>${getTotal().toLocaleString('es-CL')}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Propina (10%)</span>
                                    <span>${(getTotal() * 0.1).toLocaleString('es-CL')}</span>
                                </div>
                                <div className="border-t border-white/10 my-4 pt-4 flex justify-between text-white font-bold text-xl">
                                    <span>Total</span>
                                    <span>${(getTotal() * 1.1).toLocaleString('es-CL')}</span>
                                </div>
                            </div>

                            <button className="w-full bg-orange-500 text-white py-4 rounded-xl font-bold font-heading uppercase tracking-wider hover:bg-orange-600 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20">
                                Pagar Ahora <ArrowRight size={18} />
                            </button>

                            <p className="text-center text-xs text-zinc-500 mt-4">
                                Pagos seguros vía WebPay / Transferencia
                            </p>
                        </div>

                    </div>
                )}
            </div>
        </div>
    );
}