import { PlanetItem } from "../components/Planet/PlanetItem";
import bg from "../assets/bgplanet.png";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Detail() {
  const { id } = useParams();
  const [planet, setPlanet] = useState(null);

  useEffect(() => {
    // Cari planet dengan id yang sesuai
    const selectedPlanet = PlanetItem.find((item) => item.id === parseInt(id));
    setPlanet(selectedPlanet);
  }, [id]);

  return (
    <div className="bg-gradient-to-b lg:px-[5%] from-primary to-secondary lg:h-screen ">

      <div
        className="bg-cover bg-center w-full h-full py-14"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div>
          {/* header */}
          <div className="flex justify-between">
            <div className="">
              <div className="relative flex">
                <div className="border-t-[5px] w-20 -rotate-45 mt-7"></div>
                <div className="border-t-[5px] w-14 md:w-52 lg:w-80 2xl:w-[500px] absolute left-[67px]"></div>
              </div>
            </div>
            <div>
              <h1 className="text-white font-mono text-center text-2xl font-extralight">
                Destination
              </h1>
              <h1 className="text-white font-mono text-center font-bold text-2xl">
                {planet?.name}
              </h1>
            </div>
            <div className="">
              <div className="relative flex">
                <div className="border-t-[5px] w-14 md:w-52 lg:w-80 2xl:w-[500px] absolute right-[67px]"></div>
                <div className="border-t-[5px] w-20 rotate-45 mt-7"></div>
              </div>
            </div>
          </div>

          {/* Planet */}
          <div className="text-white relative">
            <img src={planet?.image} alt="Saturn" className="mx-auto pt-12 lg:pb-24 h-[250px] lg:h-[500px]" />
            <div id="detailPlanet" className="hidden lg:block ">
              <div className="absolute top-1/2 -translate-y-[220%] left-1/4 -translate-x-[70%] 2xl:-translate-x-[50%] space-y-3">
                <h3 className="text-2xl max-w-[20rem]">{planet?.info1}</h3>
                <div className="">
                  <div className="relative flex">
                    <div className="border-[3px] w-14 md:w-52 lg:w-80 2xl:w-80 relative before:absolute before:-right-1 before:top-1/2 before:-translate-y-1/2 before:h-4 before:w-4 before:bg-white before:rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="absolute top-1/2 -translate-y-[240%]  right-0 -translate-x-[30%] 2xl:-translate-x-[70%] space-y-3">
                <h3 className="text-2xl max-w-[20rem] pl-20">{planet?.info2}</h3>
                <div>
                  <div className="relative flex">
                    <div className="border-t-[6px] w-14 md:w-52 lg:w-80 2xl:w-52 absolute left-[67px] rotate-180"></div>
                    <div className="border-t-[6px] w-20 -rotate-45 mt-7 relative before:absolute before:left-0 before:-bottom-[5px] before:h-4 before:w-4 before:rounded-full before:bg-white "></div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-1/2 translate-y-[160%] 2xl:translate-y-[180%]  right-0 translate-x-[0%] 2xl:-translate-x-[30%] space-y-3">
                <div className="">
                  <div className="relative flex">
                    <div className="border-[3px] w-20 rotate-45 mb-7 relative before:absolute before:-left-2 before:bottom-1/2 before:translate-y-1/2 before:h-4 before:w-4 before:rounded-full before:bg-white"></div>
                    <div className="border-[3px] w-14 md:w-52 lg:w-80 2xl:w-96 absolute left-[67px] bottom-0"></div>
                  </div>
                </div>
                <h3 className="text-2xl max-w-[21rem] ml-16">{planet?.info3}</h3>
              </div>
            </div>
            <div id="mobileDetailPlanet" className="block lg:hidden py-12 px-16">
              <div className="space-y-6 relative before:absolute before:-left-8 before:w-1 before:h-full before:rounded-md before:bg-white">
                <h3 className="text-lg md:text-2xl relative before:absolute before:w-4 before:h-4 before:bg-white before:top-0 before:-left-[38px] before:rounded-full">{planet?.info1}</h3>
                <div className="flex gap-4">
                  <div className="border border-white h-10"></div>
                  <div className="border border-white h-10"></div>
                  <div className="border border-white h-10"></div>
                  <div className="border border-white h-10"></div>
                  <div className="border border-white h-10"></div>
                  <div className="border border-white h-10"></div>
                  <div className="border border-white h-10"></div>
                  <div className="border border-white h-10"></div>
                  <div className="border border-white h-10"></div>
                  <div className="border border-white h-10"></div>
                  <div className="border border-white h-10"></div>
                  <div className="border border-white h-10"></div>
                  <div className="border border-white h-10"></div>
                  <div className="border border-white h-10"></div>
                  <div className="border border-white h-10"></div>
                  <div className="border border-white h-10"></div>
                </div>
                <h3 className="text-lg md:text-2xl relative before:absolute before:w-4 before:h-4 before:bg-white before:top-0 before:-left-[38px] before:rounded-full">{planet?.info2}</h3>
                <div className="flex gap-4">
                  <div className="border border-white h-10"></div>
                  <div className="border border-white h-10"></div>
                  <div className="border border-white h-10"></div>
                  <div className="border border-white h-10"></div>
                  <div className="border border-white h-10"></div>
                  <div className="border border-white h-10"></div>
                  <div className="border border-white h-10"></div>
                  <div className="border border-white h-10"></div>
                  <div className="border border-white h-10"></div>
                  <div className="border border-white h-10"></div>
                  <div className="border border-white h-10"></div>
                  <div className="border border-white h-10"></div>
                  <div className="border border-white h-10"></div>
                  <div className="border border-white h-10"></div>
                  <div className="border border-white h-10"></div>
                  <div className="border border-white h-10"></div>
                </div>
                <h3 className="text-lg md:text-2xl relative before:absolute before:w-4 before:h-4 before:bg-white before:top-0 before:-left-[38px] before:rounded-full">{planet?.info3}</h3>
                <div className="flex gap-4">
                  <div className="border border-white h-10"></div>
                  <div className="border border-white h-10"></div>
                  <div className="border border-white h-10"></div>
                  <div className="border border-white h-10"></div>
                  <div className="border border-white h-10"></div>
                  <div className="border border-white h-10"></div>
                  <div className="border border-white h-10"></div>
                  <div className="border border-white h-10"></div>
                  <div className="border border-white h-10"></div>
                  <div className="border border-white h-10"></div>
                  <div className="border border-white h-10"></div>
                  <div className="border border-white h-10"></div>
                  <div className="border border-white h-10"></div>
                  <div className="border border-white h-10"></div>
                  <div className="border border-white h-10"></div>
                  <div className="border border-white h-10"></div>
                </div>
              </div>
            </div>
          </div>

          <Link to={"/planet"} >
            <button className="bg-white w-24 rounded-full px-1 py-2 mt-4 font-semibold lg:ml-0 ml-4 hover:bg-white/90 transition-all">
              Back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
