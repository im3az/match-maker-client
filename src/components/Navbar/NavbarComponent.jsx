import { Avatar, Dropdown, Navbar } from "flowbite-react";
import logo from "../../assets/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const NavbarComponent = () => {
  const { user, loading, logOut } = useAuth();
  const navigate = useNavigate();

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
                  img={user.photoURL}
                  rounded
                  bordered
                />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">{user.displayName}</span>
                <span className="block truncate text-sm font-medium">
                  {user.email}
                </span>
              </Dropdown.Header>
              <Dropdown.Item>
                <NavLink to="/dashboard">Dashboard</NavLink>
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
