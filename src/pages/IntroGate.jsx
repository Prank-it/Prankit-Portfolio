import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import introSound from "../assets/intro.mp3";

export default function IntroGate() {
  const text = "PRANKIT";
  const [startAnimation, setStartAnimation] = useState(false);
  const audioRef = useRef(null);
  const navigate = useNavigate();

  return (
    <div
      className="h-screen flex items-center justify-center overflow-hidden cursor-pointer bg-[#0b0b0b]"
      onClick={() => {
        if (!startAnimation) {
          setStartAnimation(true);
          audioRef.current?.play();
        }
      }}
    >
      <audio
  ref={audioRef}
  src={introSound}
  onEnded={() => setShowIntro(false)}
/>

      <motion.div
        initial={{ scale: 1, opacity: 1 }}
        animate={startAnimation ? { scale: 10, opacity: 0 } : { scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: [0.7, 0, 1, 1] }}
        
        onAnimationComplete={() => {
          if (startAnimation) navigate("/profiles");
        }}
      >
        <div className="flex items-end">
          {text.split("").map((letter, index) => {
            const middle = (text.length - 1) / 2;
            const distance = index - middle;
            const scale = 1 + 0.16 * Math.pow(distance / middle, 2);

            return (
              <span
                key={index}
                style={{
                  transform: `scaleY(${scale})`,
                  color: "#E50914",
                  fontFamily: "Anton",
                  fontSize: "clamp(2.5rem, 8vw, 4rem)",
                  margin: "0 -1px",
                }}
              >
                {letter}
              </span>
            );
          })}
        </div>
      </motion.div>
      {/* Click anywhere hint */}
<div
  className="
    absolute bottom-10 left-1/2 -translate-x-1/2
    text-xs sm:text-sm
    text-white/60
    tracking-widest
    select-none
    animate-pulse
  "
>
  Click anywhere to continue
</div>
    </div>
  );
}