"use client";
import { Outfit, DM_Sans } from "next/font/google";
import "./globals.css";
import { ShoppingCart, ChevronDown, User, Sparkles } from "lucide-react";
import LogoCafe from '@/components/LogoCafe';
import { useCartStore } from "@/store/cartStore";
import { useAuthStore } from "@/store/authStore";
import CartSidebar from '@/components/CartSidebar';
import AuthSidebar from '@/components/AuthSidebar';
import Footer from '@/components/FooterClub';
import Link from "next/link";
import { useEffect, useState } from "react";

const outfit = Outfit({ subsets: ["latin"], variable: '--font-heading', display: 'swap' });
const dmSans = DM_Sans({ subsets: ["latin"], variable: '--font-body', display: 'swap' });

const categories = [
  { id: 'todos', name: 'Ver Todo', href: '/' },
  { id: 'cafe', name: 'Cafetería', href: '/category/cafe' },
  { id: 'dulce', name: 'Pastelería', href: '/category/dulce' },
  { id: 'brunch', name: 'Brunch', href: '/category/brunch' },
  { id: 'sandwiches', name: 'Sándwiches', href: '/category/sandwiches' },
  { id: 'hamburguesas', name: 'Hamburguesas', href: '/category/hamburguesas' },
  { id: 'bebidas', name: 'Bebidas', href: '/category/bebidas' },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { getTotal, openCart } = useCartStore();
  const { openAuth } = useAuthStore();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <html lang="es">
      <body className={`${outfit.variable} ${dmSans.variable} font-body bg-black text-white min-h-screen flex flex-col`}>

        <header className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-md">
          <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">

            {/* Lado Izquierdo */}
            <div className="flex items-center gap-8">
              <Link href="/" className="flex items-center gap-3 group">
                <LogoCafe className="w-9 h-9 text-white transition-transform group-hover:scale-110" />
                <div className="flex flex-col leading-tight">
                  <span className="font-heading font-bold text-lg tracking-tighter uppercase">Club Café</span>
                  <span className="text-[8px] text-zinc-500 font-bold uppercase tracking-[0.2em]">Temuco</span>
                </div>
              </Link>

              <div className="hidden lg:flex items-center gap-6">
                {/* Nuestra Carta (Sin fondo ni borde) */}
                <div className="relative group">
                  <button className="flex items-center gap-2 py-2 text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-all">
                    Nuestra Carta
                    <ChevronDown size={12} strokeWidth={3} className="text-zinc-500 group-hover:text-white" />
                  </button>

                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="bg-zinc-950/90 border border-white/5 rounded-2xl p-2 w-48 backdrop-blur-xl">
                      {categories.map((cat) => (
                        <Link key={cat.id} href={cat.href} className="block px-4 py-2 text-[9px] font-bold uppercase tracking-widest text-zinc-500 hover:text-white rounded-xl transition-all">
                          {cat.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Especiales (Solo texto e icono) */}
                <Link href="/especiales" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-all">
                  <Sparkles size={12} />
                  Especiales
                </Link>
              </div>
            </div>

            {/* Lado Derecho */}
            <div className="flex items-center gap-4">
              <button onClick={openAuth} className="hidden sm:flex items-center gap-2 text-zinc-400 hover:text-white transition-all text-[10px] font-bold uppercase tracking-widest">
                <User size={14} />
                Ingresar
              </button>

              <button onClick={openCart} className="flex items-center gap-2 bg-white text-black px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-zinc-200 transition-all">
                <ShoppingCart size={14} />
                <span>{isMounted && getTotal() > 0 ? `$${getTotal().toLocaleString('es-CL')}` : 'Carrito'}</span>
              </button>
            </div>
          </div>
        </header>

        <main className="flex-grow pt-20">{children}</main>
        <Footer />
        <CartSidebar />
        <AuthSidebar />
      </body>
    </html>
  );
}