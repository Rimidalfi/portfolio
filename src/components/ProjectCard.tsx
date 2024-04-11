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
    <div className="m-4 w-screen  bg-white shadow-xl overflow-hidden hover:-translate-y-1 touch:-translate-y-1 duration-500">
      <Link to={`/project/${projectData?.projectURL}`}>
        <div>
          <h3 className=" text-xl font-montserrat-bold p-4 py-2 pt-6">
            {projectData?.projectTitle}
          </h3>
        </div>
        <div className=" p-4 py-2 pb-6">
          <p>{projectData?.projectDescription}</p>
        </div>
        <div className="">
          <img
            className="w-full"
            src={projectData?.projectImage}
            alt={projectData?.projectTitle}
          />
        </div>
      </Link>
    </div>
  );
}
