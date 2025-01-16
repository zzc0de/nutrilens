import Navbar from "../components/atoms/Navbar/Navbar";
import { Link, Outlet } from "react-router";

const MainLayout = ({ className }) => {
  return (
    <>
      <Navbar className={"space-x-8 cursor-pointer"}>
        <Link to={"/"}>
          <h1 className="text-2xl font-bold">
            Nutri<span className="text-orange-400">Lens</span>
          </h1>
        </Link>
        <ul className="flex space-x-4">
          <li>Beranda</li>
          <li>Tentang Kami</li>
        </ul>
      </Navbar>
      <main className={`max-w-screen-lg mx-auto ${className}`}>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
