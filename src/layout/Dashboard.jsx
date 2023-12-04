import useAuth from "../hooks/useAuth";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { SlLogout } from "react-icons/sl";
import { GrView, GrContact, GrFavorite, GrHome } from "react-icons/gr";
import {
  MdAdminPanelSettings,
  MdOutlineManageAccounts,
  MdWorkspacePremium,
  MdContacts,
} from "react-icons/md";
import { Button } from "flowbite-react";
import Swal from "sweetalert2";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const { user, loading, logOut } = useAuth();
  const navigate = useNavigate();
  const [isAdmin] = useAdmin();

  if (loading) {
    return (
      <div className="w-8 h-8 border-4 border-dashed rounded-full animate-spin border-violet-600 mx-auto"></div>
    );
  }

  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log("logged out");
        Swal.fire({
          icon: "success",
          title: "Logged out",
          showConfirmButton: false,
          timer: 1500,
        });

        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="flex max-w-7xl mx-auto">
      <div className="w-64 min-h-screen">
        <div className="h-full p-3 space-y-2 w-60 bg-gray-50 text-gray-800">
          <div className="flex items-center p-2 space-x-4">
            <img
              src={user?.photoURL}
              alt=""
              className="w-12 h-12 rounded-full bg-gray-500"
            />
            <div>
              <h2 className="text-lg font-semibold">{user?.displayName}</h2>
              <span className="flex items-center space-x-1">
                <span className="text-xs text-gray-600">{user?.email}</span>
              </span>
            </div>
          </div>
          <div className="divide-y divide-gray-400">
            {/* normal user */}
            <ul className="pt-2 pb-4 space-y-1 text-sm">
              {isAdmin ? (
                <>
                  <li className=" text-gray-900">
                    <NavLink
                      style={({ isActive, isPending, isTransitioning }) => {
                        return {
                          fontWeight: isActive ? "bold" : "",
                          color: isPending ? "red" : "black",
                          viewTransitionName: isTransitioning ? "slide" : "",
                        };
                      }}
                      to="/dashboard/adminDashboard"
                      className="flex items-center p-2 space-x-3 rounded-md"
                    >
                      <MdAdminPanelSettings className="text-lg" />
                      <span>Admin Dashboard</span>
                    </NavLink>
                  </li>

                  <li className=" text-gray-900">
                    <NavLink
                      style={({ isActive, isPending, isTransitioning }) => {
                        return {
                          fontWeight: isActive ? "bold" : "",
                          color: isPending ? "red" : "black",
                          viewTransitionName: isTransitioning ? "slide" : "",
                        };
                      }}
                      to="/dashboard/manageUsers"
                      className="flex items-center p-2 space-x-3 rounded-md"
                    >
                      <MdOutlineManageAccounts className="text-lg" />
                      <span> Manage Users</span>
                    </NavLink>
                  </li>

                  <li className=" text-gray-900">
                    <NavLink
                      style={({ isActive, isPending, isTransitioning }) => {
                        return {
                          fontWeight: isActive ? "bold" : "",
                          color: isPending ? "red" : "black",
                          viewTransitionName: isTransitioning ? "slide" : "",
                        };
                      }}
                      to="/dashboard/approvePremium"
                      className="flex items-center p-2 space-x-3 rounded-md"
                    >
                      <MdWorkspacePremium className="text-lg" />
                      <span>Approve Premium</span>
                    </NavLink>
                  </li>

                  <li className=" text-gray-900">
                    <NavLink
                      style={({ isActive, isPending, isTransitioning }) => {
                        return {
                          fontWeight: isActive ? "bold" : "",
                          color: isPending ? "red" : "black",
                          viewTransitionName: isTransitioning ? "slide" : "",
                        };
                      }}
                      to="/dashboard/approveContactRequest"
                      className="flex items-center p-2 space-x-3 rounded-md"
                    >
                      <MdContacts className="text-lg" />
                      <span> Approve Contact Request</span>
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className=" text-gray-900">
                    <NavLink
                      style={({ isActive, isPending, isTransitioning }) => {
                        return {
                          fontWeight: isActive ? "bold" : "",
                          color: isPending ? "red" : "black",
                          viewTransitionName: isTransitioning ? "slide" : "",
                        };
                      }}
                      to="/dashboard/editBiodata"
                      className="flex items-center p-2 space-x-3 rounded-md"
                    >
                      <FaRegEdit />
                      <span>Edit Biodata</span>
                    </NavLink>
                  </li>

                  <li className=" text-gray-900">
                    <NavLink
                      style={({ isActive, isPending, isTransitioning }) => {
                        return {
                          fontWeight: isActive ? "bold" : "",
                          color: isPending ? "red" : "black",
                          viewTransitionName: isTransitioning ? "slide" : "",
                        };
                      }}
                      to="/dashboard/viewBiodata"
                      className="flex items-center p-2 space-x-3 rounded-md"
                    >
                      <GrView />
                      <span>View Biodata</span>
                    </NavLink>
                  </li>

                  <li className=" text-gray-900">
                    <NavLink
                      style={({ isActive, isPending, isTransitioning }) => {
                        return {
                          fontWeight: isActive ? "bold" : "",
                          color: isPending ? "red" : "black",
                          viewTransitionName: isTransitioning ? "slide" : "",
                        };
                      }}
                      to="/dashboard/myContactRequest"
                      className="flex items-center p-2 space-x-3 rounded-md"
                    >
                      <GrContact />
                      <span>My contact request</span>
                    </NavLink>
                  </li>

                  <li className=" text-gray-900">
                    <NavLink
                      style={({ isActive, isPending, isTransitioning }) => {
                        return {
                          fontWeight: isActive ? "bold" : "",
                          color: isPending ? "red" : "black",
                          viewTransitionName: isTransitioning ? "slide" : "",
                        };
                      }}
                      to="/dashboard/favoriteBiodata"
                      className="flex items-center p-2 space-x-3 rounded-md"
                    >
                      <GrFavorite />
                      <span>Favorite Biodata</span>
                    </NavLink>
                  </li>
                </>
              )}
            </ul>

            <ul className="pt-6 space-y-1">
              <li className=" text-gray-900">
                <NavLink to="/" className="flex items-center   ">
                  <Button outline>
                    <GrHome className="mr-2 h-4 w-6" />
                    Home
                  </Button>
                </NavLink>
              </li>
              <li>
                <Button onClick={handleLogout} outline>
                  <SlLogout className="mr-2 h-4 w-5" />
                  Logout
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
