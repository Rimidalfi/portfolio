import { useEffect, useState } from "react";
import getSingleProject from "../utils/getSingleProject";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import RICHTEXT_OPTIONS from "../utils/projectOptions";

export interface ProjectData {
  projectTitle?: string;
  projectDescription?: string;
  projectImage?: string;
  projectRichText?: Document;
  projectFeatured?: boolean;
}

function ProjectCard() {
  const entryId: string = "4LDKo9F5FWSpX0zUqSNsUP";
  const [projectData, setProjectData] = useState<ProjectData>();
  useEffect(() => {
    getSingleProject(entryId, setProjectData);
    console.log(typeof projectData?.projectRichText);
  }, []);

  return (
    <div className="m-6">
      <div>
        <h3 className=" text-xl font-montserrat-bold py-2">
          {projectData?.projectTitle}
        </h3>
      </div>
      <div className="py-2">
        <p>{projectData?.projectDescription}</p>
      </div>
      <div className="py-2">
        <img src={projectData?.projectImage} alt="" />
      </div>
      <div>
        {documentToReactComponents(
          projectData?.projectRichText,
          RICHTEXT_OPTIONS
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
