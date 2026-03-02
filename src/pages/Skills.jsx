import Navbar from "../components/Navbar";

// optional: if you want the avatar on navbar on skills page too
import recruiterAvatar from "../assets/recruiterimg.jpeg";

export default function Skills() {
  const languages = [
    { name: "Java", desc: "Object-Oriented Programming", icon: "☕" },
    { name: "JavaScript", desc: "Programming Language", icon: "JS" },
    { name: "Python", desc: "Scripting & Automation", icon: "PY" },
    { name: "C++", desc: "Object-Oriented Programming", icon: "C++" },
     { name: "C", desc: "Programming Language", icon: "C" },
  ];

  const webTech = [
    { name: "React", desc: "Frontend Library", icon: "⚛" },
    { name: "Tailwind", desc: "Utility CSS", icon: "TW" },
    { name: "MySql", desc: "Database", icon: "SQL" },
  ];

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white">
      <Navbar brand="PRANKIT" avatarSrc={recruiterAvatar} />

      {/* padding-top so content starts below navbar */}
      <main className="px-4 sm:px-8 pt-20 pb-16">
        <Section title="Languages" items={languages} />
        <div className="h-14" />
        <Section title="Web Technologies" items={webTech} />
      </main>
    </div>
  );
}

function Section({ title, items }) {
  return (
    <div>
      <h2 className="text-2xl sm:text-3xl font-semibold text-center">
        {title}
      </h2>

      <div className="mx-auto mt-2 h-[3px] w-44 bg-[#E50914]" />

      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((it) => (
          <SkillCard key={it.name} item={it} />
        ))}
      </div>
    </div>
  );
}

function SkillCard({ item }) {
  return (
    <div
      className="
        rounded-2xl bg-white/5 border border-white/10
        px-6 py-8 text-center
        transition duration-300
        hover:border-[#E50914]/60
        hover:shadow-[0_0_25px_rgba(229,9,20,0.35)]
      "
    >
      <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-black/40 border border-white/10 text-[#E50914] font-bold">
        {item.icon}
      </div>

      <div className="text-xl font-semibold">{item.name}</div>
      <div className="mt-2 text-sm text-white/60">{item.desc}</div>
    </div>
  );
}