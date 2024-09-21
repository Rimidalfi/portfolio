import { SetStateAction, Dispatch } from "react";
// import getEntry from "./getEntry";
import client from "../utils/client";
const logoEntry: string = "28Hl7k83mhlCbExKUHj2Fs";

function getLogo(
  setLogo: Dispatch<SetStateAction<string>>,
  index: number
): void {
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

// function getLogo(
//   setLogo: Dispatch<SetStateAction<string>>,
//   index: number
// ): void {
//   getEntry(logoEntry)
//     .then((entry: any) => {
//       const logoArray: any[] = entry.fields.logoGraphics;
//       const logoUrl: string = logoArray[index].fields.file.url;
//       setLogo(logoUrl);
//     })
//     .catch((err) => console.error("ERROR:", err));
// }

// export default getLogo;
