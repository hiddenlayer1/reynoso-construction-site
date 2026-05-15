import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-surface px-6 text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-brand-dark">
        404
      </p>
      <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
        Page not found — Página no encontrada
      </h1>
      <p className="max-w-md text-base text-muted">
        The page you were looking for doesn't exist. Esta página no existe.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-brand-dark"
      >
        Go home / Volver al inicio
      </Link>
    </main>
  );
}
