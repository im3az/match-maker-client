import { Avatar, Dropdown, Navbar } from "flowbite-react";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const NavbarComponent = () => {
  const { user, loading, logOut } = useAuth();

  // if (loading) {
  //   return (
  //     <div className="w-8 h-8 border-4 border-dashed rounded-full animate-spin border-violet-600 mx-auto"></div>
  //   );
  // }

  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log("logged out");
      })
      .catch((error) => console.log(error));
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isTransitioning }) =>
            [
              isActive ? "active font-bold text-blue-700 text-lg" : "text-lg",
              isTransitioning ? "transitioning" : "",
            ].join(" ")
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="aboutUs"
          className={({ isActive, isTransitioning }) =>
            [
              isActive ? "active font-bold text-blue-700 text-lg" : " text-lg",
              isTransitioning ? "transitioning" : "",
            ].join(" ")
          }
        >
          About us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="bioDatas"
          className={({ isActive, isTransitioning }) =>
            [
              isActive ? "active font-bold text-blue-700 text-lg" : " text-lg",
              isTransitioning ? "transitioning" : "",
            ].join(" ")
          }
        >
          Bio-data
        </NavLink>
      </li>
      <li>
        <NavLink
          to="contactUs"
          className={({ isActive, isTransitioning }) =>
            [
              isActive ? "active font-bold text-blue-700 text-lg" : " text-lg",
              isTransitioning ? "transitioning" : "",
            ].join(" ")
          }
        >
          Contact us
        </NavLink>
      </li>

      {/* {user ? (
        <li></li>
      ) : (
        <li>
          <NavLink
            to="login"
            className={({ isActive, isTransitioning }) =>
              [
                isActive
                  ? "active font-bold text-blue-700 text-lg"
                  : " text-lg",
                isTransitioning ? "transitioning" : "",
              ].join(" ")
            }
          >
            Login
          </NavLink>
        </li>
      )} */}
    </>
  );

  return (
    <div className="max-w-7xl mx-auto py-2">
      <Navbar fluid rounded>
        <Navbar.Brand href="/">
          <img src={logo} className="h-14 " alt="Logo" />
          <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
            Match Maker
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          {user ? (
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar
                  alt="User settings"
                  img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  rounded
                  bordered
                />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">Bonnie Green</span>
                <span className="block truncate text-sm font-medium">
                  name@flowbite.com
                </span>
              </Dropdown.Header>
              <Dropdown.Item>
                <NavLink>Dashboard</NavLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <NavLink>Settings</NavLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <NavLink>Earnings</NavLink>
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={handleLogout}>Log out</Dropdown.Item>
            </Dropdown>
          ) : (
            <li>
              <NavLink
                to="login"
                className={({ isActive, isTransitioning }) =>
                  [
                    isActive
                      ? "active font-bold text-blue-700 text-lg"
                      : "text-lg",
                    isTransitioning ? "transitioning" : "",
                  ].join(" ")
                }
              >
                Login
              </NavLink>
            </li>
          )}
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>{navLinks}</Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
