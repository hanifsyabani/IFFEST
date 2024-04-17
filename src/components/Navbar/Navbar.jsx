import { Link } from "react-router-dom";
import cosmicLogo from "../../assets/logo.png";
import meteor from "../../assets/meteor.png";
import { itemNav } from "./ItemNav";

const Navbar = () => {
  return (
    <nav className="fixed bg-transparent w-full pl-12  py-8 z-20">
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
      <img
        src={meteor}
        alt="logo"
        width={500}
        height={500}
        className="w-28 absolute right-[20%] top-10"
      />
    </nav>
  );
};

export default Navbar;
