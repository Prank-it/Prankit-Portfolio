import { useEffect, useState } from "react";
import CurvedText from "./CurvedText";
import { useNavigate } from "react-router-dom";

export default function Navbar({
  brand = "PRANKIT",
  menu = ["Home", "Skills", "Projects", "Hire Me"],
  avatarSrc,
}) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (m) => {
    if (m === "Home") navigate("/profiles");
    if (m === "Skills") navigate("/skills");
    if (m === "Projects") navigate("/projects");
    if (m === "Hire Me") navigate("/hire");
    setOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar */}
      <div
        className={`
          h-14 sm:h-16 px-4 sm:px-8 flex items-center justify-between
          transition-colors duration-300
          ${scrolled ? "bg-black/90" : "bg-black/40 md:bg-transparent"}
        `}
      >
        <div className="flex items-center gap-6">
          {/* Logo */}
          <div className="cursor-pointer" onClick={() => navigate("/profiles")}>
            <CurvedText
              text={brand}
              fontSize="clamp(1rem, 2.5vw, 1.4rem)"
              intensity={0.1}
            />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/90">
            {menu.map((m) => (
              <span
                key={m}
                onClick={() => handleNav(m)}
                className="hover:text-white transition cursor-pointer"
              >
                {m}
              </span>
            ))}
          </nav>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden text-white/90 hover:text-white text-xl"
            onClick={() => setOpen((v) => !v)}
          >
            ☰
          </button>

          {/* Avatar */}
          {avatarSrc ? (
            <img
              src={avatarSrc}
              alt="profile"
              className="w-8 h-8 rounded-full object-cover border border-white/20"
              draggable="false"
            />
          ) : (
            <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20" />
          )}
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div
          className={`
            md:hidden px-4 sm:px-8 pb-3 backdrop-blur
            ${scrolled ? "bg-black/90" : "bg-black/70"}
          `}
        >
          <div className="flex flex-col gap-3 text-white/90 text-sm pt-3">
            {menu.map((m) => (
              <button
                key={m}
                className="text-left hover:text-white transition"
                onClick={() => handleNav(m)}
              >
                {m}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}