import { createClient } from "contentful";
import { SetStateAction, Dispatch } from "react";

function getFeatured(setProjects: Dispatch<SetStateAction<string[]>>): void {
  const { VITE_ACCESS_TOKEN, VITE_SPACE_ID } = import.meta.env;
  const client = createClient({
    space: VITE_SPACE_ID,
    environment: "master",
    accessToken: VITE_ACCESS_TOKEN,
  });
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
