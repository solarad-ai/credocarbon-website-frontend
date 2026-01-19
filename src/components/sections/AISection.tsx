// src/components/sections/AISection.tsx
import { Brain, Zap, TrendingUp, Shield, Eye, AlertTriangle } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function AISection() {
  const { t } = useTranslation('platform');

  const aiCapabilities = [
    {
      icon: Brain,
      title: t('ai.capabilities.mrvIntelligence.title'),
      desc: t('ai.capabilities.mrvIntelligence.desc'),
      keyFeatures: t('ai.capabilities.mrvIntelligence.features', { returnObjects: true }) as string[]
    },
    {
      icon: Zap,
      title: t('ai.capabilities.forecasting.title'),
      desc: t('ai.capabilities.forecasting.desc'),
      keyFeatures: t('ai.capabilities.forecasting.features', { returnObjects: true }) as string[]
    },
    {
      icon: Eye,
      title: t('ai.capabilities.quality.title'),
      desc: t('ai.capabilities.quality.desc'),
      keyFeatures: t('ai.capabilities.quality.features', { returnObjects: true }) as string[]
    },
    {
      icon: TrendingUp,
      title: t('ai.capabilities.reporting.title'),
      desc: t('ai.capabilities.reporting.desc'),
      keyFeatures: t('ai.capabilities.reporting.features', { returnObjects: true }) as string[]
    },
    {
      icon: Shield,
      title: t('ai.capabilities.verification.title'),
      desc: t('ai.capabilities.verification.desc'),
      keyFeatures: t('ai.capabilities.verification.features', { returnObjects: true }) as string[]
    },
    {
      icon: AlertTriangle,
      title: t('ai.capabilities.regulatory.title'),
      desc: t('ai.capabilities.regulatory.desc'),
      keyFeatures: t('ai.capabilities.regulatory.features', { returnObjects: true }) as string[]
    }
  ];

  return (
    <section
      id="ai"
      className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20 md:py-24 border-t border-emerald-500/10 overflow-hidden"
    >
      {/* AI-themed background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-100" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-500/15 to-indigo-500/15 rounded-full blur-3xl animate-pulse delay-500" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-pink-500/10 to-violet-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        {/* ENHANCED HEADER */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-2 mb-4">
            <Brain className="w-4 h-4 text-violet-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-400">
              {t('ai.badge')}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
            {t('ai.title1')}{" "}
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {t('ai.title2')}
            </span>
            {" "}{t('ai.title3')}
          </h2>

          <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-8 px-4">
            {t('ai.description')}
          </p>
        </div>

        {/* UNIFIED AI CAPABILITIES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {aiCapabilities.map((capability, index) => {
            const colors = [
              'from-violet-500/20 to-purple-600/20 border-violet-400/30',
              'from-purple-500/20 to-pink-600/20 border-purple-400/30',
              'from-pink-500/20 to-rose-600/20 border-pink-400/30',
              'from-blue-500/20 to-violet-600/20 border-blue-400/30',
              'from-indigo-500/20 to-purple-600/20 border-indigo-400/30',
              'from-cyan-500/20 to-violet-600/20 border-cyan-400/30'
            ];

            return (
              <div
                key={capability.title}
                className="group relative overflow-hidden rounded-3xl border border-slate-700 bg-slate-900/60 backdrop-blur-sm p-6 transition-all duration-300 hover:border-violet-400/40 hover:bg-slate-800/80"
              >
                {/* Enhanced hover effect */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${colors[index]} opacity-10`} />

                <div className="relative">
                  {/* AI icon */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${colors[index]} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <capability.icon className="w-6 h-6 text-violet-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-50 group-hover:text-violet-100 transition-colors">
                      {capability.title}
                    </h3>
                  </div>

                  <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                    {capability.desc}
                  </p>

                  {/* Key features */}
                  <div className="space-y-2">
                    {capability.keyFeatures.map((feature: string) => (
                      <div key={feature} className="flex gap-2 items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-violet-400 to-purple-400 animate-pulse" />
                        <span className="text-xs text-slate-400 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* AI PERFORMANCE METRICS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            { label: t('ai.stats.models.label'), value: t('ai.stats.models.value'), desc: t('ai.stats.models.desc') },
            { label: t('ai.stats.accuracy.label'), value: t('ai.stats.accuracy.value'), desc: t('ai.stats.accuracy.desc') },
            { label: t('ai.stats.processing.label'), value: t('ai.stats.processing.value'), desc: t('ai.stats.processing.desc') },
            { label: t('ai.stats.dataPoints.label'), value: t('ai.stats.dataPoints.value'), desc: t('ai.stats.dataPoints.desc') }
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-2xl border border-slate-800 bg-slate-900/30 group hover:border-violet-400/30 transition-colors">
              <div className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-slate-300 mb-1">{stat.label}</div>
              <div className="text-xs text-slate-500">{stat.desc}</div>
            </div>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 rounded-2xl border border-slate-700 bg-slate-900/50 px-8 py-4">
            <Brain className="w-5 h-5 text-violet-400" />
            <span className="text-sm font-medium text-slate-300">{t('ai.cta')}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
