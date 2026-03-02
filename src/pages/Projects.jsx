import Navbar from "../components/Navbar";
import avatar from "../assets/recruiterimg.jpeg"; // or any profile image

// ✅ put these images in src/assets/projects/ (or adjust paths)
import tttImg from "../assets/projects/tic-tac-toe.jpg";
import rpsImg from "../assets/projects/rock-paper-scissors.jpg";
import currencyImg from "../assets/projects/currency-converter.jpg";
import amazonImg from "../assets/projects/amazon-ui.jpg";

export default function Projects() {
  const projects = [
    {
      title: "Tic-Tac-Toe",
      desc: "Classic Tic-Tac-Toe game built with clean UI and game logic.",
      image: tttImg,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Prank-it/Tic-Tac-Toe",
    },
    {
      title: "Rock Paper Scissors",
      desc: "Fun rock-paper-scissors with score tracking and smooth interactions.",
      image: rpsImg,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Prank-it/Rock-Paper-Scissors",
    },
    {
      title: "Currency Converter",
      desc: "Convert currencies with live rates (API) and clean UX.",
      image: currencyImg,
      tags: ["React", "API", "Tailwind"],
      github: "https://github.com/Prank-it/Currency-Converter",
    },
    {
      title: "Responsive Content Reading Website",
      desc: "A responsive website for reading liturature",
      image: amazonImg,
      tags: ["React", "CSS", "UI","Flask"],
      github: "https://github.com/Prank-it/poem-shelff",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white">
      <Navbar brand="PRANKIT" avatarSrc={avatar} />

      {/* spacing below navbar */}
      <div className="pt-20 pb-12 px-4 sm:px-8">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-8">
          Projects
        </h1>

        {/* 3-up like screenshot on desktop, 1/2 on smaller */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ p }) {
  return (
    <div
      className="
        group rounded-2xl bg-white/5 border border-white/10 overflow-hidden
        transition-all duration-300
        hover:-translate-y-2
        hover:border-[#E50914]/60
        hover:shadow-[0_0_30px_rgba(229,9,20,0.35)]
      "
    >
      {/* image */}
      <div className="relative overflow-hidden">
        <img
          src={p.image}
          alt={p.title}
          draggable="false"
          className="
            w-full aspect-[16/9] object-cover
            transition-transform duration-500
            group-hover:scale-105
          "
        />
        {/* red bottom line */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#E50914]" />
      </div>

      {/* content */}
      <div className="p-6">
        <h2 className="text-[#E50914] text-xl sm:text-2xl font-semibold">
          {p.title}
        </h2>

        <p className="mt-3 text-sm sm:text-base text-white/80 leading-relaxed">
          {p.desc}
        </p>

        {/* tags */}
        <div className="mt-5 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span
              key={t}
              className="
                px-3 py-1 rounded-full
                bg-black/40 border border-white/10
                text-xs text-white/80
              "
            >
              {t}
            </span>
          ))}
        </div>

        {/* GitHub button */}
        <div className="mt-6">
          <a
            href={p.github}
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex items-center justify-center
              px-4 py-2 rounded
              bg-white/10 hover:bg-white/20
              border border-white/10
              transition text-sm
            "
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}