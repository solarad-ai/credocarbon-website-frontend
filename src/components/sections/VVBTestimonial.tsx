import { Award, Quote } from "lucide-react";

export default function VVBTestimonial() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 py-24 md:py-32">
            {/* Enhanced contrast edge */}
            <div className="absolute inset-y-0 right-0 w-[40%] bg-gradient-to-l from-indigo-950 via-indigo-900/80 to-transparent" />

            {/* Refined ambient energy */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-24 top-16 h-80 w-80 rounded-full bg-sky-400/15 blur-[100px]" />
                <div className="absolute right-40 bottom-16 h-96 w-96 rounded-full bg-indigo-400/15 blur-[100px]" />
                <div className="absolute left-1/3 bottom-32 h-80 w-80 rounded-full bg-violet-400/10 blur-[100px]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8 grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                {/* LEFT: Context */}
                <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 rounded-full border border-indigo-600/30 bg-indigo-500/10 px-4 py-2">
                        <Award className="w-4 h-4 text-indigo-600" />
                        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-700">
                            Verification Excellence
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                        Streamline your{" "}
                        <span className="block bg-gradient-to-r from-indigo-600 via-sky-500 to-cyan-500 bg-clip-text text-transparent">
                            verification workflow
                        </span>
                    </h2>

                    <p className="text-base md:text-lg text-slate-600 max-w-xl leading-relaxed">
                        From project intake to final certification, manage the entire verification
                        lifecycle in one platform — with complete evidence tracking and compliance built in.
                    </p>
                </div>

                {/* RIGHT: Enhanced testimonial card */}
                <div className="group relative">
                    {/* Glow effect */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-sky-400/30 via-indigo-400/30 to-violet-500/30 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative rounded-[2.5rem] bg-gradient-to-br from-indigo-950 to-indigo-900 p-8 md:p-10 border border-sky-400/30 shadow-[0_0_60px_rgba(56,189,248,0.2)] hover:shadow-[0_0_80px_rgba(56,189,248,0.3)] transition-all duration-500">
                        {/* Quote icon */}
                        <Quote className="absolute top-6 right-6 w-12 h-12 text-indigo-700/30" />

                        {/* Award badge */}
                        <div className="absolute -top-6 -left-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 via-indigo-400 to-violet-500 shadow-xl shadow-sky-500/50 group-hover:scale-110 transition-transform duration-300">
                            <Award className="h-7 w-7 text-white" />
                        </div>

                        <div className="relative pt-4">
                            <p className="text-base md:text-lg text-slate-100 leading-relaxed mb-8">
                                "We've cut our verification cycle time in half. Everything we need —
                                project documentation, monitoring data, validation reports — is
                                organized and traceable. No more chasing developers for missing files."
                            </p>

                            {/* Elegant divider */}
                            <div className="h-px w-32 bg-gradient-to-r from-sky-400 via-indigo-400 to-violet-400 mb-6" />

                            <div className="space-y-1">
                                <p className="text-sm font-bold uppercase tracking-wide text-sky-300">
                                    Lead Verifier
                                </p>
                                <p className="text-sm text-indigo-200/70">
                                    Independent Validation Body
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
