import Navbar from "../components/Navbar";
import avatar from "../assets/recruiterimg.jpeg";
import profilePic from "../assets/recruiterimg.jpeg";

export default function HireMe() {
  
  const linkedInUrl = "https://www.linkedin.com/in/prankit-srivastava-2a5634389/";
  const email = "prankitsrivastava03@gmail.com";
  const phone = "+91 9336330004";

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white">
      <Navbar brand="PRANKIT" avatarSrc={avatar} />

      <main className="pt-24 pb-16 px-4 sm:px-8">
        {/* Profile Card */}
        <div className="mx-auto w-full max-w-3xl rounded-2xl bg-white/5 border border-white/10 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
            {/* left: image */}
            <img
              src={profilePic}
              alt="profile"
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border border-white/10"
              draggable="false"
            />

            {/* right: text */}
            <div className="flex-1">
              <h2 className="text-xl sm:text-2xl font-semibold leading-tight">
                Prankit Srivastava
              </h2>
              <p className="text-white/70 mt-1">CSE UNDERGRADUATE</p>

              <p className="text-white/75 mt-4 leading-relaxed text-sm sm:text-base">
                I’m a first-year B.Tech student actively building my foundation in DSA, OOPs, and modern web development. I enjoy learning by building real projects and improving them through feedback. I’m currently looking for opportunities to learn, contribute, and grow as a developer through internships, freelance work, or collaborations.

              <p className="text-white/50 mt-5 text-sm">
                Noida, India
              </p>

              {/* LinkedIn button */}
              <div className="mt-6">
                <a
                  href={linkedInUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex items-center gap-2
                    bg-[#0A66C2] hover:bg-[#0A66C2]/90
                    px-5 py-3 rounded-lg
                    font-semibold
                    transition
                  "
                >
                  <span className="text-white font-bold">in</span>
                  View Profile
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Middle text */}
        <p className="mt-10 text-center text-lg sm:text-xl text-white/85">
          I'm always up for a chat or a coffee! Feel free to reach out.
        </p>

        {/* Contact pills */}
        <div className="mt-10 flex flex-col items-center gap-6">
          <a
            href={`mailto:${email}`}
            className="
              w-full max-w-md
              flex items-center justify-center gap-3
              rounded-full bg-white/5 border border-white/10
              px-6 py-4
              hover:border-[#E50914]/60 hover:shadow-[0_0_25px_rgba(229,9,20,0.25)]
              transition
            "
          >
            <span className="text-[#E50914] text-xl">✉</span>
            <span className="text-white/90">{email}</span>
          </a>

          <a
            href={`tel:${phone.replace(/\s/g, "")}`}
            className="
              w-full max-w-md
              flex items-center justify-center gap-3
              rounded-full bg-white/5 border border-white/10
              px-6 py-4
              hover:border-[#E50914]/60 hover:shadow-[0_0_25px_rgba(229,9,20,0.25)]
              transition
            "
          >
            <span className="text-[#E50914] text-xl">📞</span>
            <span className="text-white/90">{phone}</span>
          </a>
        </div>

        {/* Footer line */}
        <div className="mt-16 text-center text-white/80 text-lg sm:text-xl">
          Or catch up over a coffee <span className="ml-2">☕</span>{" "}
          <span className="ml-2">🍵</span>
        </div>
      </main>
    </div>
  );
}