import { useEffect, useState } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import RICHTEXT_OPTIONS from "../utils/projectOptions";
import getProjectByURL from "../utils/getProjectByURL";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SEO from "./SEO";

export interface ArticleData {
  projectTitle?: any;
  projectDescription?: any;
  projectImage?: any;
  projectRichText?: any;
  projectFeatured?: any;
  projectAuthor?: any;
}
export interface Props {
  projectURL?: string;
}

export default function ProjectArticle(props: Props) {
  const [projectData, setProjectData] = useState<ArticleData>();
  useEffect(() => {
    getProjectByURL(props.projectURL, setProjectData);
  }, []);

  return (
    <div className="flex justify-center overflow-hidden w-full">
      {projectData ? (
        <>
          <SEO
            title={projectData?.projectTitle}
            description={projectData?.projectDescription}
            name={projectData?.projectAuthor}
            type="article"
          />
          <div className="bg-white md:w-1/2 2xl:w-1/3 ">
            <h3 className=" pt-4 px-4  md:pt-8 md:px-6 text-xl md:text-2xl font-montserrat-bold">
              {projectData?.projectTitle}
            </h3>
            <p className="p-4 md:p-6">{projectData?.projectDescription}</p>
            <img className="w-full " src={projectData?.projectImage} alt="" />
            <div className="p-4 md:p-6">
              {documentToReactComponents(
                projectData?.projectRichText,
                RICHTEXT_OPTIONS
              )}
            </div>
          </div>
        </>
      ) : (
        <ProjectArticleSkeleton />
      )}
    </div>
  );
}

function ProjectArticleSkeleton() {
  return (
    <div className="bg-white w-full md:w-1/2 2xl:w-1/3">
      <h3 className=" pt-4 px-4  md:pt-8 md:px-6 text-xl md:text-2xl font-montserrat-bold">
        <Skeleton count={0.7} />
      </h3>
      <p className="p-4 md:p-6">
        <Skeleton count={1.5} />
      </p>
      <div className=" w-full h-2/6 bg-skeleton animate-pulse"></div>
      <div className="p-4 md:p-6">
        <Skeleton count={4.5} />
      </div>
    </div>
  );
}
