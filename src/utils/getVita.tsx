import { SetStateAction, Dispatch } from "react";
import { VitaData } from "../components/VitaPoint";
import getEntry from "./getEntry";
// import client from "../utils/client";

// export default function getVita(
//   entryId: string,
//   setVitaData: Dispatch<SetStateAction<VitaData | undefined>>
// ): void {
//   client
//     .getEntry(entryId)
//     .then((entry: any) => {
//       if (entry) {
//         //console.log("IMAGGGGE:", entry);
//         setVitaData({
//           vitaTitle: entry.fields.vitaTitle,
//           vitaDescription: entry.fields.vitaDescription,
//           vitaStartDate: entry.fields.vitaStartDate,
//           vitaEndDate: entry.fields.vitaEndDate,
//           vitaType: entry.fields.vitaType,
//           vitaImage: entry.fields.vitaImage?.fields.file.url,
//           vitaDuration: `${entry.fields.vitaStartDate.slice(
//             0,
//             4
//           )}-${entry.fields.vitaEndDate.slice(0, 4)}`,
//         });
//       }
//     })
//     .catch((err) => console.error("get Single Project ERROR:", err));
// }

export default function getVita(
  entryId: string,
  setVitaData: Dispatch<SetStateAction<VitaData | undefined>>
): void {
  getEntry(entryId)
    .then((json: any) => {
      console.log("VITA 🍀", json);
      const field = json.items[0].fields;
      const url = json.includes.Asset[0].fields.file.url;
      if (json) {
        //console.log("IMAGGGGE:", entry);
        setVitaData({
          vitaTitle: field.vitaTitle,
          vitaDescription: field.vitaDescription,
          vitaStartDate: field.vitaStartDate,
          vitaEndDate: field.vitaEndDate,
          vitaType: field.vitaType,
          vitaImage: url,
          vitaDuration: `${field.vitaStartDate.slice(0, 4)}-${
            field.present ? "Now" : field.vitaEndDate.slice(0, 4)
          }`,
        });
      }
    })
    .catch((err) => console.error("get Single Project ERROR:", err));
}
