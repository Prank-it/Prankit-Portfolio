import Navbar from "../components/Navbar";
import avatar from "../assets/recruiterimg.jpeg"; // optional

export default function Certifications() {
  // ✅ replace links with your real HackerRank certificate URLs
  const certs = [
    {
      title: "Java (Basic)",
      org: "HackerRank",
      iconText: "J",
      link: "https://www.hackerrank.com/certificates/9cd57592c312",
    },
    {
      title: "Problem Solving (Basic)",
      org: "HackerRank",
      iconText: "PS",
      link: "https://www.hackerrank.com/certificates/0be3d04e75b6",
    },
    {
      title: "Problem Solving (Intermediate)",
      org: "HackerRank",
      iconText: "PS",
      link: "https://www.hackerrank.com/certificates/146f19155910",
    },
    {
      title: "SQL (Basic)",
      org: "HackerRank",
      iconText: "SQL",
      link: "https://www.hackerrank.com/certificates/99d90a0a81cb",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white">
      <Navbar brand="PRANKIT" avatarSrc={avatar} />

      <main className="pt-20 pb-12 px-4 sm:px-8">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-8">
          Certifications
        </h1>

        {/* Mobile: 2 cols | Desktop: 3 cols */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
          {certs.map((c) => (
            <CertCard key={c.title} c={c} />
          ))}
        </div>
      </main>
    </div>
  );
}

function CertCard({ c }) {
  return (
    <a
      href={c.link}
      target="_blank"
      rel="noreferrer"
      className="
        group relative
        rounded-2xl overflow-hidden
        bg-[#121212] border border-white/10
        p-5 sm:p-7
        min-h-[170px] sm:min-h-[220px]
        transition-all duration-300
        hover:-translate-y-2
        hover:border-[#E50914]/60
        hover:shadow-[0_0_35px_rgba(229,9,20,0.35)]
      "
    >
      {/* Make the whole card a column */}
      <div className="h-full flex flex-col">
        {/* Top row */}
        <div className="flex items-start justify-between">
          <div
            className="
              h-11 w-11 rounded-full
              bg-[#0f1a2b] border border-[#2a4b7a]
              flex items-center justify-center
              text-[#6aa7ff] font-bold text-sm
              shrink-0
            "
          >
            {c.iconText}
          </div>

          <ExternalIcon />
        </div>

        {/* Title */}
        <h2 className="mt-5 text-base sm:text-xl font-semibold leading-snug">
          {c.title}
        </h2>

        {/* Org pinned to bottom */}
        <p className="mt-auto pt-6 text-sm sm:text-base text-white/70">
          {c.org}
        </p>
      </div>

      {/* bottom accent only on hover */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] bg-[#E50914] opacity-0 group-hover:opacity-100 transition" />
    </a>
  );
}
function ExternalIcon() {
  return (
    <div
      className="
        h-10 w-10 flex items-center justify-center
        rounded-lg
        border border-[#E50914]/40
        text-[#E50914]
        opacity-90 group-hover:opacity-100
        transition
      "
      aria-hidden="true"
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 3h7v7" />
        <path d="M10 14L21 3" />
        <path d="M21 14v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
      </svg>
    </div>
  );
}