import { useState } from "react";
import { AiOutlineLogin } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";

const Signin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <section className="w-full h-100 bg-navbarbg flex justify-center items-center">
      <div className="w-96 h-74 bg-white">
        <form
          className="p-4 flex flex-col justify-center items-center"
          onSubmit={onSubmit}
        >
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

          <div className="w-64 h-14 rounded-3xl bg-signBtn flex justify-center items-center ">
            <input
              type="submit"
              value="Sign In"
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
export default Signin;
