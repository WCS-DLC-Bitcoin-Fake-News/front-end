import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  let isLoggedIn = localStorage.getItem("token")
  const handleDisconnect = (e) => {
    e.preventDefault()
    localStorage.removeItem('token');
  } 
  
  return (
    <nav className="md:px-32 h-22 flex justify-between items-center bg-navbarbg">
      <div className="text-2xl text-secondary font-bold">
        <Link to="/">LOGO</Link>
      </div>
      <ul className="w-48 flex items-center justify-between font-semibold text-base tracking-wide text-primary">
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
          <NavLink to="/post" activeClassName="text-secondary"className=" p-1	 hover:bg-blue-100 rounded-lg text-base">
            Post
          </NavLink>
        </li>
      </ul>
      <ul className="w-40 flex items-center justify-between  ">
        {
        isLoggedIn 
        ? <button onClick= {handleDisconnect} >disconnect</button> 
        :
        <>
          <Link to="signin">
            <button className=" p-2	 hover:bg-blue-200 rounded-lg text-base w-23 h-11 text-secondary font-bold tracking-wide2">
              Sign In
            </button>
          </Link>
          <Link to="signup">
            <button className=" p-1 hover:bg-blue-900 rounded-lg text-base w-23 h-11 font-bold tracking-wide2 bg-primary text-white">
              Sign Up
            </button>
          </Link>
        </> 
        }
        
      </ul>
    </nav>
  );
};

export default Navbar;
