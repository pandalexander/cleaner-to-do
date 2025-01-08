import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Home from "./custom-components/Home.jsx";
import Services from "./custom-components/Services.jsx";

import About from "./custom-components/About.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },

      { path: "home", element: <Home /> },
      { path: "services", element: <Services /> },
      { path: "about", element: <About /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
