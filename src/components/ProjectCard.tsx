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
    <div className="flex flex-col bg-white overflow-hidden h-full  relative shadow-lg  md:rounded-3xl  hover:scale-101 hover:shadow-2xl  ease-in duration-300">
      <Link to={`/project/${projectData?.projectURL}`}>
        <img
          className="w-full h-60 object-cover"
          src={projectData?.projectImage}
          alt={projectData?.projectTitle}
        />
        <h3 className="font-montserrat-semibold text-white absolute top-0 p-3 backdrop-blur-sm bg-black/20 mt-4 ml-3 rounded-full">
          {projectData?.projectTitle}
        </h3>
        <p className="p-4 mb-14 text-gray-500">
          {projectData?.projectDescription}
        </p>
        <button className="font-montserrat-semibold text-white bg-gradient-to-bl from-cyan-400 to-indigo-600 py-2 px-3 self-left m-4  absolute bottom-0 rounded-full hover:opacity-90">
          View Project
        </button>
      </Link>
    </div>
  );
}
