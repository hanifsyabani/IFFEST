import bg from "../assets/bgplanet.png";
import secondSaturn from "../assets/saturn-2.png";
import firstVectorDesc from "../assets/vector-line-1.png";
import secondVectorDesc from "../assets/vector-line-2.png";
import ThirdVectorDesc from "../assets/vector-line-3.png";
import vectortoleft from "../assets/vectortopleft.png";
import vectortopright from "../assets/vectortopright.png";

export default function Planet() {
  return (
    <div className="bg-gradient-to-b lg:px-[5%] from-primary to-secondary h-screen flex items-center justify-center">
      <div
        className="bg-cover bg-center w-full h-full py-16"
        style={{ backgroundImage: `url(${bg})` }}
      >
        {/* header */}
        <div className="flex justify-evenly">
          <img src={vectortoleft} alt="vector" />
          <div>
            <h1 className="text-white font-mono text-center text-2xl font-extralight">
              Destination
            </h1>
            <h1 className="text-white font-mono text-center font-bold text-2xl">
              Saturn
            </h1>
          </div>
          <img src={vectortopright} alt="vector" />
        </div>

        {/* Planet */}
        <div className="text-white">
          <img src={secondSaturn} alt="Saturn" className="mx-auto py-32" />
          <div className="absolute top-1/3 left-1/4 -translate-x-[40%] space-y-3">
            <h3 className="text-3xl max-w-[20rem]">The 6th closest planet to the sun</h3>
            <img src={firstVectorDesc} alt="Description" className="w-80" />
          </div>
          <div className="absolute top-1/3 -translate-y-[80%]  right-0 -translate-x-[120%] space-y-3">
            <h3 className="text-3xl max-w-[20rem] pl-16">Has 47 Moons</h3>
            <img src={secondVectorDesc} alt="Description" className=" w-80" />
          </div>
          <div className="absolute bottom-1/3 translate-y-[65%]  right-0 -translate-x-[60%] space-y-3">
            <img src={ThirdVectorDesc} alt="" />
            <h3 className="text-3xl max-w-[21rem] ml-16">Planet with the largest asteroids rings on our solar system</h3>
          </div>
        </div>

        {/* footer */}
        <div className="flex justify-evenly">
          <button className="btn">Previous page</button>
          <button className="btn">Previous page</button>
          <button className="btn">Previous page</button>
        </div>
      </div>
    </div>
  );
}
