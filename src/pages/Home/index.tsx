export default function Home() {
  const projects: string[] = [
    "Project One",
    "Project Two",
    "Project Three",
    "Project Four",
    "Project Five",
    "Project Six",
    "Project Seven",
    "Project Eight",
    "Project Nine",
    "Project Ten",
  ];
  function prooojects(name: string, index: number) {
    return (
      <div key={index} className="h-60 bg-pink-200 ">
        <h1 className="text-3xl font-bold text-center">{name}</h1>
      </div>
    );
  }
  const listOfProjcts = projects.map(prooojects);
  return (
    <>
      <div className="text-4xl text-center p-32 bg-green-900 text-white">
        HERO 🚀
      </div>
      {listOfProjcts}
    </>
  );
}
