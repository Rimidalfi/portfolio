import { SetStateAction, Dispatch } from "react";
import getEntry from "./getEntry";
const logoEntry: string = "28Hl7k83mhlCbExKUHj2Fs";

function getLogo(
  setLogo: Dispatch<SetStateAction<string>>,
  index: number
): void {
  getEntry(logoEntry)
    .then((json: any) => {
      const logoArray: any[] = json.includes.Asset;
      const logoUrl: string = logoArray[index].fields.file.url;
      setLogo(logoUrl);
    })
    .catch((err) => console.error("ERROR:", err));
}

export default getLogo;
