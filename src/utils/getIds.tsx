import { SetStateAction, Dispatch } from "react";
import getEntries from "./getEntries";
import { VitaObject } from "../components/VitaEntries";

export default function getIds(
  setIds: Dispatch<SetStateAction<VitaObject[]>>
): void {
  getEntries("vita")
    .then((json: any) => {
      console.log("VITA JSON 🤗", json);
      const entryIds = json.items
        .map((item: any) => {
          if (item) {
            return {
              vitaId: item.sys.id,
              vitaStartDate: item.fields.vitaStartDate.slice(0, 4),
              vitaEndDate: item.fields.vitaEndDate.slice(0, 4),
            };
          }
        })
        .sort(
          (a: any, b: any) =>
            parseInt(b?.vitaEndDate) - parseInt(a?.vitaEndDate)
        );
      setIds(entryIds);
    })
    .catch((err) => console.error("getIds ERROR:", err));
}
