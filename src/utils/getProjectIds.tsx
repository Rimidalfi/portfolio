import { SetStateAction, Dispatch } from "react";
import client from "../utils/client";
export default function getProjectIds(
  setProjects: Dispatch<SetStateAction<string[]>>,
  all: boolean
): void {
  client
    .getEntries({ content_type: "project" })
    .then((entry) => {
      const featuredProjects = entry.items
        .filter((item) =>
          all ? item.sys.id : item.fields.projectFeatured === true
        )
        .map((item) => item.sys.id);
      setProjects(featuredProjects);
    })
    .catch((err) => console.error("get Single Project ERROR:", err));
}
