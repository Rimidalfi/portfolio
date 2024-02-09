import React from "react";
import path from "./pathConstants";

type RouteObject = { path: string; element: JSX.Element };

const Home = React.lazy(() => import("../components/Home"));
const Projects = React.lazy(() => import("../components/Projects"));
const Contact = React.lazy(() => import("../components/Contact"));

const routes: RouteObject[] = [
  { path: path.HOME, element: <Home /> },
  { path: path.PROJECTS, element: <Projects /> },
  { path: path.CONTACT, element: <Contact /> },
];
export default routes;
