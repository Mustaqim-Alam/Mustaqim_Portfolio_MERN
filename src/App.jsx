import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

const Home = lazy(() => import("./Pages/Homepage"));
const Contact = lazy(() => import("./Pages/Contactpage"));
const Projects = lazy(() => import("./Pages/Projectpage"));

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "contact",
      element: <Contact />,
    },
    {
      path: "projects",
      element: <Projects />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
