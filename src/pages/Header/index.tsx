import path from "../../routes/pathConstants";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { createClient } from "contentful";

const logoEntry: string = "28Hl7k83mhlCbExKUHj2Fs";

function Header() {
  const { VITE_ACCESS_TOKEN, VITE_SPACE_ID } = import.meta.env;
  const [logo, setLogo] = useState<string>("");

  useEffect(() => {
    const client = createClient({
      space: VITE_SPACE_ID,
      environment: "master",
      accessToken: VITE_ACCESS_TOKEN,
    });
    client
      .getEntry(logoEntry)
      .then((entry: any) => {
        const logoArray: any[] = entry.fields.logoGraphics;
        const logoUrl: string = logoArray[0].fields.file.url;
        setLogo(logoUrl);
      })
      .catch((err) => console.error("ERROR:", err));
  }, []);

  return (
    <header className="flex justify-between p-6 ">
      <div className="md:pl-4">
        <Link to={path.HOME}>
          <img className="h-10" src={logo} alt="JANO" />
        </Link>
      </div>
      <ul className="flex pt-2 space-x-3 md:pr-4">
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
