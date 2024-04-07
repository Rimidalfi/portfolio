import React from "react";
import path from "./pathConstants";

type RouteObject = { path: string; element: JSX.Element };

const Home = React.lazy(() => import("../pages/Home"));
const Projects = React.lazy(() => import("../pages/AllProjects"));
const Contact = React.lazy(() => import("../pages/Contact"));
const Vita = React.lazy(() => import("../pages/Vita"));
const Project = React.lazy(() => import("../pages/SingleProject"));
const Legals = React.lazy(() => import("../pages/Legals"));
const Imprint = React.lazy(() => import("../pages/Imprint"));

const routes: RouteObject[] = [
  { path: path.HOME, element: <Home /> },
  { path: path.PROJECTS, element: <Projects /> },
  { path: path.CONTACT, element: <Contact /> },
  { path: path.VITA, element: <Vita /> },
  { path: path.PROJECT, element: <Project /> },
  { path: path.LEGALS, element: <Legals /> },
  { path: path.IMPRINT, element: <Imprint /> },
];
export default routes;
