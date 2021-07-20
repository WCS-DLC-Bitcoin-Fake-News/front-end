import { useState, useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import LandingBG from "../img/LandingBG2.jpg";
import UserContext from "../contexts/UserContext";

const Signin = () => {
  const { user, setUser } = useContext(UserContext);
  let history = useHistory();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const user = {
      ...formData,
    };
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = JSON.stringify(user);
      const res = await axios.post("/users/signin", body, config);
      if (res.data.user) {
        localStorage.setItem(
          "user",
          JSON.stringify({ ...res.data.user, token: res.data.token })
        );
        setUser({ ...res.data.user, token: res.data.token });
        history.push("/profile");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="flex flex-col md:flex-row h-screen items-center">
      <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
        <img src={LandingBG} alt="" className="w-full h-full object-cover" />
      </div>
      <div
        className="bg-navbarbg w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center"
      >
        <div className="w-full h-100">
          <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
            Log in to your account
          </h1>
          <form className="mt-6" onSubmit={onSubmit}>
            <div>
              <label className="block text-gray-700">Email Address</label>
              <input
                type="email"
                placeholder="Enter Email Address"
                name="email"
                value={formData.email}
                onChange={onChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-100 mt-2 border focus:border-gray-500 focus:bg-white focus:outline-none"
                autoFocus
                autoComplete="true"
                required
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                value={formData.password}
                onChange={onChange}
                minLength="8"
                className="w-full px-4 py-3 rounded-lg bg-gray-100 mt-2 border focus:border-blue-500
              focus:bg-white focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full block bg-primary hover:bg-blue-900 text-white font-semibold rounded-lg
              px-4 py-3 mt-6"
            >
              Log In
            </button>
          </form>
          <hr className="my-6 border-gray-300 w-full" />
          <Link to="signup">
            <p className="mt-8">Need an account? Create an account</p>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Signin;
