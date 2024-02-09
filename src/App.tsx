import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import routes from "./routes";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <div>PLACEHOLDER 404</div>,
      children: routes,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
