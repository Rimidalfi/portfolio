import { useState, useEffect, ReactElement } from "react";
import getVita from "../utils/getVita";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const work: ReactElement = (
  <svg
    className=" size-6 ml-4"
    data-slot="icon"
    aria-hidden="true"
    fill="none"
    strokeWidth={1.5}
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const education: ReactElement = (
  <svg
    className=" size-6 ml-4"
    data-slot="icon"
    aria-hidden="true"
    fill="none"
    strokeWidth="1.5"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
);
export interface VitaData {
  vitaTitle?: string;
  vitaDescription?: string;
  vitaStartDate?: string;
  vitaEndDate?: string;
  vitaType?: boolean;
  vitaImage?: string;
  vitaDuration?: string;
}
export interface Props {
  entryId: string;
  key: string;
}
export interface SkeletonProps {
  type: "education" | "work";
}

export default function VitaPoint(props: Props) {
  const [vitaData, setVitaData] = useState<VitaData>();
  useEffect(() => {
    getVita(props.entryId, setVitaData);
  }, []);
  return (
    <div className={vitaData?.vitaType ? "work" : "education"}>
      <span className=" absolute  left-2 mt-40 rounded-full size-3 bg-zinc-500 md:right-0 md:left-0 md:mx-auto md:size-4"></span>
      <div className="relative bg-white w-full md:w-2/3 xl:w-1/2 m-4 overflow-hidden shadow-lg  rounded-3xl  hover:scale-101 hover:shadow-2xl ease-in duration-300">
        <img
          className="w-full h-40 object-cover"
          src={vitaData?.vitaImage}
          alt=""
        />
        <div className="flex flex-col py-4 text-zinc-800">
          <p className="flex font-montserrat-semibold text-white absolute top-0 p-3 backdrop-blur-sm bg-black/20 mt-4 ml-4 rounded-full">
            {vitaData?.vitaTitle}
            <span>{vitaData?.vitaType ? education : work}</span>
          </p>
          <p className="font-montserrat-italic text-zinc-400 px-6 text-md mb-2">
            {vitaData?.vitaDuration}
          </p>
          <p className="px-6 text-md">{vitaData?.vitaDescription}</p>
        </div>
      </div>
    </div>
  );
}
export function VitaPointSkeleton(prop: SkeletonProps) {
  return (
    <div className={prop.type}>
      <span className=" absolute  left-2 mt-40 rounded-full size-3 bg-zinc-500 md:right-0 md:left-0 md:mx-auto md:size-4"></span>
      <div className="flex flex-col bg-white overflow-hidden h-full w-full md:w-2/3 xl:w-1/2 m-4 relative shadow-lg  rounded-3xl">
        <div className="w-full h-36 object-cover bg-skeleton animate-pulse"></div>
        <div className="flex absolute top-0 backdrop-blur-sm bg-black/10 mt-4 ml-4 rounded-full h-10 w-2/3"></div>
        <p className="px-4 pt-2  text-gray-500">
          <Skeleton count={0.33} />
        </p>
        <p className="px-4 py-4  text-gray-500">
          <Skeleton count={1.5} />
        </p>
      </div>
    </div>
  );
}
