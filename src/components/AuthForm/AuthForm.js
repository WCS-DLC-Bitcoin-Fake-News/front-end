import CircularProgress from "@material-ui/core/CircularProgress";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import shortID from "shortid";
import { handleSignIn, handleSignUp } from "../../Api/Authentication";
import axios from "axios";
import UserContext from "../../contexts/UserContext";
import { useHistory } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";
const AuthForm = ({ type }) => {
  const history = useHistory()
  console.log(type)
  const { user, setUser } = useContext(UserContext);
  const [localUser, setLocalUser] = useLocalStorage("user");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [authLoading, setAuthLoading] = useState(false);
  const [authErrMsg, setAuthErrMsg] = useState(null);

  const signIn = () => (
    <div>
      <form 
        onSubmit={async (e) => {
          try {
            e.preventDefault();
            setAuthLoading(true);
            const logged = await handleSignIn(email, password);
            setUser(logged);
            setAuthLoading(false);
            history.push("/");

          } catch (error) {
            console.log("Catched ?")
            console.log(error.toString())
            setAuthLoading(false);
            setAuthErrMsg(error.toString());

          }
        
        }}>
        <div className="mb-4">
          <label
            className="block text-black text-lg font-cabin font-bold pl-4"
            htmlFor="Email">
            Email
            <input
              className="
              py-4
              nm-inset-white
              font-raleway
              rounded-full w-full text-black placeholder-gray-300 "
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="mb-6">
          <div className="mb-4">
            <label
              className="block text-black text-lg font-cabin font-bold p-4"
              htmlFor="password">
              Password
              <input
                className="
                py-4
                nm-inset-white
                font-raleway
                rounded-full w-full text-black placeholder-gray-300"
                id="password"
                type="password"
                placeholder="********"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          {authErrMsg && (
            <div>
              <p className="text-red-600 font-noto font-semibold">
                {authErrMsg}
              </p>
            </div>
          )}
        </div>
        <div className="flex flex-row flex-wrap content-center">
          <button
            className={`relative text-black text-lg font-cabin font-bold py-4 px-8 rounded-full ml-4 focus:outline-none focus:shadow-outline ${
              authLoading ? "cursor-not-allowed bg-#CCDE04" : "nm-flat-yellowBunker-sm"
            } `}
            type="submit">
            Sign In
            {authLoading && (
              <span
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: " translate(-50%, -50%)",
                }}>
                <CircularProgress />
              </span>
            )}
          </button>
          <div className="py-4 mr-0 ml-auto">
            <Link to="/signup">
              <a className="font-raleway text-white text-xl font-semibold">
                Create an account?
              </a>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );

  const signUp = () => (
    <div>
      <form>
        <div className="mb-4">
          <div className="mb-4">
            <label
              className="block font-cabin text-lg font-bold p-4"
              htmlFor="name">
              Name
              <input
                className="
                py-4
                nm-inset-white
                font-raleway
                rounded-full w-full text-black placeholder-gray-300 "
                id="name"
                type="text"
                placeholder="Name"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>
        </div>
        <div className="mb-4">
          <div className="mb-4">
            <label
              className="block font-cabin text-lg font-bold p-4"
              htmlFor="Email">
              Email
              <input
                className="
                py-4
                nm-inset-white
                font-raleway
                rounded-full w-full text-black placeholder-gray-300 "
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>
        </div>
        <div className="mb-4">
          <div className="mb-4">
            <label
              className="block font-cabin text-lg font-bold p-4"
              htmlFor="username">
              Username
              <input
                className="
                py-4
                nm-inset-white
                font-raleway
                rounded-full w-full text-black placeholder-gray-300 "
                id="username"
                type="text"
                placeholder="Username"
                value={username}
                required
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
          </div>
        </div>

        <div className="mb-6">
          <div className="mb-4">
            <label
              className="block font-cabin text-lg font-bold p-4"
              htmlFor="password">
              Password
              <input
                className="          
                py-4
                nm-inset-white
                font-raleway
                rounded-full w-full text-black placeholder-gray-300 "
                id="password"
                type="password"
                placeholder="********"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
        </div>
        <div>
          <div>
            {authErrMsg && (
              <div>
                <p className="text-red-600 font-noto font-semibold">
                  {authErrMsg}
                </p>
              </div>
            )}
          </div>
          <div className="flex flex-row items-center flex-wrap">
            <button
              onClick={async (e) => {
                console.log("here")
                console.log(email, password, name)
                e.preventDefault();
                setAuthLoading(true);
                try {
                  const logged = await handleSignUp(
                    email,
                    password,
                    name
                  );
                  setUser(logged);
                  setAuthLoading(false);
                  // setLocalUser(logged)
                  history.push("/");

                } catch (error) {
                  setAuthErrMsg(error.toString());
                }
         
              }}
              className={`relative text-black text-lg font-cabin font-bold ml-4 py-4 px-8 rounded-full focus:outline-none focus:shadow-outline ${
                authLoading ? "cursor-not-allowed bg-#CCDE04" : "nm-flat-yellowBunker-sm"
              } `}
              type="submit">
              Sign Up
              {authLoading && (
                <span
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: " translate(-50%, -50%)",
                  }}>
                  <CircularProgress />
                </span>
              )}
            </button>
            <div className="py-4 mr-0 ml-auto">
              <Link to="/signin">
                <a className="font-noto text-white font-semibold">
                  Already have an account? Sign In
                </a>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );

  return (
    <div className="w-full">
      {type === "signIn" && signIn()}
      {type === "signUp" && signUp()}
    </div>
  );
};

export default AuthForm;
