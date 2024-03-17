import { createClient } from "contentful";
import { SetStateAction, Dispatch } from "react";

const logoEntry: string = "28Hl7k83mhlCbExKUHj2Fs";
const { VITE_ACCESS_TOKEN, VITE_SPACE_ID } = import.meta.env;

function getLogo(
  setLogo: Dispatch<SetStateAction<string>>,
  index: number
): void {
  const client = createClient({
    space: VITE_SPACE_ID,
    environment: "master",
    accessToken: VITE_ACCESS_TOKEN,
  });
  client
    .getEntry(logoEntry)
    .then((entry: any) => {
      const logoArray: any[] = entry.fields.logoGraphics;
      const logoUrl: string = logoArray[index].fields.file.url;
      setLogo(logoUrl);
    })
    .catch((err) => console.error("ERROR:", err));
}

export default getLogo;
