import Navbar from "../components/Navbar/Navbar";
import bg from "../assets/aboutbg.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { AboutItem } from "../components/About/AboutItem";
import rocket from "../assets/rocket.png";
import satelit1 from "../assets/satelit1.png";
import satelit2 from "../assets/satelit2.png";

export default function About() {
  return (
    <>
      <div className="bg-gradient-to-b lg:px-[3%] from-primary to-secondary lg:h-screen lg:overflow-y-hidden relative ">
        <Navbar />
        <div
          className="lg:bg-cover bg-center w-full h-full"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <img
            src={satelit1}
            alt="satelit"
            width={100}
            className="absolute top-40"
          />
          <img
            src={satelit2}
            alt="satelit"
            width={150}
            className="absolute lg:top-10 bottom-52 lg:right-20 top-[70%] w-24"
          />
          <img
            src={rocket}
            alt="rocket"
            width={70}
            className="absolute lg:top-28 lg:left-[55%] top-[40%] right-0"
          />

          <div className="flex flex-wrap justify-center gap-20 lg:gap-0 items-center lg:pt-36 pt-20">
            {AboutItem.map((item) => (
              <div
                className={`w-96 ${item.id === 3 ? "border-none" : "lg:border-r"
                  } lg:border-white text-center px-4`}
                key={item.id}
              >
                <div className="w-32 h-32 rounded-full mt-2 bg-white font-mono mx-auto"></div>
                <h1 className="font-bold text-2xl text-white mt-12">
                  {item.nama}
                </h1>
                <div className="mt-8 flex flex-col gap-4 ml-12">
                  <div className="flex gap-5 items-center">
                    <FaGithub size={30} className="text-white" />
                    <p className="text-white text-lg">{item.github}</p>
                  </div>
                  <div className="flex gap-5 items-center">
                    <CiMail size={30} className="text-white" />
                    <p className="text-white text-lg">{item.email}</p>
                  </div>
                  <div className="flex gap-5 items-center">
                    <FaLinkedin size={30} className="text-white" />
                    <p className="text-white text-lg">{item.linkedin}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
