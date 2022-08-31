import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import NavItem from "./NavItem";
import { navLinks } from "./navLinks";

const Navbar = () => {
  return (
    <div className="container mx-auto py-5 flex items-center justify-between">
      <div>
        <img src={Logo} alt="logo" className="home-logo" />
      </div>

      {/* nav links */}
      <ul className="flex items-center">
        {navLinks.map((item, index) => (
          <NavItem key={index} item={item} />
        ))}
      </ul>

      <Link to="/login" className="font-medium btn btn-primary">
        Login / Register
      </Link>
    </div>
  );
};

export default Navbar;
