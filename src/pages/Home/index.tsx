import Hero from "../../components/Hero";
import Vita from "../Vita";
// import FeaturedProjects from "../../components/FeaturedProjects";
import Projects from "../../components/Projects";
export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <div className="text-4xl text-center p-32 bg-gray-400 text-white ">
          Skills 🛠️
        </div>
        <Projects all={false} />
        <Vita />
      </div>
    </>
  );
}
