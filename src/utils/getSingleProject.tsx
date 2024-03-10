import { createClient, EntryFieldTypes } from "contentful";
import { SetStateAction, Dispatch } from "react";

import { ProjectData } from "../components/ProjectCard";

// export interface ProjectData {
//   projectTitle: string;
//   projectDescription: string;
//   projectImage: string;
//   projectRichText: EntryFieldTypes.RichText;
//   projectFeatured: boolean;
// }

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
        });
      }
    })
    .catch((err) => console.error("get Single Project ERROR:", err));
}

export default getSingleProject;
