import ButtonGradient from "@/assets/svg/ButtonGradient";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import RoadMap from "./components/RoadMap";
import Footer from "./components/Footer";

export default function Home() {
  return (

    <> 


    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
    <Header/>
  </div>

  <ButtonGradient/>
  <Hero/>
  <Benefits/>
  <Collaboration/>
  <Services/>
  <Pricing/>
  <RoadMap/>
  <Footer/>
 



  
  </>
   
  );
}
