import { SetStateAction, Dispatch } from "react";
import { ProjectCardData } from "../components/ProjectCard";
import client from "../utils/client";

export default function getSingleProject(
  entryId: string,
  setProjectData: Dispatch<SetStateAction<ProjectCardData | undefined>>
): void {
  client
    .getEntry(entryId)
    .then((entry: any) => {
      if (entry) {
        const fields = entry.fields;
        //console.log("FIELDS:", fields);
        const projectData: ProjectCardData = {
          projectTitle: fields.projectTitle,
          projectDescription: fields.projectDescription,
          projectImage: fields.projectImage?.fields.file.url,
          projectRichText: fields.projectRichText,
          projectFeatured: fields.projectFeatured,
          projectURL: fields.projectURL,
        };
        setProjectData(projectData);
      }
    })
    .catch((err) => console.error("get Single Project ERROR:", err));
}
