import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import AboutUs from "../pages/aboutUs/AboutUs";
import BioDatas from "../pages/bioDatas/BioDatas";
import ContactUs from "../pages/contactUs/ContactUs";
import Login from "../pages/login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "aboutUs",
        element: <AboutUs />,
      },
      {
        path: "bioDatas",
        element: <BioDatas />,
      },
      {
        path: "contactUs",
        element: <ContactUs />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);
