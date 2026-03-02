import { Routes, Route } from "react-router-dom";

import recruiterImg from "./assets/recruiterimg.jpeg";
import developerImg from "./assets/developerimg.jpeg";
import stalkerImg from "./assets/stalkerimg.jpeg";

import IntroGate from "./pages/IntroGate";
import Profiles from "./pages/Profiles";

import Recruiter from "./pages/Recruiter";
import Developer from "./pages/Developer";
import Stalker from "./pages/stalker";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Certifications from "./pages/certifications";
import HireMe from "./pages/HireMe";
import Status from "./pages/Status";
import Interests from "./pages/Interests";





export default function App() {
  return (
    <Routes>
      <Route path="/" element={<IntroGate />} />
      <Route
        path="/profiles"
        element={
          <Profiles
            recruiterImg={recruiterImg}
            developerImg={developerImg}
            stalkerImg={stalkerImg}
          />
        }
      />
      <Route path="/recruiter" element={<Recruiter />} />
      <Route path="/developer" element={<Developer />} />
      <Route path="/stalker" element={<Stalker />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/certifications" element={<Certifications />} />
      <Route path="/hire" element={<HireMe />} />
      <Route path="/status" element={<Status />} />
      <Route path="/interests" element={<Interests />} />
    </Routes>
  );
}