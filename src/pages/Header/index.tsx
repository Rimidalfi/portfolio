import path from "../../routes/pathConstants";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo";

function Header() {
  return (
    <nav className="fixed top-0 flex justify-between items-center p-4 md:p-6 md:px-12  z-20 bg-white w-full shadow-lg">
      <Logo color="black" path={path.HOME} height={"h-8 md:h-10"} />
      <ul className="flex space-x-3">
        <li className="hidden md:block  hover:-translate-y-1 duration-500">
          <Link to={path.HOME}>home</Link>
        </li>
        <li className=" hover:-translate-y-1 duration-500">
          <Link to={path.PROJECTS}>projects</Link>
        </li>
        <li className=" hover:-translate-y-1 duration-500">
          <Link to={path.CONTACT}>contact</Link>
        </li>
        <li className=" hover:-translate-y-1 duration-500">
          <Link to={path.VITA}>vita</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
