import { useState } from "react";
import axios from "axios";
import { BiUser } from "react-icons/bi";
import { AiOutlineLogin } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";

const Signup = () => {
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
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data.user));
      } catch (error) {
        console.log(error.response.data);
      }
    }
  };

  return (
    <section className="w-full h-100 bg-navbarbg flex justify-center items-center">
      <div className="w-96 h-74 bg-white">
        <form
          className="p-4 flex flex-col justify-center items-center"
          onSubmit={onSubmit}
        >
          <div className="m-1.5 h-10 w-80 border border-black flex justify-start items-center rounded">
            <BiUser className="ml-2" />
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={onChange}
              className="p-2 w-74 h-5 outline-none"
              required
            />
          </div>
          <div className="m-1.5 h-10 w-80 border border-black flex justify-start items-center rounded">
            <HiOutlineMail className="ml-2" />
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={onChange}
              className="p-2 w-74 h-5 outline-none"
              required
            />
          </div>
          <div className="m-1.5 h-10 w-80 border border-black flex justify-start items-center rounded">
            <RiLockPasswordLine className="ml-2" />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={onChange}
              minLength="8"
              className="p-2 w-74 h-5 outline-none"
            />
          </div>
          <div className="m-1.5 h-10 w-80 border border-black flex justify-start items-center rounded">
            <RiLockPasswordLine className="ml-2" />
            <input
              type="password"
              placeholder="Confirm Password"
              name="password2"
              value={password2}
              onChange={onChange}
              minLength="8"
              className="p-2 w-74 h-5 outline-none"
            />
          </div>
          <div className="w-64 h-14 rounded-3xl bg-signBtn flex justify-center items-center ">
            <input
              type="submit"
              value="Sign Up"
              className="text-white bg-signBtn pr-1 font-bold"
            />
            <AiOutlineLogin
              className="inline-block"
              style={{ color: "white" }}
            />
          </div>
        </form>
      </div>
    </section>
  );
};
export default Signup;
