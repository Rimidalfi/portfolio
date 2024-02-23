import Hero from "../../components/Hero";
export default function Home() {
  const projects: string[] = ["Project One", "Project Two", "Project Three"];
  function prooojects(name: string, index: number) {
    return (
      <div
        key={index}
        className={`h-60 ${index % 2 === 0 ? "bg-pink-100" : "bg-pink-300"}`}
      >
        <h1 className="text-3xl font-bold text-center">{name}</h1>
      </div>
    );
  }
  const listOfProjcts = projects.map(prooojects);
  return (
    <>
      {/* <div className="text-4xl text-center p-32 bg-green-900 text-white ">
        Hero 🚀
      </div> */}
      <Hero />
      <div className="text-4xl text-center p-32 bg-gray-400 text-white ">
        Skills 🛠️
      </div>
      {listOfProjcts}
      <div className="text-4xl text-center p-32 bg-gray-400 text-white ">
        Vita 📝
      </div>
    </>
  );
}
