import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getSingleProject from "../utils/getSingleProject";

export interface ProjectCardData {
  projectTitle?: any;
  projectDescription?: any;
  projectImage?: any;
  projectRichText?: any;
  projectFeatured?: any;
  projectURL?: any;
}
export interface Props {
  entryId: string;
}

export default function ProjectCard(props: Props) {
  const [projectData, setProjectData] = useState<ProjectCardData | undefined>(
    undefined
  );
  useEffect(() => {
    getSingleProject(props.entryId, setProjectData);
  }, []);

  return (
    <div className="bg-white w-1/3">
      <Link to={`/project/${projectData?.projectURL}`}>
        <div>
          <h3 className="font-montserrat-semibold p-4 ">
            {projectData?.projectTitle}
          </h3>
        </div>
        <div className="">
          <p>{projectData?.projectDescription}</p>
        </div>
        <div className="">
          <img
            className=""
            src={projectData?.projectImage}
            alt={projectData?.projectTitle}
          />
        </div>
      </Link>
    </div>
  );
}
