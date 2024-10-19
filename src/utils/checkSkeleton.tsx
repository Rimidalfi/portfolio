import { SetStateAction, Dispatch } from "react";
import getEntries from "./getEntries";

export default function checkSkeleton(
  setSkeletonStatus: Dispatch<SetStateAction<boolean>>
): void {
  getEntries("logo")
    .then((json: any) => {
      const status: boolean = json.includes.Asset.length === 0;
      console.log("Checkskeleton:", status);
      setSkeletonStatus(!status);
    })
    .catch((err) => console.error("ERROR:", err));
}
