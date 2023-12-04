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
import Dashboard from "../layout/Dashboard";
import EditBiodata from "../pages/dashboard/User/EditBiodata/EditBiodata";
import ViewBiodata from "../pages/dashboard/User/ViewBiodata/ViewBiodata";
import MyContactRequest from "../pages/dashboard/User/MyContactRequest/MyContactRequest";
import FavoriteBiodata from "../pages/dashboard/User/FavoriteBiodata/FavoriteBiodata";
import AdminDashboard from "../pages/dashboard/Admin/AdminDashboard/AdminDashboard";
import ManageUsers from "../pages/dashboard/Admin/ManageUsers/ManageUsers";
import ApprovePremium from "../pages/dashboard/Admin/ApprovePremium/ApprovePremium";
import ApproveContactRequest from "../pages/dashboard/Admin/ApproveContactRequest/ApproveContactRequest";
import AdminRoute from "./AdminRoute";
import BioDataDetails from "../pages/bioDataDetails/BioDataDetails";

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
        path: "/bioDataDetails/:id",
        element: (
          <PrivateRoute>
            <BioDataDetails />
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
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      // normal user routes
      {
        path: "editBiodata",
        element: <EditBiodata />,
      },
      {
        path: "viewBiodata",
        element: <ViewBiodata />,
      },
      {
        path: "myContactRequest",
        element: <MyContactRequest />,
      },
      {
        path: "favoriteBiodata",
        element: <FavoriteBiodata />,
      },

      // admin routes

      {
        path: "adminDashboard",
        element: (
          <AdminRoute>
            <AdminDashboard />
          </AdminRoute>
        ),
      },
      {
        path: "manageUsers",
        element: (
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        ),
      },
      {
        path: "approvePremium",
        element: (
          <AdminRoute>
            <ApprovePremium />
          </AdminRoute>
        ),
      },
      {
        path: "approveContactRequest",
        element: (
          <AdminRoute>
            <ApproveContactRequest />
          </AdminRoute>
        ),
      },
    ],
  },
]);
