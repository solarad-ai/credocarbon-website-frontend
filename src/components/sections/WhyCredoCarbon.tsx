// src/components/sections/WhyCredoCarbon.tsx
import { Check, X, ArrowRight, Sparkles, Zap, Clock, Shield } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function WhyCredoCarbon() {
    const { t } = useTranslation('home');

    const comparisonPoints = [
        {
            aspectKey: "comparison.projectSetup.aspect",
            platformKey: "comparison.projectSetup.platform",
            traditionalKey: "comparison.projectSetup.traditional",
        },
        {
            aspectKey: "comparison.mrvWorkflow.aspect",
            platformKey: "comparison.mrvWorkflow.platform",
            traditionalKey: "comparison.mrvWorkflow.traditional",
        },
        {
            aspectKey: "comparison.issuanceSpeed.aspect",
            platformKey: "comparison.issuanceSpeed.platform",
            traditionalKey: "comparison.issuanceSpeed.traditional",
        },
        {
            aspectKey: "comparison.dataIntegrity.aspect",
            platformKey: "comparison.dataIntegrity.platform",
            traditionalKey: "comparison.dataIntegrity.traditional",
        },
    ];

    return (
        <section
            id="why-us"
            className="relative py-24 md:py-32 bg-gradient-to-b from-slate-950 via-slate-900/95 to-slate-950 overflow-hidden"
        >
            {/* Refined background */}
            <div className="absolute inset-0">
                {/* Soft gradient with cyan tones */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(6,182,212,0.08),rgba(255,255,255,0))]" />

                {/* Minimal orbs with cyan accent */}
                <div className="absolute top-40 left-[15%] w-72 h-72 bg-cyan-500/6 rounded-full blur-[90px]" />
                <div className="absolute bottom-40 right-[15%] w-96 h-96 bg-emerald-500/5 rounded-full blur-[110px]" />
            </div>

            <div className="relative mx-auto max-w-6xl px-4">
                {/* Refined Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-gradient-to-r from-cyan-500/8 to-emerald-500/8 px-5 py-2.5 mb-7 backdrop-blur-sm shadow-lg shadow-cyan-500/5">
                        <Sparkles className="w-4 h-4 text-cyan-400" />
                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                            {t('whyCredoCarbon.badge')}
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                        {t('whyCredoCarbon.title1')}{" "}
                        <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                            {t('whyCredoCarbon.title2')}
                        </span>
                    </h2>

                    <p className="text-base md:text-lg text-slate-400 leading-relaxed">
                        {t('whyCredoCarbon.description')}{" "}
                        <span className="text-slate-300">{t('whyCredoCarbon.betterWay')}</span>
                    </p>
                </div>

                {/* Refined Comparison Table */}
                <div className="max-w-4xl mx-auto mb-20">
                    <div className="relative bg-gradient-to-br from-slate-900/50 via-slate-900/40 to-slate-800/50 backdrop-blur-xl rounded-3xl border border-slate-700/40 overflow-hidden shadow-2xl shadow-cyan-500/5">
                        {/* Refined gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/8 via-transparent to-emerald-500/6 pointer-events-none" />

                        <div className="relative p-7 md:p-10">
                            {/* Header Row */}
                            <div className="grid grid-cols-3 gap-6 mb-8 pb-7 border-b border-slate-700/40">
                                <div className="text-sm font-semibold text-slate-400 uppercase tracking-wider">{t('whyCredoCarbon.feature')}</div>
                                <div className="text-center">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/15 to-emerald-500/15 border border-cyan-400/25 shadow-lg shadow-cyan-500/10">
                                        <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                                        <span className="text-xs font-bold text-cyan-300">CredoCarbon</span>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/40 border border-slate-700/40">
                                        <div className="w-2 h-2 rounded-full bg-slate-500" />
                                        <span className="text-xs font-medium text-slate-400">Traditional</span>
                                    </div>
                                </div>
                            </div>

                            {/* Comparison Rows */}
                            <div className="space-y-3">
                                {comparisonPoints.map((point, index) => (
                                    <div
                                        key={index}
                                        className="grid grid-cols-3 gap-6 items-center py-5 px-5 rounded-xl bg-slate-800/20 border border-slate-700/20 hover:bg-slate-800/30 hover:border-cyan-500/20 transition-all duration-300 group"
                                    >
                                        <div className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">{t(`whyCredoCarbon.${point.aspectKey}`)}</div>
                                        <div className="text-center">
                                            <span className="inline-flex items-center gap-2 text-sm font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                                                <Check className="w-4 h-4" strokeWidth={2.5} />
                                                {t(`whyCredoCarbon.${point.platformKey}`)}
                                            </span>
                                        </div>
                                        <div className="text-center">
                                            <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-500">
                                                <X className="w-4 h-4" strokeWidth={2} />
                                                {t(`whyCredoCarbon.${point.traditionalKey}`)}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* CTA */}
                            <div className="mt-10 pt-8 border-t border-slate-700/40">
                                <a
                                    href="https://dashboard.credocarbon.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 w-full md:w-auto md:mx-auto md:px-10 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-900 font-bold text-sm hover:from-cyan-400 hover:to-emerald-400 transition-all duration-300 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] group"
                                >
                                    <span>{t('whyCredoCarbon.experiencePlatform')}</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform rtl:rotate-180" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Refined Stats */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                    {[
                        { icon: Zap, value: "60%", labelKey: "stats.fasterIssuance", color: "cyan" },
                        { icon: Shield, value: "100%", labelKey: "stats.auditReady", color: "emerald" },
                        { icon: Clock, value: "24/7", labelKey: "stats.platformAccess", color: "teal" },
                    ].map((stat) => (
                        <div
                            key={stat.labelKey}
                            className="text-center p-7 rounded-2xl bg-slate-900/40 border border-slate-800/50 hover:border-cyan-500/25 hover:bg-slate-900/50 transition-all duration-300 group"
                        >
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/15 to-emerald-500/15 mb-4 group-hover:from-cyan-500/20 group-hover:to-emerald-500/20 transition-all shadow-lg shadow-cyan-500/10">
                                <stat.icon className="w-5 h-5 text-cyan-400" />
                            </div>
                            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                                {stat.value}
                            </div>
                            <div className="text-sm font-medium text-slate-300">{t(`whyCredoCarbon.${stat.labelKey}`)}</div>
                        </div>
                    ))}
                </div>

                {/* Subtle disclaimer */}
                <p className="mt-14 text-center text-xs text-slate-500 max-w-2xl mx-auto leading-relaxed">
                    {t('whyCredoCarbon.disclaimer')}
                </p>
            </div>
        </section>
    );
}
