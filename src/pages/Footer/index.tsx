import path from "../../routes/pathConstants";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo";
import Social from "../../components/Social";
import { useEffect } from "react";
import Quote from "../../components/Quote";

function Footer() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [Link]);
  return (
    <footer className="flex justify-evenly p-8 bg-neutral-700 text-white leading-8">
      <ul className="pr-8 ">
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
      <div className="flex flex-col items-center">
        <Logo color="white" path={path.HOME} height={8} />
        <Quote />
      </div>

      <ul className="pl-8 flex flex-col items-center justify-center">
        <li>
          <Social media={"Github"} size={6} />
        </li>
        <li className="pt-4">
          <Social media={"LinkedIn"} size={6} />
        </li>
        <li className="pt-4">
          <Social media={"Youtube"} size={6} />
        </li>
        <li className="pt-4">
          <Social media={"Instagram"} size={6} />
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
