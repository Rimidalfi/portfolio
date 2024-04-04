import { Link } from "react-router-dom";
import path from "../../routes/pathConstants";

export default function Page404() {
  return (
    <div className="flex flex-col items-center justify-center text-2xl bg-gradient-to-tr from-slate-400 h-screen">
      <div className="flex flex-col items-center bg-slate-100 p-4 rounded-xl shadow-lg">
        <h1 className="">Page not found 😵‍💫🔎</h1>
        <Link to={path.HOME} className=" font-montserrat-bold text-red-400">
          👉 click here 👈
        </Link>
      </div>
    </div>
  );
}
