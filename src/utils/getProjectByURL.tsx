import { SetStateAction, Dispatch } from "react";
import { ArticleData } from "../components/ProjectArticle";
import getEntries from "./getEntries";

export default function getProjectByURL(
  entryURL: string | undefined,
  setProjectData: Dispatch<SetStateAction<ArticleData | undefined>>
): void {
  getEntries("project", "projectURL", entryURL)
    .then((json: any) => {
      const imgUrl = json.includes.Asset[0].fields.file.url;
      const item = json.items[0].fields;
      console.log("PROJECTS BY URL", json.includes.Asset[0].fields.file.url);
      setProjectData({
        projectTitle: item.projectTitle,
        projectDescription: item.projectDescription,
        projectImage: imgUrl,
        projectRichText: item.projectRichText,
        projectFeatured: item.projectFeatured,
        projectAuthor: item.projectAuthor,
      });
    })
    .catch((err) => console.error("get Single Project by URL ERROR:", err));
}
