import { Avatar, Dropdown, Navbar } from "flowbite-react";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

const NavbarComponent = () => {
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
      <li>
        <NavLink
          to="login"
          className={({ isActive, isTransitioning }) =>
            [
              isActive ? "active font-bold text-blue-700 text-lg" : " text-lg",
              isTransitioning ? "transitioning" : "",
            ].join(" ")
          }
        >
          Login
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
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          {navLinks}

          {/* <Navbar.Link href="/" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="aboutUs">About us</Navbar.Link>
          <Navbar.Link href="bioDatas">Bio-data</Navbar.Link>
          <Navbar.Link href="contactUs">Contact us</Navbar.Link>
          <Navbar.Link href="login">Login</Navbar.Link> */}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
