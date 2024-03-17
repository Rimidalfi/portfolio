import { createClient } from "contentful";
import { Dispatch, SetStateAction } from "react";
import { HeroData } from "../components/Hero";

export default function getHero(
  setHeroData: Dispatch<SetStateAction<HeroData | undefined>>
): void {
  const { VITE_ACCESS_TOKEN, VITE_SPACE_ID } = import.meta.env;
  const client = createClient({
    space: VITE_SPACE_ID,
    environment: "master",
    accessToken: VITE_ACCESS_TOKEN,
  });
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
