import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import AboutUs from "../pages/aboutUs/AboutUs";
import BioDatas from "../pages/bioDatas/BioDatas";
import ContactUs from "../pages/contactUs/ContactUs";
import Login from "../pages/login/Login";
import ErrorPage from "../pages/erropage/ErrorPage";
import Registration from "../pages/registration/Registration";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
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
        element: (
          <PrivateRoute>
            <BioDatas />
          </PrivateRoute>
        ),
      },
      {
        path: "contactUs",
        element: <ContactUs />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "registration",
    element: <Registration />,
  },
]);
