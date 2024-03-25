import { SetStateAction, Dispatch } from "react";
import { VitaData } from "../components/VitaPoint";
import client from "../utils/client";

export default function getVita(
  entryId: string,
  setVitaData: Dispatch<SetStateAction<VitaData | undefined>>
): void {
  client
    .getEntry(entryId)
    .then((entry: any) => {
      if (entry) {
        setVitaData({
          vitaTitle: entry.fields.vitaTitle,
          vitaDescription: entry.fields.vitaDescription,
          vitaStartDate: entry.fields.vitaStartDate,
          vitaEndDate: entry.fields.vitaEndDate,
          vitaType: entry.fields.vitaType,
        });
      }
    })
    .catch((err) => console.error("get Single Project ERROR:", err));
}
