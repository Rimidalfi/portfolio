import path from "../../routes/pathConstants";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo";

function Header() {
  return (
    <header className="flex justify-between p-6">
      <Logo color="black" path={path.HOME} height={10} />
      <ul className="flex pt-2 space-x-3">
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
