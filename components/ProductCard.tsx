"use client";
import Image from "next/image";
import { Plus } from "lucide-react";
import { useCartStore } from "@/store/cartStore";

interface ProductCardProps {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
}

export default function ProductCard({ id, name, price, image, category }: ProductCardProps) {
    // AQUÍ ESTABA EL ERROR: Usamos 'addToCart' que es el nombre correcto
    const { addToCart } = useCartStore();

    const handleAdd = () => {
        addToCart({ id, name, price, image, category });
    };

    return (
        <div className="group relative bg-zinc-900 border border-white/5 rounded-2xl overflow-hidden hover:border-orange-500/50 transition-colors">

            {/* Imagen */}
            <div className="relative aspect-square overflow-hidden">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay oscuro al pasar mouse */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Info */}
            <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <span className="text-xs font-bold text-orange-500 uppercase tracking-wider">{category}</span>
                        <h3 className="text-white font-bold font-heading text-lg leading-tight mt-1">{name}</h3>
                    </div>
                    <span className="text-white font-bold bg-white/10 px-2 py-1 rounded-lg text-sm">
                        ${price.toLocaleString('es-CL')}
                    </span>
                </div>

                {/* Botón Agregar */}
                <button
                    onClick={handleAdd}
                    className="w-full mt-3 bg-white text-black py-2 rounded-xl font-bold text-sm hover:bg-orange-500 hover:text-white transition-all flex items-center justify-center gap-2 active:scale-95"
                >
                    <Plus size={16} /> Agregar
                </button>
            </div>
        </div>
    );
}