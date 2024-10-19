import { SetStateAction, Dispatch } from "react";
import { ProjectCardData } from "../components/ProjectCard";
import getEntry from "./getEntry";

export default function getSingleProject(
  entryId: string,
  setProjectData: Dispatch<SetStateAction<ProjectCardData | undefined>>
): void {
  getEntry(entryId)
    .then((json: any) => {
      const fields = json.items[0].fields;
      const imgUrl = json.includes.Asset[0].fields.file.url;
      const projectData: ProjectCardData = {
        projectTitle: fields.projectTitle,
        projectDescription: fields.projectDescription,
        projectImage: imgUrl,
        projectRichText: fields.projectRichText,
        projectFeatured: fields.projectFeatured,
        projectURL: fields.projectURL,
      };
      setProjectData(projectData);
    })
    .catch((err) => console.error("get Single Project ERROR:", err));
}
