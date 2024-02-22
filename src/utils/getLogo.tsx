import { createClient } from "contentful";
import { SetStateAction, Dispatch } from "react";

const logoEntry: string = "28Hl7k83mhlCbExKUHj2Fs";

function getLogo(
  spaceId: string,
  accessToken: string,
  setLogo: Dispatch<SetStateAction<string>>,
  index: number
): void {
  const client = createClient({
    space: spaceId,
    environment: "master",
    accessToken: accessToken,
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
