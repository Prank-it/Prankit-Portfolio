import { useNavigate } from "react-router-dom";

export default function Profiles({ recruiterImg, developerImg, stalkerImg }) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b0b0b]">
      <div className="flex flex-col items-center">
        <h1 className="text-white font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-10 text-center">
          Who&apos;s Watching?
        </h1>

        <div className="flex gap-8 flex-wrap justify-center">
          <ProfileCard label="Recruiter" img={recruiterImg} onClick={() => navigate("/recruiter")} />
          <ProfileCard label="Developer" img={developerImg} onClick={() => navigate("/developer")} />
          <ProfileCard label="Stalker" img={stalkerImg} onClick={() => navigate("/stalker")} />
        </div>
      </div>
    </div>
  );
}

function ProfileCard({ label, img, onClick }) {
  return (
    <button type="button" onClick={onClick} className="flex flex-col items-center group">
      <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-md overflow-hidden border-2 border-transparent group-hover:border-white transition duration-300 group-hover:scale-110">
        <img src={img} alt={label} className="w-full h-full object-cover" draggable="false" />
      </div>

      <p className="mt-3 text-gray-300 text-sm sm:text-base group-hover:text-white transition">
        {label}
      </p>
    </button>
  );
}