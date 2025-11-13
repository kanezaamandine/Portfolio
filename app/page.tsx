import Image from "next/image";
import About from "./component/About";
import HeroSection from "./component/HeroSection";
import Projects from "./component/Projects";

export default function Home() {
  return (
    <div className="bg-black">
      <HeroSection/>
       <About/>
       <Projects/>
    </div>
    
    
  );
}
