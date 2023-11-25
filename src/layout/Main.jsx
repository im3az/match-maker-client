import { Outlet } from "react-router-dom";
import NavbarComponent from "../components/Navbar/NavbarComponent";
import FooterComponent from "../components/Footer/FooterComponent";

const Main = () => {
  return (
    <div>
      <NavbarComponent />
      <Outlet />
      <FooterComponent />
    </div>
  );
};

export default Main;
