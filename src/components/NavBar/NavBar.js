import BookmarkIcon from "@material-ui/icons/Bookmark";
import ExploreIcon from "@material-ui/icons/Explore";
import HomeIcon from "@material-ui/icons/Home";
import {NavLink} from "react-router-dom";
import { useHistory } from "react-router-dom";
import React, { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import ProfileDropDown from "../ProfileDropDown/ProfileDropDown";
import thumbnailLogo from "../../assets/debunker_logo_title_300.png";
import Wallet from "../Wallet/Wallet";
const NavBar = () => {
  const { user } = useContext(UserContext);
  const router = useHistory();

  return (
    <div className="opacity-80 font-montserrat font-bold nm-flat-white">
      <nav className="justify-between h-16 flex flex-row lg:justify-between items-center">
        <NavLink
              activeClassname={"font-montserrat font-bold text-lg"}
        
        to="/">
          <img
            className="cursor-pointer ml-4 object-scale-down h-16"
            src={thumbnailLogo}
            alt="logo"
          />
        </NavLink>

        <div className="hidden lg:block menu">
          {user && (
            <NavLink 
              activeClassname={"font-montserrat font-bold text-lg"}
            
              to="/">
              <li
                activeClassname={"font-montserrat font-bold text-lg"}
                className={`list-none inline-block mx-20 cursor-pointer`}>
                Debunk
              </li>
            </NavLink>
          )}
          <NavLink 
            activeClassname={"font-montserrat font-bold text-lg"}
          
          
          to="/explore">
            <li
              activeClassname={"font-montserrat font-bold text-lg"}
              className={`list-none inline-block mx-20 cursor-pointer`}>
              Investigate
            </li>
          </NavLink>
          {/* {user && (
            <NavLink to="/bookmarks">
              <li
                activeClassname={"font-montserrat font-bold text-lg"}
                className={`list-none inline-block mx-20 cursor-pointer`}>
                Bookmarks
              </li>
            </NavLink>
          )} */}
        </div>

        <div className="bg-white w-full lg:hidden flex justify-between items-center fixed bottom-0 h-16 px-4">
          <div>
            {user && (
              <NavLink 
               activeClassname={"font-montserrat font-bold text-lg"}
              
              to="/">
                <span>
                  <HomeIcon
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
            <NavLink 
              activeClassname={"font-montserrat font-bold text-lg"}
            to="/explore">
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
            {/* {user && (
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
            )} */}
          </div>
        </div>
        {<Wallet count={10} text={"Your Balance:"}/>}
        <div>{user && <ProfileDropDown user={user} />}</div>
      </nav>
    </div>
  );
};

export default NavBar;
