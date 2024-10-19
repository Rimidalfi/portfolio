import { useState, useEffect } from "react";
import getSkills from "../utils/getSkills";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface skillProps {
  skill: string;
  size: string;
}

export interface SkillData {
  skill: string;
  level: string;
  img: string | null;
}

function SingleSkill({ skill, size }: skillProps) {
  let tailwindInstruction = "";
  switch (size) {
    case "1":
      tailwindInstruction =
        "text-xs inline-block px-6 py-3 text-center text-white align-middle transition-all rounded-full cursor-pointer leading-pro ease-soft-in tracking-tight-soft shadow-soft-md drop-shadow-xl hover:scale-110  hover:rotate-2 active:opacity-85  hover:shadow-lg hover:bg-zinc-900 hover:shadow-blue-500/25";
      break;
    case "2":
      tailwindInstruction =
        "text-xl inline-block px-6 py-3 text-center text-white align-middle transition-all rounded-full cursor-pointer leading-pro ease-soft-in tracking-tight-soft shadow-soft-md drop-shadow-xl hover:scale-110 hover:rotate-2 active:opacity-85  hover:shadow-lg hover:bg-zinc-900 hover:shadow-indigo-500/25";
      break;
    case "3":
      tailwindInstruction =
        "text-4xl inline-block px-6 py-3 text-center text-white align-middle transition-all rounded-full cursor-pointer leading-pro ease-soft-in tracking-tight-soft shadow-soft-md drop-shadow-xl hover:scale-110 hover:rotate-[-3deg] active:opacity-85  hover:shadow-lg hover:bg-zinc-900 hover:shadow-purple-500/25";
      break;
  }

  return <div className={tailwindInstruction}>{skill}</div>;
}

export default function Skillcard() {
  const [skillData, setSkillData] = useState<SkillData[]>([]);
  useEffect(() => {
    getSkills(setSkillData);
  }, []);
  const skillEntries = skillData.map((entry) => {
    return (
      <div key={`${entry.skill}_${entry.level}`}>
        <SingleSkill skill={entry.skill} size={entry.level} />
        {/* icon rendering */}
        {/* {entry.img ? (
          <img
            src={entry.img}
            alt=""
            className="transition-all drop-shadow-xl hover:scale-105 hover:rotate-2 sm:size-24"
          />
        ) : null} */}
      </div>
    );
  });
  return (
    <div className=" min:h-52 md:min:h-80 w-full">
      <div className="heading-container">
        <h3 className="heading">Skills</h3>
      </div>
      {skillData.length !== 0 ? (
        <div className="flex flex-wrap flex-col justify-center items-center bg-gradient-to-tr from-zinc-900 to-zinc-700 ">
          <div className="my-4 w-10/12 md:w-8/12 lg:w-6/12 flex flex-wrap justify-center items-center z-0 ">
            {skillEntries}
            {/* <button className=" inline-block px-6 py-3 text-center text-white align-middle transition-all rounded-full cursor-pointer leading-pro ease-soft-in tracking-tight-soft shadow-soft-md drop-shadow-xl hover:scale-110 focus:scale-110 focus:rotate-2 hover:rotate-2 active:opacity-85 focus:shadow-lg focus:bg-zinc-900 focus:shadow-blue-500/25 hover:shadow-lg hover:bg-zinc-900 hover:shadow-blue-500/25">
          test
        </button>
        <button className=" bg-fuchsia-400 rounded-full p-2  ease-in focus:bg-green-800">
          test2
        </button> */}
          </div>
        </div>
      ) : (
        <SkillcardSkeleton />
      )}
    </div>
  );
}

function SkillcardSkeleton() {
  return (
    <div className="flex justify-center items-center bg-white ">
      <div className="my-4 w-10/12 md:w-8/12 lg:w-6/12 flex flex-wrap justify-evenly gap-6">
        <Skeleton width={"8rem"} height={"2rem"} borderRadius={"2rem"} />
        <Skeleton width={"8rem"} height={"2rem"} borderRadius={"2rem"} />
        <Skeleton width={"8rem"} height={"2rem"} borderRadius={"2rem"} />
        <Skeleton width={"8rem"} height={"2rem"} borderRadius={"2rem"} />
        <Skeleton width={"8rem"} height={"2rem"} borderRadius={"2rem"} />
        <Skeleton width={"8rem"} height={"2rem"} borderRadius={"2rem"} />
      </div>
    </div>
  );
}
