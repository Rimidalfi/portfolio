import { createClient } from "contentful";
import { SetStateAction, Dispatch } from "react";
import { ProjectData } from "../components/ProjectCard";

export default function getProjectByURL(
  entryURL: string,
  setProjectData: Dispatch<SetStateAction<ProjectData | undefined>>
): void {
  const { VITE_ACCESS_TOKEN, VITE_SPACE_ID } = import.meta.env;
  const client = createClient({
    space: VITE_SPACE_ID,
    environment: "master",
    accessToken: VITE_ACCESS_TOKEN,
  });
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
