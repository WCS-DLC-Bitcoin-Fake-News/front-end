import { Link, NavLink } from "react-router-dom";
import LOGO from "../img/Logo.svg"
const Navbar = () => {
  let isLoggedIn = localStorage.getItem("token");
  const handleDisconnect = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
  };

  return (
    <nav className="md:px-32 h-22 flex justify-between items-center bg-navbarbg">
      <div className="items-start	">
        <Link to="/">
          <img 
            style={{ width: "65px", opacity: 0.85 }}
            alt="Logo"
            src={LOGO}
            onclick="window.open(this.src)"
          />
        </Link>{" "}
      </div>

      <ul className="w-60 flex items-center justify-between font-semibold text-sm tracking-wide text-primary">
        <li>
          <NavLink to="/about" activeClassName="text-secondary" className=" p-1	 hover:bg-blue-100 dark:hover:bg-blue-900 rounded-lg text-base">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="text-secondary" className=" p-1	 hover:bg-blue-100 dark:hover:bg-blue-900 rounded-lg text-base">
            Contact
          </NavLink>
        </li>
        <li>

          <NavLink to="/help" activeClassName="text-secondary"className=" p-1	 hover:bg-blue-100 rounded-lg text-base">
            Help
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/post"
            activeClassName="text-secondary"
            className=" p-1	 hover:bg-blue-100 rounded-lg text-base"
          >
            Post
          </NavLink>
        </li>
        <li>
          <NavLink to="/article" activeClassName="text-secondary">
            Article
          </NavLink>
        </li>
        <li>
          <NavLink to="/upvote" activeClassName="text-secondary">
            Vote
          </NavLink>
        </li>
      </ul>
      <ul className="w-40 flex items-center justify-between  ">
        <button className="p-2	 hover:bg-blue-200 rounded-lg text-base w-23 h-11 text-secondary font-bold tracking-wide2">
          Sign In
        </button>
        <Link to="signup">
          <button className="p-1 hover:bg-blue-900 rounded-lg text-base w-23 h-11 font-bold tracking-wide2 bg-primary text-white">
            Sign Up
          </button>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
