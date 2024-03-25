import { SetStateAction, Dispatch } from "react";
import client from "./client";

interface SocialURLS {
  logoURL: string;
  URL: string;
}
interface Socials {
  [key: string]: SocialURLS;
}

function getSocials(
  setSocials: Dispatch<SetStateAction<Socials>>,
  socials: Socials
): void {
  client
    .getEntries({
      content_type: "socials",
    })
    .then((entry: any) => {
      const updatedSocials: Socials = { ...socials };
      const items: any[] = entry.items;
      // console.log(items);
      items.forEach((element) => {
        const title: string = element.fields.logoTitle;
        updatedSocials[title] = {
          logoURL: element.fields.logoGraphics[0].fields.file.url,
          URL: element.fields.logoLink,
        };
      });
      setSocials(updatedSocials);
    })
    .catch((err) => console.error("ERROR:", err));
}

export default getSocials;
