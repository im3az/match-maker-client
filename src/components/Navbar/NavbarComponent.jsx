import { Avatar, Dropdown, Navbar } from "flowbite-react";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

const NavbarComponent = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="aboutUs">About us</NavLink>
      </li>
      <li>
        <NavLink to="bioData">Bio-data</NavLink>
      </li>
      <li>
        <NavLink to="contactUs">Contact us</NavLink>
      </li>
      <li>
        <NavLink to="contactUs">Login</NavLink>
      </li>
    </>
  );

  return (
    <div className="max-w-7xl mx-auto py-2">
      <Navbar fluid rounded>
        <Navbar.Brand href="/">
          <img src={logo} className="mr-3 h-6 sm:h-9" alt="Logo" />
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
        <Navbar.Collapse>{navLinks}</Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
