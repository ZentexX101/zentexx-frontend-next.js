import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-start justify-center gap-6">
      <div className="inline-flex items-center gap-3 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-black/60">
        404
        <span className="h-1 w-1 rounded-full bg-black/40" />
        Page missing
      </div>
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
        That page drifted off course.
      </h1>
      <p className="max-w-xl text-base text-black/70 sm:text-lg">
        The link may be outdated, or the destination has been moved. Head back
        to the main space and keep exploring.
      </p>
      <div className="flex flex-wrap gap-4">
        <Link
          className="rounded-full bg-sky-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-sky-700"
          href="/"
        >
          Back to home
        </Link>
        <Link
          className="rounded-full border border-black/15 px-5 py-2 text-sm font-semibold text-black/70 transition hover:border-black/30 hover:text-black"
          href="/about"
        >
          Learn about us
        </Link>
      </div>
    </section>
  );
}
