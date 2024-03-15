import { createClient } from "contentful";
import { SetStateAction, Dispatch } from "react";
import { ProjectData } from "../components/ProjectCard";

function getSingleProject(
  entryId: string,
  setProjectData: Dispatch<SetStateAction<ProjectData | undefined>>
): void {
  const { VITE_ACCESS_TOKEN, VITE_SPACE_ID } = import.meta.env;
  const client = createClient({
    space: VITE_SPACE_ID,
    environment: "master",
    accessToken: VITE_ACCESS_TOKEN,
  });
  client
    .getEntry(entryId)
    .then((entry) => {
      if (entry) {
        setProjectData({
          projectTitle: entry.fields.projectTitle,
          projectDescription: entry.fields.projectDescription,
          projectImage: entry.fields.projectImage.fields.file.url,
          projectRichText: entry.fields.projectRichText,
          projectFeatured: entry.fields.projectFeatured,
          projectURL: entry.fields.projectURL,
        });
      }
    })
    .catch((err) => console.error("get Single Project ERROR:", err));
}

export default getSingleProject;
