import { Dispatch, SetStateAction } from "react";
import { HeroData } from "../components/Hero";
import getEntries from "./getEntries";

export default function getHero(
  setHeroData: Dispatch<SetStateAction<HeroData | undefined>>
): void {
  getEntries("heroSection")
    .then((json: any) => {
      const imgUrl = json.includes.Asset[0].fields.file.url;
      const fields = json.items[0].fields;
      setHeroData({
        heroTitle: fields.heroTitle,
        heroText: fields.heroText,
        heroImage: imgUrl,
        heroSubtitle: fields.heroSubtitle,
        heroMetaDescription: fields.heroMetaDescription,
        heroMetaTitle: fields.heroMetaTitle,
      });
    })
    .catch((err) => console.error("get Hero ERROR:", err));
}
