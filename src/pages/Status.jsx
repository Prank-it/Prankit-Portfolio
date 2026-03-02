import Navbar from "../components/Navbar";
import avatar from "../assets/recruiterimg.jpeg";

export default function Status() {
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white">
      <Navbar brand="PRANKIT" avatarSrc={avatar} />

      <main className="pt-20 pb-16 px-4 sm:px-8 max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-10">
          Current Status
        </h1>

        <div className="space-y-10">
          {/* What I'm learning */}
          <Section title="Currently Learning">
            <ul className="list-disc list-inside space-y-2 text-white/80">
              <li>Backend Technologies (Node.js, APIs, Databases)</li>
              <li>Open Source Contribution & GitHub workflows</li>
              <li>Object-Oriented Programming (deepening fundamentals)</li>
            </ul>
          </Section>

          {/* Future goals */}
          <Section title="Future Goals">
            <ul className="list-disc list-inside space-y-2 text-white/80">
              <li>Build scalable full-stack applications</li>
              <li>Contribute consistently to meaningful open-source projects</li>
              <li>Crack a solid backend / full-stack developer role</li>
            </ul>
          </Section>

          {/* Fun section */}
          <Section title="Current Location (Probably)">
            <p className="text-white/80 leading-relaxed">
              Probably burning my head out at the back of my college class,
              <br className="hidden sm:block" />
              or sitting in a silent-ass PG room wondering why the API
              response is still returning <code className="text-[#E50914]">500</code>.
            </p>
          </Section>
        </div>
      </main>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="rounded-xl bg-white/5 border border-white/10 p-6 sm:p-8">
      <h2 className="text-lg sm:text-xl font-semibold mb-4 text-[#E50914]">
        {title}
      </h2>
      {children}
    </div>
  );
}