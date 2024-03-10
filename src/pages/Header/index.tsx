import path from "../../routes/pathConstants";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo";

function Header() {
  return (
    <header className="fixed top-0 flex justify-between items-center p-4 md:p-6 md:px-12  z-20 bg-white w-full ">
      <Logo color="black" path={path.HOME} height={"h-8 md:h-10"} />
      <ul className="flex space-x-3">
        <li className="hidden md:block">
          <Link to={path.HOME}>home</Link>
        </li>
        <li>
          <Link to={path.PROJECTS}>projects</Link>
        </li>
        <li>
          <Link to={path.CONTACT}>contact</Link>
        </li>
        <li>
          <Link to={path.VITA}>vita</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
