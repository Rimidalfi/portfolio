import { SetStateAction, Dispatch } from "react";
import getEntries from "./getEntries";

export default function getProjectIds(
  setProjects: Dispatch<SetStateAction<string[]>>,
  all: boolean = true
): void {
  getEntries("project")
    .then((json: any) => {
      const featuredProjects = json.items
        .filter((item: any) =>
          all ? item.sys.id : item.fields.projectFeatured === true
        )
        .map((item: any) => item.sys.id);
      setProjects(featuredProjects);
    })
    .catch((err) => console.error("get Single Project ERROR:", err));
}
