import { Link } from "react-router-dom";
import cosmicLogo from "../../assets/logo.png";
import { itemNav } from "./ItemNav";
import { RiMenu3Fill } from "react-icons/ri";
import { useState, useEffect } from "react";
// import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isNavVisible, setNavVisible] = useState(false);
  const [isNavbarFixed, setNavbarFixed] = useState(false);

  const toggleNavVisibility = () => {
    setNavVisible(!isNavVisible);
  };

  useEffect(() => {
    const handleScroll = () => {
      const fixedNav = document.querySelector('header').offsetTop;
      if (window.pageYOffset > fixedNav) {
        setNavbarFixed(true);
      } else {
        setNavbarFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Bersihkan event listener saat komponen di-unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`bg-transparent absolute top-0 left-0 w-full flex items-center z-50 ${isNavbarFixed ? 'navbar-fixed' : ''}`}>
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="flex items-center px-4 py-5">
            <img src={cosmicLogo} alt="logo" className="w-40 lg:w-48" />
          </div>
          <div className="flex items-center">
            <button id="mobile-nav" className="block absolute right-4 md:hidden" onClick={toggleNavVisibility}>
              <RiMenu3Fill size={40} className="text-white" />
            </button>
            <nav id="nav-menu"
              className={`${isNavVisible ? '' : 'hidden'
                } md:block md:static md:bg-transparent max-w-full md:shadow-none md:rounded-none absolute py-5 shadow-lg rounded-lg w-full top-full left-0 bg-primary border border-gray-300 md:border-none mr-44 lg:mr-56`}
            >
              <ul className="block md:flex gap-x-8 lg:gap-x-16 text-white">
                {itemNav && Array.isArray(itemNav) && itemNav.map((item) => (
                  <Link to={item.link} key={item.name}>
                    <li className="flex text-xl py-2 px-8 md:px-0 hover:-translate-y-3 duration-300">
                      {item.name}
                    </li>
                  </Link>
                ))}
              </ul>
            </nav>
          </div>
          <div></div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
