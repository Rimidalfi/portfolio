import path from "../../routes/pathConstants";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="flex justify-evenly p-16 bg-neutral-700 text-white">
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
      <div>Quote</div>
      <ul>
        <li>github</li>
        <li>linkedIn</li>
      </ul>
    </footer>
  );
}

export default Footer;
