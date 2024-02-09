import path from "../../routes/pathConstants";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div>Header 💆‍♂️</div>
      <ul>
        <li>
          <Link to={path.HOME}>home</Link>
        </li>
        <li>
          <Link to={path.PROJECTS}>projects</Link>
        </li>
        <li>
          <Link to={path.CONTACT}>contact</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
