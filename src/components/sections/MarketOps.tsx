// src/components/sections/MarketOps.tsx
import { TrendingUp, Shield, FileCheck, Link, CreditCard } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function MarketOps() {
  const { t } = useTranslation('buyers');

  const marketFeatures = [
    {
      icon: TrendingUp,
      title: t('marketOps.features.pricing.title'),
      desc: t('marketOps.features.pricing.desc'),
      capabilities: t('marketOps.features.pricing.capabilities', { returnObjects: true }) as string[]
    },
    {
      icon: Shield,
      title: t('marketOps.features.quality.title'),
      desc: t('marketOps.features.quality.desc'),
      capabilities: t('marketOps.features.quality.capabilities', { returnObjects: true }) as string[]
    },
    {
      icon: FileCheck,
      title: t('marketOps.features.dueDiligence.title'),
      desc: t('marketOps.features.dueDiligence.desc'),
      capabilities: t('marketOps.features.dueDiligence.capabilities', { returnObjects: true }) as string[]
    },
    {
      icon: Link,
      title: t('marketOps.features.provenance.title'),
      desc: t('marketOps.features.provenance.desc'),
      capabilities: t('marketOps.features.provenance.capabilities', { returnObjects: true }) as string[]
    },
    {
      icon: CreditCard,
      title: t('marketOps.features.settlement.title'),
      desc: t('marketOps.features.settlement.desc'),
      capabilities: t('marketOps.features.settlement.capabilities', { returnObjects: true }) as string[]
    }
  ];

  return (
    <section
      id="marketops"
      className="relative bg-slate-950 py-20 md:py-28 border-t border-emerald-500/10 overflow-hidden"
    >
      {/* Market-themed background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse delay-200" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500/15 to-teal-500/15 rounded-full blur-3xl animate-pulse delay-600" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        {/* ENHANCED HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-4 py-2 mb-6">
            <TrendingUp className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-400">
              {t('marketOps.badge')}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-6">
            {t('marketOps.title1')}
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent"> {t('marketOps.title2')}</span>
          </h2>

          <p className="text-lg text-slate-300 leading-relaxed">
            {t('marketOps.description')}
          </p>
        </div>

        {/* UNIFIED MARKET FEATURES GRID - 2 columns on desktop for better balance */}
        <div className="grid md:grid-cols-2 gap-6 mb-20 max-w-5xl mx-auto">
          {marketFeatures.map((feature, index) => {
            const colors = [
              'from-amber-500/20 to-orange-600/20 border-amber-400/30',
              'from-emerald-500/20 to-teal-600/20 border-emerald-400/30',
              'from-orange-500/20 to-red-600/20 border-orange-400/30',
              'from-cyan-500/20 to-blue-600/20 border-cyan-400/30',
              'from-teal-500/20 to-cyan-600/20 border-teal-400/30'
            ];

            return (
              <div
                key={feature.title}
                className={`group relative overflow-hidden rounded-3xl border border-slate-700/60 bg-slate-900/60 backdrop-blur-sm p-7 transition-all duration-300 hover:border-amber-400/50 hover:bg-slate-800/80 hover:shadow-2xl hover:shadow-amber-500/10 hover:-translate-y-1 ${index === 4 ? 'md:col-span-2 md:max-w-2xl md:mx-auto' : ''
                  }`}
              >
                {/* Enhanced hover effect */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${colors[index]} opacity-10`} />

                <div className="relative">
                  {/* Market icon */}
                  <div className="flex items-start gap-4 mb-5">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${colors[index]} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0`}>
                      <feature.icon className="w-7 h-7 text-amber-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-50 group-hover:text-amber-100 transition-colors leading-tight">
                        {feature.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm text-slate-300 mb-5 leading-relaxed">
                    {feature.desc}
                  </p>

                  {/* Key capabilities */}
                  <div className={`grid gap-2.5 ${index === 4 ? 'md:grid-cols-3' : ''}`}>
                    {feature.capabilities.map((capability) => (
                      <div key={capability} className="flex gap-2.5 items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 flex-shrink-0" />
                        <span className="text-xs text-slate-400 font-medium">{capability}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* MARKET PERFORMANCE METRICS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { label: t('marketOps.stats.settlement.label'), value: t('marketOps.stats.settlement.value'), desc: t('marketOps.stats.settlement.desc'), icon: "✓" },
            { label: t('marketOps.stats.dealTime.label'), value: t('marketOps.stats.dealTime.value'), desc: t('marketOps.stats.dealTime.desc'), icon: "⚡" },
            { label: t('marketOps.stats.traded.label'), value: t('marketOps.stats.traded.value'), desc: t('marketOps.stats.traded.desc'), icon: "📊" }
          ].map((stat) => (
            <div
              key={stat.label}
              className="group relative text-center p-8 rounded-3xl border border-slate-800/80 bg-gradient-to-br from-slate-900/60 to-slate-900/40 backdrop-blur-sm hover:border-amber-400/40 hover:bg-slate-800/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/10"
            >
              <div className="text-2xl mb-3">{stat.icon}</div>
              <div className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mb-3">
                {stat.value}
              </div>
              <div className="text-base font-semibold text-slate-300 mb-2">{stat.label}</div>
              <div className="text-xs text-slate-500">{stat.desc}</div>
            </div>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 rounded-2xl border border-slate-700/80 bg-gradient-to-br from-slate-900/80 to-slate-900/60 backdrop-blur-sm px-10 py-5 shadow-lg hover:border-amber-400/40 hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300">
            <CreditCard className="w-6 h-6 text-amber-400" />
            <span className="text-base font-medium text-slate-300">{t('marketOps.cta')}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
