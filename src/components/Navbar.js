import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="h-22 flex justify-between items-center">
      <div className="text-2xl text-secondary font-bold">
        <Link to="/">LOGO</Link>
      </div>
      <ul className="w-48 flex items-center justify-between font-semibold text-sm tracking-wide text-primary">
        <li>
          <NavLink to="/about" activeClassName="text-secondary">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="text-secondary">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/help" activeClassName="text-secondary">
            Help
          </NavLink>
        </li>
      </ul>
      <ul className="w-40 flex items-center justify-between  ">
        <button className="text-secondary font-bold tracking-wide2">
          Sign In
        </button>
        <button className="w-23 h-11 font-bold tracking-wide2 bg-primary text-white">
          <Link to="signup">Sign Up</Link>
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
