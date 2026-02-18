"use client";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useParams } from "next/navigation"; // Usamos esto para leer la URL

export default function CategoryPage() {
    // 1. Leemos qué categoría pide la URL (ej: "cafe", "dulce")
    const params = useParams();
    const categoryId = params?.id as string; // "cafe", "dulce", etc.

    // 2. Filtramos los productos
    // (Si la URL dice "cafe", buscamos solo los de id "cafe")
    const categoryProducts = products.filter((p) => p.categoryId === categoryId);

    // 3. Obtenemos el nombre bonito
    const categoryName = categoryProducts.length > 0 ? categoryProducts[0].category : categoryId;

    return (
        <div className="min-h-screen bg-black pt-10 pb-20">

            {/* CABECERA (Sin Foto Gigante) */}
            <div className="max-w-6xl mx-auto px-4 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-zinc-500 hover:text-white mb-6 transition-colors text-sm font-bold uppercase tracking-wider"
                >
                    <ArrowLeft size={16} /> Volver al Inicio
                </Link>

                <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-2 capitalize">
                    {categoryName}
                </h1>
                <p className="text-zinc-400 font-body">
                    Explorando nuestra selección especial.
                </p>
            </div>

            {/* REJILLA DE PRODUCTOS */}
            <section className="max-w-6xl mx-auto px-4">
                {categoryProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
                        {categoryProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                id={product.id}
                                name={product.name}
                                price={product.price}
                                image={product.image}
                                category={product.category}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-zinc-900/50 rounded-3xl border border-dashed border-white/10">
                        <p className="text-zinc-500 text-lg font-body">
                            Aún no hay productos aquí 🧑‍🍳
                        </p>
                        <Link href="/" className="text-orange-400 hover:underline mt-4 block">
                            Ver todo el menú
                        </Link>
                    </div>
                )}
            </section>
        </div>
    );
}
// Actualizacion forzada
