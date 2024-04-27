import bg from "../assets/bgplanet.png";
import secondSaturn from "../assets/saturn-2.png";

export default function Planet() {
  return (
    <div className="bg-gradient-to-b lg:px-[5%] from-primary to-secondary lg:h-screen flex items-center justify-center">
      <div
        className="bg-cover bg-center w-full h-full py-16"
        style={{ backgroundImage: `url(${bg})` }}
      >
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
              Saturn
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
        <div className="text-white">
          <img src={secondSaturn} alt="Saturn" className="mx-auto pt-12 pb-24" />
          <div id="detailPlanet" className="hidden lg:block">
            <div className="absolute top-1/2 -translate-y-[220%] left-1/4 -translate-x-[60%] 2xl:-translate-x-[40%] space-y-3">
              <h3 className="text-2xl max-w-[20rem]">The 6th closest planet to the sun</h3>
              <div className="">
                <div className="relative flex">
                  <div className="border-[3px] w-14 md:w-52 lg:w-80 2xl:w-80 relative before:absolute before:-right-1 before:top-1/2 before:-translate-y-1/2 before:h-4 before:w-4 before:bg-white before:rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="absolute top-1/2 -translate-y-[320%]  right-0 -translate-x-[100%] 2xl:-translate-x-[180%] space-y-3">
              <h3 className="text-2xl max-w-[20rem] pl-20">Has 47 Moons</h3>
              <div>
                <div className="relative flex">
                  <div className="border-t-[6px] w-14 md:w-52 lg:w-80 2xl:w-52 absolute left-[67px] rotate-180"></div>
                  <div className="border-t-[6px] w-20 -rotate-45 mt-7 relative before:absolute before:left-0 before:-bottom-[5px] before:h-4 before:w-4 before:rounded-full before:bg-white "></div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-1/2 translate-y-[150%] 2xl:translate-y-[65%]  right-0 -translate-x-[20%] 2xl:-translate-x-[60%] space-y-3">
              <div className="">
                <div className="relative flex">
                  <div className="border-[3px] w-20 rotate-45 mb-7 relative before:absolute before:-left-2 before:bottom-1/2 before:translate-y-1/2 before:h-4 before:w-4 before:rounded-full before:bg-white"></div>
                  <div className="border-[3px] w-14 md:w-52 lg:w-80 2xl:w-96 absolute left-[67px] bottom-0"></div>
                </div>
              </div>
              <h3 className="text-2xl max-w-[21rem] ml-16">Planet with the largest asteroids rings on our solar system</h3>
            </div>
          </div>
          <div id="mobileDetailPlanet" className="block lg:hidden py-12 px-16">
            <div className="space-y-6 relative before:absolute before:-left-8 before:w-1 before:h-full before:rounded-md before:bg-white">
              <h3 className="text-lg md:text-2xl relative before:absolute before:w-4 before:h-4 before:bg-white before:top-0 before:-left-[38px] before:rounded-full">The 6th closest planet to the sun</h3>
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
              <h3 className="text-lg md:text-2xl relative before:absolute before:w-4 before:h-4 before:bg-white before:top-0 before:-left-[38px] before:rounded-full">Has 47 Moons</h3>
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
              <h3 className="text-lg md:text-2xl relative before:absolute before:w-4 before:h-4 before:bg-white before:top-0 before:-left-[38px] before:rounded-full">Planet with the largest asteroids rings on our solar system</h3>
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

        {/* footer */}
        <div className="flex justify-evenly pt-10">
          <button className="btn">Previous page</button>
          <button className="btn">Previous page</button>
          <button className="btn">Previous page</button>
        </div>
      </div>
    </div>
  );
}
