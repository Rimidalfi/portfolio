import { SetStateAction, Dispatch } from "react";
import { imprintData } from "../components/ImprintText";
import getEntries from "./getEntries";

export default function getImprint(
  setImprintData: Dispatch<SetStateAction<imprintData | undefined>>
): void {
  getEntries("imprint")
    .then((json: any) => {
      return json.items[0].fields;
    })
    .then((item) => {
      setImprintData({
        title: item.imprintTitle,
        name: item.imprintName,
        street: item.imprintStreet,
        city: item.imprintCity,
        email: item.imprintEmail,
        phone: item.imprintPhone ? item.imprintPhone : null,
        richText: item.imprintRichtext ? item.imprintRichtext : null,
      });
    })
    .catch((err) => console.error("get Single Project by URL ERROR:", err));
}
