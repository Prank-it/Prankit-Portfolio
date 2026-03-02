import Navbar from "./Navbar";

export default function NetflixLayout({ navTitle, hero, children }) {
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white">
      <Navbar title={navTitle} />

      {/* HERO */}
      <div className="pt-14">
        <div className="relative px-4 sm:px-8 py-10 sm:py-14">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-[#0b0b0b]" />
          <div className="relative max-w-4xl">
            <div className="text-[#E50914] text-xs tracking-[0.3em] mb-3">
              {hero.kicker}
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold">
              {hero.title}
            </h1>
            <p className="mt-3 text-sm sm:text-base text-gray-200 max-w-2xl">
              {hero.description}
            </p>

            <div className="mt-6 flex gap-3">
              <button className="px-4 py-2 rounded bg-white text-black font-medium hover:bg-gray-200 transition">
                Primary
              </button>
              <button className="px-4 py-2 rounded bg-white/15 text-white hover:bg-white/25 transition">
                Secondary
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ROWS */}
      <div className="pb-10">{children}</div>
    </div>
  );
}