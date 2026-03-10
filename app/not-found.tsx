import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-light text-navy mb-4">404</h1>
        <p className="text-xl text-navy/60 mb-8">Page not found.</p>
        <Link
          href="/"
          className="text-orange hover:text-orange/80 font-medium transition-colors"
        >
          ← Back to Feeshnet
        </Link>
      </div>
    </div>
  );
}
