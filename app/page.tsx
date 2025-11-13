import Image from "next/image";
import About from "./component/About";
import HeroSection from "./component/HeroSection";
import Projects from "./component/Projects";
import Clients from "./component/clients";
import CallToAction from "./component/callToAction";
import Skills from "./component/Skills";
import Education from "./component/education";

export default function Home() {
  return (
    <div className="bg-black">
      <HeroSection/>
       <About/>
       <Projects/>
       <Clients/>
       <CallToAction/>
       <Skills/>
       <Education/>    
       </div>
    
    
  );
}
