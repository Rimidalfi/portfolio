import { useParams } from "react-router-dom";
import ProjectArticle from "../../components/ProjectArticle";

export default function SingleProject() {
  const { id } = useParams();
  return (
    <>
      <ProjectArticle projectURL={id} />
    </>
  );
}
