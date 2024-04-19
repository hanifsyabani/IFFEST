import Navbar from "../components/Navbar/Navbar"
import bg from '../assets/stars.png'
import saturn from '../assets/saturn.png'
import rocket from '../assets/emojione_rocket.png'
import meteor from "../assets/meteor.png";
import bumi from "../assets/bumi.png";
import rocketmobile from "../assets/roketmobile.png";
import line from "../assets/line.png";
import line2 from "../assets/line2.png";

export default function Home() {
  return (
    <div className="bg-gradient-to-b lg:px-[5%] from-primary to-secondary h-screen overflow-y-hidden relative">
      <Navbar />
      <div
        className="bg-cover lg:bg-center w-full h-full"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <img
          src={meteor}
          alt="logo"
          width={500}
          height={500}
          className="lg:w-28 w-20 absolute lg:right-[20%] right-[10%] lg:top-10 top-20"
        />
        <div className="z-10">
          <img
            src={saturn}
            alt="saturn"
            className="absolute lg:top-[45%] top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-80 z-20"
          />
          <img
            src={rocket}
            alt="rocket"
            width={120}
            height={100}
            className="hidden lg:block absolute object-contain z-30 top-[30%] right-[27%] -translate-x-1/2 -translate-y-1/2"
          />
          <h1 className="font-mono font-extrabold 2xl:text-3xl lg:text-2xl absolute text-gray-300 xl:max-w-52 lg:max-w-44 top-1/2 left-44 hidden lg:block ">
            Unleash your curiosity
          </h1>
          <h1 className="font-sans font-extrabold lg:text-8xl sm:text-7xl absolute 2xl:top-64 lg:top-56 top-[25%] text-5xl lg:left-[23rem] sm:left-52 left-32 -translate-x-1/2 -translate-y-1/2 text-white">
            COS<span className="text-stroke-cosmic">MIC</span>
          </h1>
          <h1 className="font-sans font-extrabold lg:text-8xl sm:text-7xl text-5xl absolute 2xl:bottom-56 lg:bottom-44 lg:left-[71%] sm:left-[70%] bottom-[43%] left-[60%] -translate-x-1/2 -translate-y-1/2 text-white">
            <span className="text-stroke-wonder ">WON</span>
            DER
          </h1>
        </div>
        <div></div>
        <div className=" absolute lg:bottom-0 z-10 text-white lg:w-[70%] w-full font-mono font-bold text-lg -translate-x-1/2 -translate-y-1/2 left-1/2  text-center bottom-48 lg:flex items-center justify-center gap-5" >
          <img src={line} alt="line" width={400} className="hidden lg:block" />
          <button className="bg-black border-2 border-white lg:px-3 py-4 rounded-xl w-[70%] cursor-pointer">Start your adventure</button>
          <img src={line2} alt="line" width={400} className="hidden lg:block" />
        </div>
        <img
          src={rocketmobile}
          alt="rokcet"
          width={180}
          className="lg:hidden absolute bottom-0 left-20 z-10 "
        />
        <img
          src={bumi}
          alt="bumi"
          width={100}
          className="lg:hidden absolute bottom-0 w-full"
        />
      </div>
    </div>
  );
}
