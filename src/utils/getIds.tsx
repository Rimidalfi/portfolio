import { SetStateAction, Dispatch } from "react";
import client from "../utils/client";
import { VitaObject } from "../components/VitaEntries";

export default function getIds(
  setIds: Dispatch<SetStateAction<VitaObject>>
): void {
  client
    .getEntries({ content_type: "vita" })
    .then((entry) => {
      console.log("getIds", entry.items);
      const entryIds = entry.items.map((item) => {
        if (item) {
          return {
            vitaId: item.sys.id,
            vitaStartDate: item.fields.vitaStartDate.slice(0, 4),
            vitaEndDate: item.fields.vitaEndDate.slice(0, 4),
          };
        }
      });
      setIds(entryIds);
    })
    .catch((err) => console.error("getIds ERROR:", err));
}
