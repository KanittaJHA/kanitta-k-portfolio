import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
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
    element: <Layout />,
    children: [
      { path: "/home", element: <Home /> },
      { path: "/about-me", element: <AboutMe /> },
      { path: "/projects", element: <Projects /> },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
