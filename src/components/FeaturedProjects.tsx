import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import getFeatured from "../utils/getFeatured";

function FeaturedProjects() {
  const [projects, setProjects] = useState<string[]>([]);
  useEffect(() => {
    getFeatured(setProjects);
  }, []);

  const projectsList = projects?.map((projectId) => {
    return (
      <div key={projectId}>
        <ProjectCard entryId={projectId} />
      </div>
    );
  });

  return <>{projectsList}</>;
}

export default FeaturedProjects;
