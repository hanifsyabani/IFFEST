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
      <div className="bg-gradient-to-b lg:px-[3%] from-primary lg:h-screen to-secondary relative ">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 lg:gap-10 items-center lg:py-36 py-20 divide-x">
            {AboutItem.map((item) => (
              <div
                className="flex flex-col justify-center items-center"
                key={item.id}
              >
                <div className="w-56 h-56 rounded-full mt-2 overflow-hidden border-2">
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <h1 className="font-semibold lg:text-2xl 2xl:text-3xl text-white pt-8 2xl:pt-12 text-center">
                  {item.nama}
                </h1>
                <div className="pt-4 2xl:pt-8 flex flex-col  gap-4 ml-12">
                  <div className="flex gap-5 items-center">
                    <FaGithub size={30} className="text-white" />
                    <a href={item.linkGit}>
                      <p className="text-white lg:text-lg 2xl:text-xl hover:underline">
                        {item.github}
                      </p>
                    </a>
                  </div>
                  <div className="flex gap-5 items-center">
                    <CiMail size={30} className="text-white" />
                    <p className="text-white lg:text-lg 2xl:text-xl">
                      {item.email}
                    </p>
                  </div>
                  <div className="flex gap-5 items-center">
                    <FaLinkedin size={30} className="text-white" />
                    <a href={item.linkLinked}>
                      <p className="text-white lg:text-lg 2xl:text-xl hover:underline">
                        {item.linkedin}
                      </p>
                    </a>
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
