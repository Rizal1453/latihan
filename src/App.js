import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import './App.css';
import Hero2 from "./components/Hero2";
import Hero3 from "./components/Hero3";
import Hero4 from "./components/Hero4";
import Hero5 from "./components/Hero5";
import Hero6 from "./components/Hero6";
import Hero7 from "./components/Hero7";
import Hero8 from "./components/Hero8";
import Section10 from "./components/Section10";
import Section11 from "./components/Section11";
import Hero9 from "./components/Hero9";

function App() {
  return (
    <div className="w-full">
      <div className="sm:px-16 px-6 flex justify-center item-center">
        <div className="lg:max-w-[1280px] w-full">
        <Navbar/>
        </div>
      </div>
      <div className="sm:px-16 px-6 flex justify-center items-center">
        <div className="lg:max-w-[1280px] w-full">
     <Hero/>
       </div>
       </div>   
     <Hero2/>
       <div className="sm:px-16 px-6 flex justify-center item-center">
        <div className="lg:max-w-[1280px] w-full">
     <Hero3/>
     </div>
       </div>
       <div className="sm:px-16 px-6 flex justify-center item-center">
        <div className="lg:max-w-[1280px] w-full">
     <Hero4/>
     </div>
       </div>
       <div className="sm:px-16 px-6 flex justify-center item-center">
        <div className="lg:max-w-[1280px] w-full">
     <Hero5/>
     </div>
       </div>
       <Hero6/>
       <div className="sm:px-16 px-6 flex justify-center item-center">
        <div className="lg:max-w-[1280px] w-full">
     <Hero7/>
     </div>
      </div>
      <div className="sm:px-16 px-6 flex justify-center item-center">
       <div className="lg:max-w-[1280px] w-full">
           <Hero8/>
        </div>
      </div>
      <div className="sm:px-16 px-6 flex justify-center item-center">
       <div className="lg:max-w-[1280px] w-full">
           <Hero9/>
        </div>
      </div>
      <div className="sm:px-16 px-6 flex justify-center item-center">
       <div className="lg:max-w-[1280px] w-full">
           <Section10/>
        </div>
      </div>
      <div className="sm:px-16 px-6 flex justify-center item-center">
       <div className="lg:max-w-[1280px] w-full">
           <Section11/>
        </div>
      </div>
    </div>
  );
}

export default App;
