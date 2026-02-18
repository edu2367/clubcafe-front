import { ScanBarcode, Coffee, CreditCard, ArrowRight } from "lucide-react";

export default function WalletSection() {
    return (
        <section className="w-full py-24 bg-zinc-950 border-t border-b border-white/5 relative overflow-hidden">

            {/* Fondo sutil (sin gradientes locos) */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-900/20 via-zinc-950 to-zinc-950 pointer-events-none" />

            <div className="max-w-6xl mx-auto px-4 relative z-10">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* LADO IZQUIERDO: La Propuesta de Valor */}
                    <div className="text-left space-y-8">
                        <div>
                            <span className="text-orange-500/80 font-bold tracking-[0.2em] uppercase text-[10px] mb-3 block font-heading">
                                Membresía Digital
                            </span>
                            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight">
                                Wallet Club. <br />
                                <span className="text-zinc-500">Cada visita cuenta.</span>
                            </h2>
                        </div>

                        <p className="text-zinc-400 font-body text-lg leading-relaxed max-w-md">
                            La forma inteligente de disfrutar tu café. Únete a nuestro programa de fidelización, acumula saldo en cada compra y canjea tus favoritos sin sacar la billetera.
                        </p>

                        {/* Los 3 Pasos (Minimalistas) */}
                        <div className="space-y-8 pt-4">

                            {/* Paso 1 */}
                            <div className="flex gap-4 group">
                                <div className="mt-1 text-orange-500 group-hover:text-white transition-colors">
                                    <ScanBarcode size={24} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold font-heading text-lg">Regístrate</h3>
                                    <p className="text-zinc-500 text-sm leading-relaxed">Crea tu cuenta gratis en Wallet Club y obtén tu código QR personal al instante.</p>
                                </div>
                            </div>

                            {/* Paso 2 */}
                            <div className="flex gap-4 group">
                                <div className="mt-1 text-orange-500 group-hover:text-white transition-colors">
                                    <CreditCard size={24} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold font-heading text-lg">Acumula</h3>
                                    <p className="text-zinc-500 text-sm leading-relaxed">Presenta tu código al pagar y un porcentaje de tu compra volverá a ti como saldo.</p>
                                </div>
                            </div>

                            {/* Paso 3 */}
                            <div className="flex gap-4 group">
                                <div className="mt-1 text-orange-500 group-hover:text-white transition-colors">
                                    <Coffee size={24} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold font-heading text-lg">Disfruta</h3>
                                    <p className="text-zinc-500 text-sm leading-relaxed">Usa tu saldo acumulado para pagar tu próximo café, brunch o lo que quieras.</p>
                                </div>
                            </div>

                        </div>

                        {/* Botón de Acción */}
                        <div className="pt-4">
                            <a
                                href="https://walletclub.cl"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 border-b border-orange-500 pb-1 text-white font-heading font-bold uppercase tracking-widest text-sm hover:text-orange-500 hover:border-white transition-all group"
                            >
                                Crear mi cuenta gratis <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>

                    {/* LADO DERECHO: Tarjeta "Black" Elegante */}
                    <div className="relative flex justify-center lg:justify-end">

                        {/* Tarjeta Frontal */}
                        <div className="relative w-80 h-[480px] bg-zinc-900 rounded-[2rem] border border-white/10 shadow-2xl p-6 flex flex-col justify-between overflow-hidden group hover:scale-105 transition-transform duration-700">

                            {/* Brillo decorativo */}
                            <div className="absolute -top-20 -right-20 w-60 h-60 bg-orange-500/10 blur-[80px] rounded-full" />

                            {/* Header Tarjeta */}
                            <div className="flex justify-between items-start z-10">
                                <div className="space-y-1">
                                    <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">Mi Saldo</p>
                                    <p className="text-3xl font-bold text-white font-heading">$12.500</p>
                                </div>
                                <ScanBarcode className="text-white/20" size={32} />
                            </div>

                            {/* Cuerpo: QR Simulado */}
                            <div className="flex-1 flex items-center justify-center py-8 z-10">
                                <div className="w-48 h-48 bg-white rounded-2xl p-2 shadow-lg">
                                    {/* Patrón de QR falso con CSS */}
                                    <div className="w-full h-full bg-black pattern-grid-lg opacity-90 rounded-xl flex items-center justify-center">
                                        <ScanBarcode className="text-white" size={48} />
                                    </div>
                                </div>
                            </div>

                            {/* Footer Tarjeta */}
                            <div className="z-10 text-center space-y-4">
                                <p className="text-zinc-500 text-xs">Escanea para sumar puntos</p>
                                <div className="w-full h-12 bg-orange-500 rounded-xl flex items-center justify-center gap-2 font-bold text-black text-sm uppercase tracking-wider">
                                    Club Café Member
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}