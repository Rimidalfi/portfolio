import React from "react";
import path from "./pathConstants";

type RouteObject = { path: string; element: JSX.Element };

const Home = React.lazy(() => import("../pages/Home"));
const Projects = React.lazy(() => import("../pages/Projects"));
const Contact = React.lazy(() => import("../pages/Contact"));

const routes: RouteObject[] = [
  { path: path.HOME, element: <Home /> },
  { path: path.PROJECTS, element: <Projects /> },
  { path: path.CONTACT, element: <Contact /> },
];
export default routes;
