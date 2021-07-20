import { useState, useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import LandingBG from "../img/LandingBG2.jpg";
import UserContext from "../contexts/UserContext";

const Signup = () => {
  const { user, setUser } = useContext(UserContext);
  let history = useHistory();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      console.log("Passwords do not match");
    } else {
      console.log(formData);
      const newUser = {
        name,
        email,
        password,
      };
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const body = JSON.stringify(newUser);
        const res = await axios.post("/users/signup", body, config);
        console.log(res.data);

        // storing token and userId in the browser localStorage
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        setUser({ ...res.data.user, token: res.data.token });
        history.push("/");
      } catch (error) {
        console.log(error.response.data);
      }
    }
  };

  return (
    <section className="flex flex-col md:flex-row h-screen items-center">
      <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
        <img src={LandingBG} alt="" class="w-full h-full object-cover" />
      </div>
      <div
        className="bg-navbarbg w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center"
      >
        <div class="w-full h-100">
          <h1 class="text-xl md:text-2xl font-bold leading-tight mt-12">
            Sign Up
          </h1>
          <form className="mt-1" onSubmit={onSubmit}>
            <div>
              <label class="block text-gray-700">User Name</label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={name}
                onChange={onChange}
                className="w-full px-2 py-1 rounded-lg bg-gray-100 mt-1 border focus:border-gray-500 focus:bg-white focus:outline-none"
                autofocus
                autocomplete
                required
              />
            </div>
            <div className="mt-1">
              <label class="block text-gray-700">
                Enter your email address
              </label>
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                value={email}
                onChange={onChange}
                className="w-full px-2 py-1 rounded-lg bg-gray-100 mt-1 border focus:border-gray-500 focus:bg-white focus:outline-none"
                autofocus
                autocomplete
                required
              />
            </div>
            <div className="mt-2">
              <label class="block text-gray-700">Enter your password</label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={onChange}
                minLength="8"
                className="w-full px-2 py-1 rounded-lg bg-gray-100 mt-1 border focus:border-gray-500 focus:bg-white focus:outline-none"
                autofocus
                autocomplete
                required
              />
            </div>
            <div className="mt-2">
              <label class="block text-gray-700">Confirm your password</label>
              <input
                type="password"
                placeholder="Confirm Password"
                name="password2"
                value={password2}
                onChange={onChange}
                minLength="8"
                className="w-full px-2 py-1 rounded-lg bg-gray-100 mt-1 border focus:border-blue-500
                focus:bg-white focus:outline-none"
              />
            </div>
            <div className="mt-2">
              <input
                type="submit"
                value="Sign Up"
                className="w-full block bg-primary hover:bg-blue-900 text-white font-semibold rounded-lg
                px-4 py-3 mt-6"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Signup;
