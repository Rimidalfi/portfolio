import { SetStateAction, Dispatch } from "react";
import getEntries from "./getEntries";

function getFeatured(setProjects: Dispatch<SetStateAction<string[]>>): void {
  getEntries("project")
    .then((json: any) => {
      const featuredProjects = json.items
        .filter((item: any) => item.fields.projectFeatured === true)
        .map((item: any) => item.sys.id);
      setProjects(featuredProjects);
    })
    .catch((err) => console.error("get Single Project ERROR:", err));
}

export default getFeatured;
