import path from "../../routes/pathConstants";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex justify-between p-8">
      <div className="pl-4">
        <Link to={path.HOME}>Logo</Link>
      </div>
      <ul className="flex space-x-3 pr-8">
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
