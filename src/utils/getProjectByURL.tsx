import { SetStateAction, Dispatch } from "react";
import { ProjectData } from "../components/ProjectCard";
import client from "../utils/client";

export default function getProjectByURL(
  entryURL: string,
  setProjectData: Dispatch<SetStateAction<ProjectData | undefined>>
): void {
  client
    .getEntries({ content_type: "project", "fields.projectURL": `${entryURL}` })
    .then((entry) => entry.items[0].fields)
    .then((entry) => {
      if (entry) {
        setProjectData({
          projectTitle: entry.projectTitle,
          projectDescription: entry.projectDescription,
          projectImage: entry.projectImage.fields.file.url,
          projectRichText: entry.projectRichText,
          projectFeatured: entry.projectFeatured,
          projectURL: entry.projectURL,
        });
      }
    })
    .catch((err) => console.error("get Single Project by URL ERROR:", err));
}
