import Projects from "../../components/Projects";
export default function AllProjects() {
  return (
    <div className="pt-0.5 pb-4 md:pb-6 w-full">
      <Projects all={true} />
    </div>
  );
}
