import { useEffect, useState } from "react";
import { Link } from "react-router";

const Navbar = ({ className }) => {
  const [navbar, setNavbar] = useState(true);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(false);
    } else {
      setNavbar(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => window.removeEventListener("scroll", changeBackground);
  }, []);

  return (
    <div
      className={`shadow-lg w-full transition-colors duration-300 fixed font-Poppins ${
        navbar ? "bg-white text-black" : "bg-primary-blue text-white"
      }`}
    >
      <nav
        className={`max-w-screen-lg mx-auto items-center p-4 flex cursor-pointer justify-between ${className} z-100`}
      >
        <div className="flex items-center space-x-8">
          <Link to={"/"}>
            <h1 className="text-2xl font-bold">
              Nutri<span className="text-orange-400">Lens</span>
            </h1>
          </Link>
          <ul className="flex space-x-4">
            <li>
              <Link to={"/chatbot"}>Tanya AI</Link>
            </li>
            <li>
              <Link to={"/scanfood"}>Scan Kalori</Link>
            </li>
            <li>
              <Link to={"/about"}>Tentang Kami</Link>
            </li>
          </ul>
        </div>
        <div>
          <h1>Account</h1>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
