import Navbar from "../components/Navbar/Navbar";
import bg from '../assets/stars.png';
import bgMobile from '../assets/stars-mobile.png';
import saturn from '../assets/saturn.png';
import rocket from '../assets/emojione_rocket.png';
import meteor from "../assets/meteor.png";
import bumi from "../assets/bumi.png";
import rocketmobile from "../assets/roketmobile.png";
import satelit1 from "../assets/satelit1.png";
import satelit2 from "../assets/satelit2.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { AboutItem } from "../components/About/AboutItem";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section id="hero" className="bg-black w-[100vw] h-[100vh]">
        <img
          className="absolute lg:hidden w-full h-full object-cover bg-repeat z-0"
          src={bgMobile}
        />
        <img
          className="hidden lg:absolute w-full h-full object-cover bg-repeat z-0"
          src={bg}
        />
        <div className="px-[5%] h-[100vh]">
          <Navbar />
          <img
            src={meteor}
            alt="logo"
            className="w-24 lg:w-48 absolute right-0 -translate-x-[50%] top-16 lg:top-12"
          />
          <div className="2xl:pt-16 2xl:pb-8 lg:pt-16 lg:pb-0 md:pb-32 pt-10 pb-0  z-10">
            <div className="relative h-[300px] lg:h-[450px] 2xl:h-[500px] mt-32 lg:mt-12 2xl:mt-4">
              <div className="absolute w-full z-20">
                <img
                  src={saturn}
                  alt="saturn"
                  className="mx-auto w-80 md:w-[500px] 2xl:w-[750px]"
                />
              </div>
              <img
                src={rocket}
                alt="rocket"
                width={120}
                height={100}
                className="hidden lg:block absolute object-contain z-30 top-16 right-1/2 translate-x-[280%]"
              />
              <h1 className="font-mono font-extrabold 2xl:text-3xl lg:text-2xl absolute text-gray-300 xl:max-w-52 lg:max-w-44 top-1/2 left-1/3 -translate-x-[180%] hidden lg:block ">
                Unleash your curiosity
              </h1>
              <h1 className="font-sans font-extrabold 2xl:text-9xl md:text-8xl text-6xl absolute top-1/3 -translate-y-[180%] md:-translate-y-[120%] lg:-translate-y-[150%] 2xl:-translate-y-[80%] left-1/2 -translate-x-[70%] md:-translate-x-[80%] lg:-translate-x-[110%] 2xl:-translate-x-[120%] text-white">
                COS<span className="text-stroke-cosmic">MIC</span>
              </h1>
              <h1 className="font-sans font-extrabold 2xl:text-9xl md:text-8xl text-6xl absolute bottom-20 translate-y-[60%] md:translate-y-[190%] lg:translate-y-[20%] 2xl:translate-y-[40%] left-1/2 -translate-x-[45%] md:-translate-x-[25%] lg:translate-x-[10%] 2xl:translate-x-[25%]  text-white">
                <span className="text-stroke-wonder ">WON</span>
                DER
              </h1>
            </div>
          </div>

          <div className="bg-black text-white flex items-center justify-center gap-4 lg:gap-10 z-20">
            <div className="hidden md:flex gap-3">
              <div className="w-4 h-1 bg-white"></div>
              <div className="w-4 h-1 bg-white"></div>
              <div className="w-4 h-1 bg-white"></div>
              <div className="w-4 h-1 bg-white"></div>
              <div className=" w-16 lg:w-48 h-1 bg-white"></div>
            </div>
            <Link to={"/planet"}>
              <button className="bg-black border-[4px] border-white px-12 py-5 lg:px-12 lg:py-8 rounded-xl cursor-pointer text-lg lg:text-3xl font-semibold tracking-wide hover:bg-white hover:text-black hover:-translate-y-3 duration-300">
                Start your adventure
              </button>
            </Link>
            <div className="hidden md:flex gap-3">
              <div className=" w-16 lg:w-48 h-1 bg-white"></div>
              <div className="w-4 h-1 bg-white"></div>
              <div className="w-4 h-1 bg-white"></div>
              <div className="w-4 h-1 bg-white"></div>
              <div className="w-4 h-1 bg-white"></div>
            </div>
          </div>
          <img
            src={rocketmobile}
            alt="rokcet"
            width={180}
            className="lg:hidden absolute -bottom-8 w-40 md:w-80 left-1/2 -translate-x-1/2 z-10"
          />
          <img
            src={bumi}
            alt="bumi"
            width={100}
            className="lg:hidden absolute bottom-0 w-full"
          />
        </div>
      </section>
      <section id="about" className="bg-black relative my-12">
        <img
          className="absolute lg:hidden h-full object-fill bg-repeat z-0"
          src={bgMobile}
        />
        <img className="hidden lg:absolute" src={bg} />
        <div className="lg:px-[5%]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 lg:gap-10 items-center lg:py-36 py-20 lg:divide-x">
            {AboutItem.map((item) => (
              <div
                className="flex flex-col justify-center items-center relative"
                key={item.id}
              >
                <img
                  src={item.asset}
                  className="absolute w-24 -top-6 left-0 "
                  alt=""
                />
                <div className=" w-32 h-32 md:w-56 md:h-56 rounded-full mt-2 overflow-hidden border-2">
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <h1 className="font-semibold lg:text-2xl 2xl:text-3xl text-white pt-4 2xl:pt-12 text-center">
                  {item.nama}
                </h1>
                <div className="pt-4 2xl:pt-8 flex flex-col  gap-4 ml-12">
                  <div className="flex gap-5 items-center">
                    <FaGithub size={30} className="text-white" />
                    <p className="text-white lg:text-lg 2xl:text-xl">
                      {item.github}
                    </p>
                  </div>
                  <div className="flex gap-5 items-center">
                    <CiMail size={30} className="text-white" />
                    <p className="text-white lg:text-lg 2xl:text-xl">
                      {item.email}
                    </p>
                  </div>
                  <div className="flex gap-5 items-center">
                    <FaLinkedin size={30} className="text-white" />
                    <p className="text-white lg:text-lg 2xl:text-xl">
                      {item.linkedin}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
