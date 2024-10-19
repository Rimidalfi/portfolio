import { SetStateAction, Dispatch } from "react";
import { SkillData } from "../components/Skillcard";
import getEntries from "./getEntries";
import getEntry from "./getEntry";

export default async function getSkills(
  setSkillData: Dispatch<SetStateAction<SkillData[]>>
): Promise<void> {
  const skillArray = await getEntries("skill").then((json: any) => json.items);
  const skillIds = await skillArray.map((object: any) => object.sys.id);
  console.log(skillIds);
  const skillObjects = await skillIds.map(async (entryId: any) => {
    const entryJSON: any = await getEntry(entryId);
    return {
      skill: entryJSON.items[0].fields.skillName,
      level: entryJSON.items[0].fields.skillLevel,
      img: entryJSON.includes?.Asset[0].fields.file.url
        ? entryJSON.includes.Asset[0].fields.file.url
        : null,
    };
  });
  const skillList = await Promise.all(skillObjects);
  setSkillData(skillList);
}
