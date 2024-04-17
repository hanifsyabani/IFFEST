import Navbar from "../components/Navbar/Navbar"
import bg from '../assets/stars.png'
import saturn from '../assets/saturn.png'
import rocket from '../assets/emojione_rocket.png'

export default function Home() {
  return (
    <div className="bg-gradient-to-b px-[5%] from-primary to-black to-80% h-screen overflow-y-hidden relative">
      <Navbar />
      <img
        src={bg}
        alt="background"
        className="mx-auto w-full pt-6 h-full -z-10"
      />
      <div className="z-10">
        <div>
          <img
            src={saturn}
            alt="saturn"
            className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 z-20"
          />
          <img
            src={rocket}
            alt="rocket"
            width={120}
            height={100}
            className="absolute object-contain z-30 top-[30%] right-[27%] -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        <h1 className="font-mono font-extrabold 2xl:text-3xl lg:text-2xl absolute text-gray-300 xl:max-w-52 lg:max-w-44 top-1/2 left-44 ">
          Unleash your curiosity
        </h1>
        <h1 className="font-sans font-extrabold text-8xl absolute 2xl:top-64 lg:top-56 left-[23rem] -translate-x-1/2 -translate-y-1/2 text-white">
          COS<span className="text-stroke-cosmic">MIC</span>
        </h1>
        <h1 className="font-sans font-extrabold text-8xl absolute 2xl:bottom-56 lg:bottom-44 left-[71%]  -translate-x-1/2 -translate-y-1/2 text-white">
          <span className="text-stroke-wonder ">WON</span>
          DER
        </h1>
      </div>
      <div className="border-2 border-white absolute bottom-0 z-10 px-3 py-4 rounded-xl bg-black text-white font-mono font-bold text-lg -translate-x-1/2 -translate-y-1/2 left-1/2 w-1/4 text-center cursor-pointer">
        <button>Start your adventure</button>
      </div>
    </div>
  );
}
