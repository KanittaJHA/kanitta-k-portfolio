import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "../src/components/Layout";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import SplashScreen from "./pages/SplashScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SplashScreen />,
  },
  {
    path: "/home",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about-me", element: <AboutMe /> },
      { path: "projects", element: <Projects /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
