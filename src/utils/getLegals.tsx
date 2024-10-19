import { SetStateAction, Dispatch } from "react";
import getEntries from "./getEntries";

export default function getLegals(
  setLegalData: Dispatch<SetStateAction<any | undefined>>
): void {
  getEntries("legals")
    .then((json: any) => {
      return json.items[0].fields;
    })
    .then((item) => setLegalData(item.legalsRichText))
    .catch((err) => console.error("get Single Project by URL ERROR:", err));
}
