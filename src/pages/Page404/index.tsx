import { Link } from "react-router-dom";
import path from "../../routes/pathConstants";

export default function Page404() {
  return (
    <>
      <div> ❌ 404 Page not found ❌ </div>
      <button>
        <Link to={path.HOME}>click here</Link>
      </button>
    </>
  );
}
