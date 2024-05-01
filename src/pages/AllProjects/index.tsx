import Projects from "../../components/Projects";
import SEO from "../../components/SEO";
export default function AllProjects() {
  return (
    <div className="pt-0.5 pb-4 md:pb-6 w-full">
      <SEO
        title="Projects"
        description="Projects of Wladimir Janowisch"
        name="Wladimir Janowitsch"
        type="feed"
      />
      <Projects all={true} />
    </div>
  );
}
