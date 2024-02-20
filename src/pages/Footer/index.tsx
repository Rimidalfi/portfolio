import path from "../../routes/pathConstants";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
// import { createClient } from "contentful";
import Social from "./Social";
import getSocials from "./getSocials";

interface SocialURLS {
  logoURL: string;
  URL: string;
}
interface Socials {
  [key: string]: SocialURLS;
}

function Footer() {
  const { VITE_ACCESS_TOKEN, VITE_SPACE_ID } = import.meta.env;
  const [socials, setSocials] = useState<Socials>({});
  useEffect(() => {
    getSocials(VITE_SPACE_ID, VITE_ACCESS_TOKEN, setSocials, socials);
    // const client = createClient({
    //   space: VITE_SPACE_ID,
    //   environment: "master",
    //   accessToken: VITE_ACCESS_TOKEN,
    // });
    // client
    //   .getEntries({
    //     content_type: "socials",
    //   })
    //   .then((entry: any) => {
    //     const updatedSocials: Socials = { ...socials };
    //     const items: any[] = entry.items;
    //     console.log(items);
    //     items.forEach((element) => {
    //       const title: string = element.fields.logoTitle;
    //       updatedSocials[title] = {
    //         logoURL: element.fields.logoGraphics[0].fields.file.url,
    //         URL: element.fields.logoLink,
    //       };
    //     });
    //     setSocials(updatedSocials);
    //   })
    //   .catch((err) => console.error("ERROR:", err));
  }, []);
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
        <li>
          {socials.Github ? <Social socialEntry={socials.Github} /> : "loading"}
        </li>
        <li className="pt-4">
          {socials.LinkedIn ? (
            <Social socialEntry={socials.LinkedIn} />
          ) : (
            "loading"
          )}
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
