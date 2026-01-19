// src/components/sections/SecurityAudit.tsx

import {
  ShieldCheck,
  Lock,
  KeyRound,
  FileCheck2,
  CheckCircle2,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export default function SecurityAudit() {
  const { t } = useTranslation('vvb');

  const blocks = [
    {
      title: t('security.blocks.fileVerification.title'),
      desc: t('security.blocks.fileVerification.desc'),
      items: t('security.blocks.fileVerification.items', { returnObjects: true }) as string[],
      icon: ShieldCheck,
      gradient: "from-indigo-500 to-purple-500",
      glowColor: "rgba(99, 102, 241, 0.4)",
    },
    {
      title: t('security.blocks.accessPermissions.title'),
      desc: t('security.blocks.accessPermissions.desc'),
      items: t('security.blocks.accessPermissions.items', { returnObjects: true }) as string[],
      icon: Lock,
      gradient: "from-purple-500 to-pink-500",
      glowColor: "rgba(168, 85, 247, 0.4)",
    },
    {
      title: t('security.blocks.activityLogging.title'),
      desc: t('security.blocks.activityLogging.desc'),
      items: t('security.blocks.activityLogging.items', { returnObjects: true }) as string[],
      icon: FileCheck2,
      gradient: "from-cyan-500 to-blue-500",
      glowColor: "rgba(6, 182, 212, 0.4)",
    },
    {
      title: t('security.blocks.finalApproval.title'),
      desc: t('security.blocks.finalApproval.desc'),
      items: t('security.blocks.finalApproval.items', { returnObjects: true }) as string[],
      icon: KeyRound,
      gradient: "from-emerald-500 to-teal-500",
      glowColor: "rgba(16, 185, 129, 0.4)",
    },
  ];

  return (
    <section
      id="security"
      className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-20 md:py-32 border-t border-indigo-500/10"
    >
      {/* Enhanced Background Elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.15),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(168,85,247,0.1),transparent_50%)]" />
        <div className="absolute left-0 top-32 w-96 h-96 rounded-full bg-indigo-500/10 blur-[120px] animate-pulse" />
        <div className="absolute right-0 bottom-32 w-96 h-96 rounded-full bg-purple-500/10 blur-[120px] animate-pulse delay-1000" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-500/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 backdrop-blur-sm px-4 py-2 mb-6">
            <ShieldCheck className="w-4 h-4 text-indigo-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-300">
              {t('security.badge')}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-50 mb-6 leading-tight">
            {t('security.title1')}{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {t('security.title2')}
            </span>
          </h2>

          <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
            {t('security.description')}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {blocks.map((block, index) => (
            <SecurityCard key={block.title} block={block} index={index} />
          ))}
        </div>

        {/* Bottom Trust Indicator */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-sm text-slate-400">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>{t('security.compliance')}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

interface BlockType {
  title: string;
  desc: string;
  items: string[];
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
  glowColor: string;
}

function SecurityCard({ block, index }: { block: BlockType; index: number }) {
  const Icon = block.icon;

  return (
    <div
      className="group relative rounded-3xl border border-slate-800/50 bg-slate-900/40 backdrop-blur-xl p-8 transition-all duration-500 hover:border-slate-700 hover:-translate-y-1"
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      {/* Glow Effect on Hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500 blur-xl -z-10"
        style={{
          background: `radial-gradient(circle at center, ${block.glowColor}, transparent 70%)`,
        }}
      />

      {/* Gradient Overlay on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br from-white to-transparent transition-opacity duration-500 rounded-3xl pointer-events-none" />

      <div className="relative flex flex-col h-full">
        {/* Icon Container */}
        <div className="mb-6">
          <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${block.gradient} shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
            <Icon className="h-7 w-7 text-white" />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-xl font-bold text-slate-50 mb-3 group-hover:text-white transition-colors">
            {block.title}
          </h3>

          <p className="text-sm text-slate-400 leading-relaxed mb-6">
            {block.desc}
          </p>

          {/* Feature List */}
          <ul className="space-y-3">
            {block.items.map((item: string, idx: number) => (
              <li
                key={idx}
                className="flex gap-3 text-sm text-slate-300 group/item"
                style={{
                  animationDelay: `${(index * 100) + (idx * 50)}ms`,
                }}
              >
                <span className={`mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r ${block.gradient} flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300`} />
                <span className="leading-relaxed group-hover:text-slate-200 transition-colors">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Accent Line */}
        <div className={`mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r ${block.gradient} rounded-full transition-all duration-700`} />
      </div>
    </div>
  );
}
