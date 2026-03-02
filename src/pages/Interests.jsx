import Navbar from "../components/Navbar";
import avatar from "../assets/recruiterimg.jpeg";

export default function Interests() {
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white">
      <Navbar brand="PRANKIT" avatarSrc={avatar} />

      <main className="pt-20 pb-16 px-4 sm:px-8 max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-10">
          Interests
        </h1>

        <div className="space-y-8">
          <Block title="Quiet Places">
            I’m drawn to quiet places — rooms where nothing demands attention,
            where the noise fades and thoughts finally slow down.
          </Block>

          <Block title="Comfortable Silences">
            I value silences that don’t feel awkward.
            The kind where presence matters more than words.
          </Block>

          <Block title="Voice, Books & Observation">
            Sometimes a vocalist, sometimes just listening.
            A reader when curiosity wins.
            Mostly an observer — watching patterns, people, and moments
            before deciding what they mean.
          </Block>

          <Block title="In Short">
            I enjoy depth over noise,
            clarity over chaos,
            and learning without announcing it.
          </Block>
        </div>
      </main>
    </div>
  );
}

function Block({ title, children }) {
  return (
    <div className="rounded-xl bg-white/5 border border-white/10 p-6 sm:p-8">
      <h2 className="text-lg sm:text-xl font-semibold mb-3 text-[#E50914]">
        {title}
      </h2>
      <p className="text-white/80 leading-relaxed">
        {children}
      </p>
    </div>
  );
}