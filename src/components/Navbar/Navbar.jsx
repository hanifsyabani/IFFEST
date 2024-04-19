import { Link } from "react-router-dom";
import cosmicLogo from "../../assets/logo.png";
import { itemNav } from "./ItemNav";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav className="lg:hidden flex justify-between  items-center py-4 fixed w-full px-3 bg-primary z-50">
        <div></div>
        <img
          src={cosmicLogo}
          alt="logo"
          width={500}
          height={500}
          className="w-28"
        />
        <AiOutlineMenu onClick={handleNav} size={30} className="text-white cursor-pointer" />
      </nav>

      {/* mobile */}
      <nav
        className={`lg:hidden ${
          nav ? "right-0" : "-right-[30rem]"
        } bg-primary fixed top-0 pt-20 w-1/2 h-screen z-40 transition-all`}
      >
        <ul className="flex flex-col justify-center items-center gap-10 text-white">
          {itemNav.map((item) => {
            return (
              <Link to={item.link} key={item.name}>
                <li className="border-b border-black hover:border-b hover:border-white">
                  {item.name}
                </li>
              </Link>
            );
          })}
        </ul>
      </nav>

      {/* dekstop */}
      <nav className="hidden fixed lg:block bg-transparent w-full pl-12 py-8 z-20">
        <div className="flex items-center gap-64">
          <img
            src={cosmicLogo}
            alt="logo"
            width={500}
            height={500}
            className="w-32"
          />
          <ul className="flex items-center gap-20 text-white">
            {itemNav.map((item) => {
              return (
                <Link to={item.link} key={item.name}>
                  <li className="border-b border-black hover:border-b hover:border-white ">
                    {item.name}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
