import path from "../../routes/pathConstants";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="flex justify-evenly p-16 bg-neutral-700 text-white leading-8">
      <ul className="pr-8">
        <li>
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
      <div>Quote</div>
      <ul className="pl-8">
        <li>github</li>
        <li>linkedIn</li>
      </ul>
    </footer>
  );
}

export default Footer;
