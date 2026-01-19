// src/components/sections/EvidenceRoom.tsx

import { FileText, GitBranch, Link, MessageCircle, Package } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function EvidenceRoom() {
  const { t } = useTranslation('platform');

  const capabilities = [
    {
      icon: FileText,
      title: t('evidence.features.document.title'),
      desc: t('evidence.features.document.desc'),
      highlight: t('evidence.features.document.highlight')
    },
    {
      icon: GitBranch,
      title: t('evidence.features.version.title'),
      desc: t('evidence.features.version.desc'),
      highlight: t('evidence.features.version.highlight')
    },
    {
      icon: Link,
      title: t('evidence.features.linking.title'),
      desc: t('evidence.features.linking.desc'),
      highlight: t('evidence.features.linking.highlight')
    },
    {
      icon: MessageCircle,
      title: t('evidence.features.comments.title'),
      desc: t('evidence.features.comments.desc'),
      highlight: t('evidence.features.comments.highlight')
    },
    {
      icon: Package,
      title: t('evidence.features.export.title'),
      desc: t('evidence.features.export.desc'),
      highlight: t('evidence.features.export.highlight')
    }
  ];

  return (
    <section
      id="evidence"
      className="relative bg-gradient-to-b from-slate-950 to-slate-900 py-20 md:py-24 border-t border-emerald-500/10"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 mb-4">
            <FileText className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-400">
              {t('evidence.badge')}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
            {t('evidence.title1')}{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">{t('evidence.title2')}</span>
          </h2>

          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            {t('evidence.description')}
          </p>
        </div>

        {/* Hexagonal grid layout */}
        <div className="relative max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <div
                key={capability.title}
                className={`group relative ${index === 2 ? 'md:col-start-2' : ''} ${index >= 3 ? 'md:col-span-1' : ''}`}
              >
                <div className="relative overflow-hidden rounded-2xl border border-emerald-500/20 bg-slate-900/60 backdrop-blur-sm p-6 h-full transition-all duration-500 hover:border-emerald-400/50 hover:bg-slate-800/80 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(16,185,129,0.25)]">
                  {/* Animated background */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-emerald-500/10 via-transparent to-teal-500/10" />

                  <div className="relative text-center">
                    {/* Icon */}
                    <div className="relative mb-4 mx-auto">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-600/20 border border-emerald-400/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <capability.icon className="w-7 h-7 text-emerald-400" />
                      </div>
                      <div className="absolute inset-0 w-14 h-14 rounded-2xl bg-emerald-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <h3 className="text-lg font-bold text-slate-50 mb-2 group-hover:text-emerald-100 transition-colors">
                      {capability.title}
                    </h3>

                    <p className="text-sm text-slate-400 mb-4 leading-relaxed group-hover:text-slate-300 transition-colors">
                      {capability.desc}
                    </p>

                    {/* Highlight */}
                    <div className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 px-3 py-1">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50" />
                      <span className="text-xs font-medium text-emerald-300">
                        {capability.highlight}
                      </span>
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r from-emerald-400 to-teal-400 transition-all duration-700" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
