import React from "react";
import pathConstants from "./pathConstants";

type RouteObject = { path: string; element: JSX.Element };

const Home = React.lazy(() => import("../components/Home"));
const Projects = React.lazy(() => import("../components/Projects"));
const Contact = React.lazy(() => import("../components/Contact"));

const routes: RouteObject[] = [
  { path: pathConstants.HOME, element: <Home /> },
  { path: pathConstants.PROJECTS, element: <Projects /> },
  { path: pathConstants.CONTACT, element: <Contact /> },
];
export default routes;
