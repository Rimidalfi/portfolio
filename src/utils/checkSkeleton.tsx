import { SetStateAction, Dispatch } from "react";
import client from "./client";
// const logoEntry: string = "28Hl7k83mhlCbExKUHj2Fs";

export default function checkSkeleton(
  setSkeletonStatus: Dispatch<SetStateAction<boolean>>
): void {
  client
    .getEntries({ content_type: "logo" })
    .then((entry: any) => {
      const logoURL: string = entry.includes.Asset[0].fields.file.url;
      logoURL.length < 0 ? setSkeletonStatus(false) : setSkeletonStatus(true);
    })
    .catch((err) => console.error("ERROR:", err));
}
