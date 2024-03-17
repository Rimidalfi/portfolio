import { SetStateAction, Dispatch } from "react";
import { ProjectData } from "../components/ProjectCard";
import client from "../utils/client";
function getSingleProject(
  entryId: string,
  setProjectData: Dispatch<SetStateAction<ProjectData | undefined>>
): void {
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
