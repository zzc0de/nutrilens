import { useEffect, useState } from "react";

const Navbar = ({ children, className }) => {
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
        className={`max-w-screen-lg mx-auto items-center p-4 flex ${className}`}
      >
        {children}
      </nav>
    </div>
  );
};

export default Navbar;
