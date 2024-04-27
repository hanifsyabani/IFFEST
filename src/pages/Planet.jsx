import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { PlanetItem } from "../components/Planet/PlanetItem";

export default function Planet() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center py-32">
        <div className="grid lg:grid-cols-4 grid-cols-2 md:grid-cols-4 lg:gap-10 gap-5">
          {PlanetItem.map((planet) => (
            <div
              className="lg:w-[17rem] lg:h-[25rem] w-[10rem] h-[18rem] border border-gray-300  rounded-lg flex flex-col items-center justify-center relative rounded-tr-3xl rounded-bl-3xl hover:scale-105 transition-all cursor-pointer "
              key={planet.id}
            >
              <div className="">
                <h1 className="text-white absolute top-4 lg:text-xl text-lg left-8 lg:left-1/2 lg:-translate-x-1/2 font-bold ">
                  - {planet.name} -
                </h1>
                <div className="lg:w-44 w-24">
                  <img
                    src={planet.image}
                    alt={planet.name}
                    className="w-full h-full object-cover planet"
                  />
                </div>
              </div>
              <Link to={`/detail/${planet.id}`}>
                <button className="font-bold bg-white p-2 lg:w-52 w-28 rounded-full absolute bottom-6 lg:left-1/2 lg:-translate-x-1/2 left-5 hover:bg-primary hover:text-white transition-all text-sm lg:text-base ">
                  View Detail
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
