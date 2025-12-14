import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Publications from "./pages/Publications/Publications";
import Objects from "./pages/Objects/Objects";
import Digital from "./pages/Digital/Digital";
import About from "./pages/About/About";
import ScrollBackground from "./hooks/backgroundScroll";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ScrollBackground />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "publications", element: <Publications /> },
      { path: "digital", element: <Digital /> },
      { path: "objects", element: <Objects /> },
      { path: "contact", element: <Contact /> },
      { path: "about", element: <About /> },
    ],
  },
]);

export default router;
