import { SetStateAction, Dispatch } from "react";
import { ArticleData } from "../components/ProjectArticle";
import client from "../utils/client";

export default function getProjectByURL(
  entryURL: string | undefined,
  setProjectData: Dispatch<SetStateAction<ArticleData | undefined>>
): void {
  client
    .getEntries({ content_type: "project", "fields.projectURL": `${entryURL}` })
    .then((entry) => entry.items[0].fields)
    .then((entry: any) => {
      if (entry) {
        setProjectData({
          projectTitle: entry.projectTitle,
          projectDescription: entry.projectDescription,
          projectImage: entry.projectImage?.fields.file.url,
          projectRichText: entry.projectRichText,
          projectFeatured: entry.projectFeatured,
        });
      }
    })
    .catch((err) => console.error("get Single Project by URL ERROR:", err));
}
