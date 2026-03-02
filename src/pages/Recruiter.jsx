import Navbar from "../components/Navbar";
import Row from "../components/Row"; // use your existing Netflix rows component
import heroVideo from "../assets/recruiterHero.mp4";
import { useNavigate } from "react-router-dom";
import skillsImg from "../assets/skills.jpeg";
import projectsImg from "../assets/projects.jpeg";
import certificationsImg from "../assets/certifications.jpeg";
import contactImg from "../assets/contact.jpeg";
import leetcodeImg from "../assets/leetcode.jpeg";
import githubImg from "../assets/github.jpeg";
import avatar from "../assets/developerimg.jpeg";


// OPTIONAL: reuse one of your profile images as avatar
import recruiterAvatar from "../assets/recruiterimg.jpeg";

export default function Recruiter() {
    const navigate = useNavigate();
 const topPicks = [
  {
    title: "Skills",
    subtitle: "Tech stack overview",
    image: skillsImg,
    onClick: () => navigate("/skills"),
  },
  {
  title: "Projects",
  subtitle: "Featured work",
  image: projectsImg,
  onClick: () => navigate("/projects"),
},
  {
  title: "Certifications",
  subtitle: "HackerRank badges",
  image: certificationsImg,
  onClick: () => navigate("/certifications"),
},
];

  const continueWatching = [
    {
  title: "LeetCode",
  subtitle: "DSA & Problem Solving",
  image: leetcodeImg,
  onClick: () =>
    window.open(
      "https://leetcode.com/u/Prankit03/",
      "_blank"
    ),
},
 {
  title: "Github",
  subtitle: "Projects and Developtment",
  image: githubImg,
  onClick: () =>
    window.open(
      "https://github.com/Prank-it",
      "_blank"
    ),
},
    {
  title: "Contact Me",
  subtitle: "Let’s talk",
  image: contactImg,
  onClick: () => navigate("/hire"),
}

  ];

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white">
      <Navbar brand="PRANKIT" avatarSrc={recruiterAvatar} />

      {/* HERO */}
      <section className="relative">
        <div className="relative h-[72vh] min-h-[520px] w-full overflow-hidden">
          {/* Background Video */}
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src={heroVideo}
            autoPlay
            muted
            loop
            playsInline
          />

          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-black/55" />

          {/* Netflix-style bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#0b0b0b]" />

          {/* Hero Content */}
          <div className="relative z-10 h-full flex items-center pt-14 sm:pt-16">
            <div className="px-4 sm:px-8 max-w-5xl">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold leading-tight">
                Prankit Srivastava
              </h1>

              <p className="mt-4 text-sm sm:text-base md:text-lg text-white/90 max-w-3xl">
                A B.Tech first-year student driven by curiosity and code.

I’m currently focused on DSA, Object-Oriented Programming, and Web Development, with a growing interest in competitive programming to strengthen my problem-solving mindset.

I believe in learning by doing — turning ideas into projects and challenges into opportunities to grow.
              </p>

              {/* Buttons */}
              <div className="mt-6 flex flex-wrap gap-3">
                <a
  href="https://drive.google.com/file/d/1CJKkHibH00Cv8nv8Bwd6Kr4-Gg1oyUfK/view?usp=drive_link"          // OR Google Drive link
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 px-5 py-2.5 rounded 
             bg-white text-black font-semibold hover:bg-gray-200 transition"
>
  ▶ Resume
</a>
               

                <a
  href="https://www.linkedin.com/in/prankit-srivastava-2a5634389/"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 px-5 py-2.5 rounded 
             bg-white/20 text-white font-semibold hover:bg-white/30 transition"
>
  ⓘ LinkedIn
</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROWS (Netflix style) */}
      <div className="pb-10">
        <Row title="Today's Top Picks for recruiter" items={topPicks} />
        <Row title="Continue Watching for recruiter" items={continueWatching} />
      </div>
    </div>
  );
}