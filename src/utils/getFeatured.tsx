import { SetStateAction, Dispatch } from "react";
import client from "../utils/client";
function getFeatured(setProjects: Dispatch<SetStateAction<string[]>>): void {
  client
    .getEntries({ content_type: "project" })
    .then((entry) => {
      const featuredProjects = entry.items
        .filter((item) => item.fields.projectFeatured === true)
        .map((item) => item.sys.id);
      setProjects(featuredProjects);
    })
    .catch((err) => console.error("get Single Project ERROR:", err));
}

export default getFeatured;
