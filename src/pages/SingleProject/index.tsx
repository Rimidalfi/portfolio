import { useParams } from "react-router-dom";
export default function SingleProject() {
  const { id } = useParams();
  console.log("SingleProject ID: ", id);
  return (
    <>
      <div>Single Project with id {id}</div>
    </>
  );
}
