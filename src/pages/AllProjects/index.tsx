import Projects from "../../components/Projects";
export default function AllProjects() {
  return (
    <div className="py-1">
      <Projects all={true} />
    </div>
  );
}
