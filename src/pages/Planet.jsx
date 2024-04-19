import bg from "../assets/bgplanet.png";
import vectortoleft from "../assets/vectortopleft.png";
import vectortopright from "../assets/vectortopright.png";

export default function Planet() {
  return (
    <div className="bg-gradient-to-b lg:px-[5%] from-primary to-secondary min-h-screen flex items-center justify-center">
      <div
        className="bg-cover bg-center w-full h-full"
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

        {/* footer */}
        <div className="flex justify-evenly mt-52 ">
          <button className="btn">Previous page</button>
          <button className="btn">Previous page</button>
          <button className="btn">Previous page</button>
        </div>
      </div>
    </div>
  );
}
