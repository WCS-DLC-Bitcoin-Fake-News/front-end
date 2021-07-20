import { Link, NavLink } from "react-router-dom";
import React, { useState, useContext } from "react";
import { Transition } from "@headlessui/react";
import LOGO from "../img/Logo.svg";
import { useHistory } from "react-router-dom";
import UserContext from "../contexts/UserContext";

const LoginButtons = () => {
  const { user, setUser } = useContext(UserContext);
  let history = useHistory();

  const handleDisconnect = (e) => {
    e.preventDefault();
    localStorage.removeItem("user");
    setUser(null);
    history.push("/");
  };

  return user ? (
    <button onClick={handleDisconnect}>Log out</button>
  ) : (
    <div>
      <Link to="/signin">
        <button className="mr-2 p-1 hover:bg-blue-200 rounded-lg text-lg w-22 h-11 text-gray-600	 font-bold tracking-wide2">
          Sign In
        </button>
      </Link>
      <Link to="/signup">
        <button className="ml-2 p-1 hover:bg-white hover:text-blue-800 rounded-lg text-lg w-22 h-11 font-bold tracking-wide2 bg-primary text-white">
          Sign Up
        </button>
      </Link>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="px-3 flex items-center h-16 w-full justify-between">
        <div className="flex-shrink-0 w-1/12">
          <Link to="/">
            <img
              style={{ width: "65px", opacity: 0.85 }}
              alt="Logo"
              src={LOGO}
            />
          </Link>
        </div>

        <div className="hidden md:block w-11/12">
          <div className="mx-10 flex items-baseline space-x-8 justify-between ">
            <div>
              <NavLink
                to="/about"
                activeClassName="text-secondary "
                className=" p-1	text-gray-600	 hover:bg-blue-100 dark:hover:bg-blue-900 rounded-lg text-lg"
              >
                About
              </NavLink>

              <NavLink
                to="/contact"
                activeClassName="text-secondary"
                className=" p-1 text-gray-600	 hover:bg-blue-100 dark:hover:bg-blue-900 rounded-lg text-lg"
              >
                Contact
              </NavLink>

              <NavLink
                to="/help"
                activeClassName="text-secondary"
                className=" p-1	text-gray-600	 hover:bg-blue-100 rounded-lg text-lg"
              >
                Help
              </NavLink>

              <NavLink
                to="/post"
                activeClassName="text-secondary"
                className=" p-1	text-gray-600	 hover:bg-blue-100 rounded-lg text-lg"
              >
                Post
              </NavLink>

              <NavLink
                to="/upvote"
                activeClassName="text-secondary"
                className=" p-1	text-gray-600	 hover:bg-blue-100 rounded-lg text-lg"
              >
                Vote
              </NavLink>
            </div>
            <LoginButtons />
          </div>
        </div>
        <div className="-mr-2 flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="bg-blue-200 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-300 focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {!isOpen ? (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden" id="mobile-menu">
            <div ref={ref} className=" pt-2 pb-3 space-y-1 ">
              <Link
                to="/about"
                activeClassName="text-secondary "
                className=" p-1	text-gray-600	 hover:bg-blue-100 dark:hover:bg-blue-900 rounded-lg text-lg"
              >
                About
              </Link>

              <Link
                to="/contact"
                activeClassName="text-secondary"
                className=" p-1 text-gray-600	 hover:bg-blue-100 dark:hover:bg-blue-900 rounded-lg text-lg"
              >
                Contact
              </Link>

              <Link
                to="/help"
                activeClassName="text-secondary"
                className=" p-1	text-gray-600	 hover:bg-blue-100 rounded-lg text-lg"
              >
                Help
              </Link>

              <Link
                to="/post"
                activeClassName="text-secondary"
                className=" p-1	text-gray-600	 hover:bg-blue-100 rounded-lg text-lg"
              >
                Post
              </Link>

              <Link
                to="/article"
                activeClassName="text-secondary"
                className=" p-1	text-gray-600	 hover:bg-blue-100 rounded-lg text-lg"
              >
                Article
              </Link>

              <Link
                to="/upvote"
                activeClassName="text-secondary"
                className=" p-1	text-gray-600	 hover:bg-blue-100 rounded-lg text-lg"
              >
                Vote
              </Link>
            </div>
            <div>
              <Link to="signin">
                <button className="mr-2 p-1 hover:bg-blue-200 rounded-lg text-lg w-19 h-11 text-gray-600	 font-bold tracking-wide2">
                  Sign In
                </button>
              </Link>
              <Link to="signup">
                <button className="ml-2 p-1 hover:bg-white hover:text-blue-800 rounded-lg text-lg w-19 h-9 font-bold tracking-wide2 bg-primary text-white">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        )}
      </Transition>
    </div>
  );
};

export default Navbar;
