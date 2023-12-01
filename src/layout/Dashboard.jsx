import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { FaRegEdit } from "react-icons/fa";
import { SlLogout } from "react-icons/sl";
import { GrView, GrContact, GrFavorite } from "react-icons/gr";

const Dashboard = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="w-8 h-8 border-4 border-dashed rounded-full animate-spin border-violet-600 mx-auto"></div>
    );
  }

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
          <div className="divide-y divide-gray-300">
            <ul className="pt-2 pb-4 space-y-1 text-sm">
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
            </ul>
            <ul className="pt-4 pb-2 space-y-1 text-sm">
              <li>
                <NavLink
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <SlLogout />
                  <span>Logout</span>
                </NavLink>
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
