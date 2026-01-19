import { Quote } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Trust() {
  const { t } = useTranslation('home');

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-slate-50 to-slate-100 py-20 md:py-28">
      {/* ✅ Indigo contrast edge (not black/green) */}
      <div className="absolute inset-y-0 right-0 w-[38%] bg-gradient-to-l from-indigo-950 via-indigo-900/70 to-transparent rtl:right-auto rtl:left-0 rtl:bg-gradient-to-r" />

      {/* ✅ Controlled ambient energy (blue + violet only) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-24 top-12 h-64 w-64 rounded-full bg-sky-400/20 blur-3xl rtl:left-auto rtl:right-24" />
        <div className="absolute right-40 bottom-10 h-72 w-72 rounded-full bg-indigo-400/20 blur-3xl rtl:right-auto rtl:left-40" />
        <div className="absolute left-1/3 bottom-24 h-64 w-64 rounded-full bg-violet-400/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT: Context */}
        <div>
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.32em] text-indigo-700 mb-4">
            {t('trust.badge')}
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            {t('trust.title1')}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-sky-500 to-cyan-500">
              {t('trust.title2')}
            </span>
          </h2>

          <p className="mt-6 text-sm md:text-base text-slate-600 max-w-xl leading-relaxed">
            {t('trust.description')}
          </p>
        </div>

        {/* ✅ RIGHT: Indigo glass quote slab */}
        <div className="relative rounded-[2.5rem] bg-indigo-950/90 p-8 md:p-10 border border-sky-400/30 shadow-[0_0_45px_rgba(56,189,248,0.25)]">
          {/* ✅ Electric blue quote mark */}
          <div className="absolute -top-6 -left-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 via-indigo-400 to-violet-500 shadow-lg shadow-sky-500/40 rtl:-left-auto rtl:-right-6">
            <Quote className="h-6 w-6 text-indigo-950" />
          </div>

          <p className="text-sm md:text-base text-slate-200 leading-relaxed">
            {t('trust.quote')}
          </p>

          {/* ✅ Clean signal divider */}
          <div className="mt-6 h-px w-24 bg-gradient-to-r from-sky-400 via-indigo-400 to-violet-400" />

          <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-sky-300">
            {t('trust.role')}
          </p>
          <p className="text-xs text-indigo-200/70">
            {t('trust.company')}
          </p>
        </div>
      </div>
    </section>
  );
}
