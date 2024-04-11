interface skillProps {
  skill: string;
  size: string;
}

function SingleSkill({ skill, size }: skillProps) {
  let tailwindInstruction = "";
  switch (size) {
    case "s":
      tailwindInstruction =
        "text-xs inline-block px-6 py-3 text-center text-white align-middle transition-all rounded-full cursor-pointer leading-pro ease-soft-in tracking-tight-soft shadow-soft-md hover:scale-110 hover:rotate-2 active:opacity-85 drop-shadow-xl hover:shadow-lg hover:bg-zinc-900 hover:shadow-blue-500/25";
      break;
    case "m":
      tailwindInstruction =
        "text-xl inline-block px-6 py-3 text-center text-white align-middle transition-all rounded-full cursor-pointer leading-pro ease-soft-in tracking-tight-soft shadow-soft-md hover:scale-110 hover:rotate-2 active:opacity-85 drop-shadow-xl hover:shadow-lg hover:bg-zinc-900 hover:shadow-indigo-500/25";
      break;
    case "l":
      tailwindInstruction =
        "text-4xl inline-block px-6 py-3 text-center text-white align-middle transition-all rounded-full cursor-pointer leading-pro ease-soft-in tracking-tight-soft shadow-soft-md hover:scale-110 hover:rotate-[-3deg] active:opacity-85 drop-shadow-xl hover:shadow-lg hover:bg-zinc-900 hover:shadow-purple-500/25";
      break;
  }

  return <div className={tailwindInstruction}>{skill}</div>;
}

export default function Skillcard() {
  return (
    <div className="flex flex-col justify-center items-center h-52 md:h-80 m-4 w-screen bg-gradient-to-tr from-zinc-900 to-zinc-700 ">
      <div className=" w-10/12 md:w-8/12 lg:w-6/12">
        <SingleSkill skill={"Typescript"} size={"s"} />
        <SingleSkill skill={"Docker"} size={"s"} />
        <SingleSkill skill={"Python"} size={"l"} />
        <SingleSkill skill={"Photoshop"} size={"s"} />
        <SingleSkill skill={"HTML"} size={"m"} />
      </div>
    </div>
  );
}
