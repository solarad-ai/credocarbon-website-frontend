import RegistriesSection from "../../components/sections/Registries";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function RegistriesPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
            <RegistriesSection />

            {/* Complete Registry Directory */}
            <section className="relative py-20 md:py-28 overflow-hidden">
                {/* Background effects */}
                <div className="absolute inset-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-emerald-500/5 to-teal-500/5 rounded-full blur-3xl" />
                </div>

                <div className="relative mx-auto max-w-6xl px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
                            Complete Registry Directory
                        </h2>
                        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                            All 48+ registries we integrate with, organized by category
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Carbon Credit Registries */}
                        <div className="rounded-2xl border border-emerald-400/30 bg-slate-900/60 backdrop-blur-sm p-6">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-emerald-400 to-emerald-500 flex items-center justify-center">
                                    <span className="text-slate-900 font-bold text-sm">🌿</span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-50">Carbon Credit Registries</h3>
                                    <p className="text-xs text-emerald-400">21 Registries</p>
                                </div>
                            </div>
                            <ol className="space-y-2 text-sm">
                                {[
                                    { name: "Verra VCS", country: "USA" },
                                    { name: "Gold Standard", country: "Switzerland" },
                                    { name: "ACR", country: "USA" },
                                    { name: "Climate Action Reserve", country: "USA" },
                                    { name: "Puro.Earth", country: "Finland" },
                                    { name: "Plan Vivo", country: "UK" },
                                    { name: "ART-TREES", country: "USA" },
                                    { name: "Global Carbon Council", country: "Qatar" },
                                    { name: "UK Woodland Carbon Code", country: "UK" },
                                    { name: "UK Peatland Code", country: "UK" },
                                    { name: "CERC India", country: "India" },
                                    { name: "China CCER", country: "China" },
                                    { name: "Korean Carbon Standard", country: "South Korea" },
                                    { name: "Australian ACCU", country: "Australia" },
                                    { name: "South Africa COAS", country: "South Africa" },
                                    { name: "Colombia RENARE", country: "Colombia" },
                                    { name: "Japan J-Credit", country: "Japan" },
                                    { name: "Thailand T-VER", country: "Thailand" },
                                    { name: "Indonesia SPEI", country: "Indonesia" },
                                    { name: "Singapore Carbon Services", country: "Singapore" },
                                    { name: "CORSIA (ICAO)", country: "Global" },
                                ].map((reg, i) => (
                                    <li key={reg.name} className="flex items-center gap-3 py-1.5 border-b border-slate-700/50 last:border-0">
                                        <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold flex items-center justify-center flex-shrink-0">
                                            {i + 1}
                                        </span>
                                        <span className="text-slate-200 flex-1">{reg.name}</span>
                                        <span className="text-[10px] text-slate-500">{reg.country}</span>
                                    </li>
                                ))}
                            </ol>
                        </div>

                        {/* REC Registries */}
                        <div className="rounded-2xl border border-cyan-400/30 bg-slate-900/60 backdrop-blur-sm p-6">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-500 flex items-center justify-center">
                                    <span className="text-slate-900 font-bold text-sm">⚡</span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-50">REC Registries</h3>
                                    <p className="text-xs text-cyan-400">13 Registries</p>
                                </div>
                            </div>
                            <ol className="space-y-2 text-sm">
                                {[
                                    { name: "I-REC Standard", country: "Global" },
                                    { name: "GCC I-REC", country: "MENA" },
                                    { name: "TIGR Registry", country: "USA" },
                                    { name: "EU EACs / GO", country: "EU" },
                                    { name: "Green-e®", country: "USA" },
                                    { name: "REC India", country: "India" },
                                    { name: "China GEC", country: "China" },
                                    { name: "Malaysia T-REC", country: "Malaysia" },
                                    { name: "Japan J-Credit RE", country: "Japan" },
                                    { name: "Australia LGC/SREC", country: "Australia" },
                                    { name: "UK REGOs", country: "UK" },
                                    { name: "Turkey YEK-G", country: "Turkey" },
                                    { name: "Colombia CER", country: "Colombia" },
                                ].map((reg, i) => (
                                    <li key={reg.name} className="flex items-center gap-3 py-1.5 border-b border-slate-700/50 last:border-0">
                                        <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 text-[10px] font-bold flex items-center justify-center flex-shrink-0">
                                            {i + 1}
                                        </span>
                                        <span className="text-slate-200 flex-1">{reg.name}</span>
                                        <span className="text-[10px] text-slate-500">{reg.country}</span>
                                    </li>
                                ))}
                            </ol>
                        </div>

                        {/* Compliance / ETS */}
                        <div className="rounded-2xl border border-amber-400/30 bg-slate-900/60 backdrop-blur-sm p-6">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 flex items-center justify-center">
                                    <span className="text-slate-900 font-bold text-sm">🏭</span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-50">Compliance / ETS</h3>
                                    <p className="text-xs text-amber-400">14 Systems</p>
                                </div>
                            </div>
                            <ol className="space-y-2 text-sm">
                                {[
                                    { name: "EU ETS", country: "EU" },
                                    { name: "UK ETS", country: "UK" },
                                    { name: "California Cap-and-Trade", country: "USA" },
                                    { name: "RGGI", country: "USA" },
                                    { name: "China National ETS", country: "China" },
                                    { name: "Korea ETS", country: "South Korea" },
                                    { name: "New Zealand ETS", country: "New Zealand" },
                                    { name: "Switzerland ETS", country: "Switzerland" },
                                    { name: "Quebec Cap-and-Trade", country: "Canada" },
                                    { name: "Tokyo ETS", country: "Japan" },
                                    { name: "Saitama ETS", country: "Japan" },
                                    { name: "Kazakhstan ETS", country: "Kazakhstan" },
                                    { name: "Mexico Pilot ETS", country: "Mexico" },
                                    { name: "Colombia Carbon Tax", country: "Colombia" },
                                ].map((reg, i) => (
                                    <li key={reg.name} className="flex items-center gap-3 py-1.5 border-b border-slate-700/50 last:border-0">
                                        <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 text-[10px] font-bold flex items-center justify-center flex-shrink-0">
                                            {i + 1}
                                        </span>
                                        <span className="text-slate-200 flex-1">{reg.name}</span>
                                        <span className="text-[10px] text-slate-500">{reg.country}</span>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
