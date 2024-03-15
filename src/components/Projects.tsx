import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import getProjectIds from "../utils/getProjectIds";

export interface Props {
  all: boolean;
}

export default function Projects(props: Props) {
  const [projects, setProjects] = useState<string[]>([]);
  useEffect(() => {
    getProjectIds(setProjects, props.all);
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
