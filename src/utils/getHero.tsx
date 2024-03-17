import { Dispatch, SetStateAction } from "react";
import { HeroData } from "../components/Hero";
import client from "../utils/client";

export default function getHero(
  setHeroData: Dispatch<SetStateAction<HeroData | undefined>>
): void {
  client
    .getEntries({
      content_type: "heroSection",
    })
    .then((entry) => entry.items[0].fields)
    .then((entry) => {
      if (entry) {
        console.log(entry.heroTitle);
        setHeroData({
          heroTitle: entry.heroTitle,
          heroText: entry.heroText,
          heroImage: entry.heroImage.fields.file.url,
          heroSubtitle: entry.heroSubtitle,
        });
      }
    })
    .catch((err) => console.error("get Hero ERROR:", err));
}
