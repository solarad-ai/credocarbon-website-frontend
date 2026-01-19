import { Button } from "../ui/Button";
import { useTranslation } from "react-i18next";

export default function CallToAction() {
  const { t } = useTranslation('home');

  return (
    <section className="relative overflow-hidden bg-slate-950 py-16 md:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(45,212,191,0.3),_transparent_55%)]" />
      <div className="relative mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-50">
          {t('callToAction.title')}
        </h2>
        <p className="mt-4 text-sm md:text-base text-slate-400">
          {t('callToAction.description')}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button
            className="bg-emerald-400 text-[13px] font-extrabold text-slate-950 hover:bg-emerald-300"
            onClick={() =>
              window.open(
                "https://calendly.com/credocarbon-info/credocarbon-connect?month=2026-01",
                "_blank"
              )
            }
          >
            {t('callToAction.bookCall')}
          </Button>
          <a
            href="https://dashboard.credocarbon.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" className="text-[13px] font-semibold">
              {t('callToAction.exploreWalkthrough')}
            </Button>
          </a>

        </div>
      </div>
    </section>
  );
}