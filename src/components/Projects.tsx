import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import getProjectIds from "../utils/getProjectIds";

export interface Props {
  all?: boolean;
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

  return (
    <div className="">
      <div className="w-full bg-white p-6 md:px-14 shadow-lg z-10">
        <h3 className="heading">Projects</h3>
      </div>
      <div className="grid gap-4 md:grid-cols-3 md:gap-10 md:mx-10 md:mt-6 2xl:mx-40 pb-6">
        {projectsList}
      </div>
    </div>
  );
}
