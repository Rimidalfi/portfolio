import { useEffect, useState } from "react";
// import getSingleProject from "../utils/getSingleProject";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import RICHTEXT_OPTIONS from "../utils/projectOptions";
import getProjectByURL from "../utils/getProjectByURL";

export interface ProjectData {
  projectTitle?: string;
  projectDescription?: string;
  projectImage?: string;
  projectRichText?: Document;
  projectFeatured?: boolean;
}
export interface Props {
  projectURL?: string;
}

export default function ProjectArticle(props: Props) {
  const [projectData, setProjectData] = useState<ProjectData>();
  useEffect(() => {
    getProjectByURL(props.projectURL, setProjectData);
  }, []);

  return (
    <div className="m-6 my-8 md:m-8 lg:m-14 rounded-xl bg-white shadow-xl overflow-hidden">
      <div>
        <h3 className=" text-xl font-montserrat-bold p-4 py-2 pt-6">
          {projectData?.projectTitle}
        </h3>
      </div>
      <div className=" p-4 py-2 pb-6">
        <p>{projectData?.projectDescription}</p>
      </div>
      <div className="">
        <img className="w-full " src={projectData?.projectImage} alt="" />
      </div>
      <div className="p-4 py-2 pb-6">
        {documentToReactComponents(
          projectData?.projectRichText,
          RICHTEXT_OPTIONS
        )}
      </div>
    </div>
  );
}
