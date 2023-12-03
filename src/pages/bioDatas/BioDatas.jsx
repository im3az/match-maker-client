import useBiodata from "../../hooks/useBiodata";
import logo from "../../assets/logo.png";

const BioDatas = () => {
  const [allBiodata] = useBiodata();
  return (
    <div>
      {/* <h2>Biodatas: {allBiodata.length}</h2> */}
      <div className="flex max-w-7xl mx-auto">
        <div className="w-64 min-h-screen">
          <div className="h-full p-3 space-y-2 w-60 bg-gray-50 text-gray-800">
            <div className="flex items-center p-2 ">
              {/* <img src={logo} className="h-14 " alt="Logo" />
              <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                Match Maker
              </span>
              <div>
                <h2 className="text-lg font-semibold">{user?.displayName}</h2>
                <span className="flex items-center space-x-1">
                  <span className="text-xs text-gray-600">{user?.email}</span>
                </span>
              </div> */}
              <h2 className="text-3xl ">Filters</h2>
            </div>
            <div className="divide-y divide-gray-400">
              <ul className="pt-2 pb-4 space-y-1 text-sm">
                <li className=" text-gray-900">
                  {/* <NavLink
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
                  </NavLink> */}
                </li>

                <li className=" text-gray-900">
                  {/* <NavLink
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
                  </NavLink> */}
                </li>

                <li className=" text-gray-900">
                  {/* <NavLink
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
                  </NavLink> */}
                </li>

                <li className=" text-gray-900">
                  {/* <NavLink
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
                  </NavLink> */}
                </li>
              </ul>

              <ul className="pt-6 space-y-1">
                <li className=" text-gray-900">
                  {/* <NavLink to="/" className="flex items-center   ">
                    <Button outline>
                      <GrHome className="mr-2 h-4 w-6" />
                      Home
                    </Button>
                  </NavLink> */}
                </li>
                <li>
                  {/* <Button outline>
                    <SlLogout className="mr-2 h-4 w-5" />
                    Logout
                  </Button> */}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex-1">
          {/* <Outlet /> */}
          <h2>All biodatas: {allBiodata.length}</h2>
        </div>
      </div>
    </div>
  );
};

export default BioDatas;
