import { SetStateAction, Dispatch } from "react";
import client from "../utils/client";

export default function getLegals(
  setLegalData: Dispatch<SetStateAction<any | undefined>>
): void {
  client
    .getEntries({ content_type: "legals" })
    .then((entry) => entry.items[0])
    .then((item) => setLegalData(item.fields.legalsRichText))
    .catch((err) => console.error("get Single Project by URL ERROR:", err));
}
