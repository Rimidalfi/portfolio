import { SetStateAction, Dispatch } from "react";
import client from "../utils/client";
import { SkillData } from "../components/Skillcard";

export default function getSkills(
  setSkillData: Dispatch<SetStateAction<SkillData[]>>
): void {
  client
    .getEntries({ content_type: "skill" })
    .then((entry: any) => {
      const featuredProjects = entry.items;
      const skillList: SkillData[] = featuredProjects.map((skill: any) => {
        const skillName: string = skill.fields.skillName;
        const skillLevel: string = skill.fields.skillLevel;
        const skillIcon: string = skill.fields.skillIcon?.fields.file.url;
        return {
          skill: skillName,
          level: skillLevel,
          img: skillIcon ? skillIcon : null,
        };
      });
      setSkillData(skillList);
    })
    .catch((err) => console.error("get Single Project ERROR:", err));
}
