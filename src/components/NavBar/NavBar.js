import BookmarkIcon from "@material-ui/icons/Bookmark";
import ExploreIcon from "@material-ui/icons/Explore";
import HomeIcon from "@material-ui/icons/Home";
import {NavLink} from "react-router-dom";
import { useHistory } from "react-router-dom";
import React, { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import ProfileDropDown from "../ProfileDropDown/ProfileDropDown";

const NavBar = () => {
  const { user } = useContext(UserContext);
  const router = useHistory();

  return (
    <div className="opacity-80 font-montserrat font-bold nm-flat-white">
      <nav className="justify-between h-16 flex flex-row lg:justify-between items-center">
        <NavLink to="/home">
          <img
            className="cursor-pointer ml-4"
            src="/images/logos/bunker.png"
            alt="logo"
          />
        </NavLink>

        <div className="hidden lg:block menu">
          {user && (
            <NavLink to="/home">
              <li
                activeClassname={"font-montserrat font-bold text-lg"}
                className={`list-none inline-block mx-20 cursor-pointer`}>
                Home
              </li>
            </NavLink>
          )}
          <NavLink to="/explore">
            <li
              activeClassname={"font-montserrat font-bold text-lg"}
              className={`list-none inline-block mx-20 cursor-pointer`}>
              Explore
            </li>
          </NavLink>
          {user && (
            <NavLink to="/bookmarks">
              <li
                activeClassname={"font-montserrat font-bold text-lg"}
                className={`list-none inline-block mx-20 cursor-pointer`}>
                Bookmarks
              </li>
            </NavLink>
          )}
        </div>

        <div className="bg-white w-full lg:hidden flex justify-between items-center fixed bottom-0 h-16 px-4">
          <div>
            {user && (
              <NavLink to="/home">
                <span>
                  <HomeIcon
                    activeClassname={"font-montserrat font-bold text-lg"}

                    fontSize="large"
                    style={{
                      color: true === "/home" ? "#2F80ED" : "#828282",
                    }}
                  />
                </span>
              </NavLink>
            )}
          </div>
          <div>
            <NavLink to="/explore">
              <span>
                <ExploreIcon
                  fontSize="large"
                  style={{
                    color: true === "/explore" ? "#2F80ED" : "#828282",
                  }}
                />
              </span>
            </NavLink>
          </div>
          <div>
            {user && (
              <NavLink to="/bookmarks">
                <span>
                  <BookmarkIcon
                    fontSize="large"
                    style={{
                      color:
                        true === "/bookmarks" ? "#2F80ED" : "#828282",
                    }}
                  />
                </span>
              </NavLink>
            )}
          </div>
        </div>
        <div>{user && <ProfileDropDown user={user} />}</div>
      </nav>
    </div>
  );
};

export default NavBar;
