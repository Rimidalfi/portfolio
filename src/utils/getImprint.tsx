import { SetStateAction, Dispatch } from "react";
import client from "../utils/client";
import { imprintData } from "../components/ImprintText";
export default function getImprint(
  setImprintData: Dispatch<SetStateAction<imprintData | undefined>>
): void {
  client
    .getEntries({ content_type: "imprint" })
    .then((entry) => entry.items[0].fields)
    .then((item) =>
      setImprintData({
        title: item.imprintTitle,
        name: item.imprintName,
        street: item.imprintStreet,
        city: item.imprintCity,
        email: item.imprintEmail,
        phone: item.imprintPhone ? item.imprintPhone : null,
        richText: item.imprintRichtext ? item.imprintRichtext : null,
      })
    )
    .catch((err) => console.error("get Single Project by URL ERROR:", err));
}
