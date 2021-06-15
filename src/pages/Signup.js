import { useState } from "react";
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

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      console.log("Passwords do not match");
    } else {
      console.log(formData);
    }
  };

  return (
    <section className="w-full h-100 bg-navbarbg flex-col justify-center items-center">
      <div className="w-96 h-72 flex-row bg-white">
        <p>Create Your Account</p>
        <form className="p-8 flex-row" onSubmit={onSubmit}>
          <div className="p-1">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={onChange}
              className="p-2 border border-black rounded w-72"
              required
            />
          </div>
          <div className="p-1">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={onChange}
              className="p-2 border border-black rounded w-72"
              required
            />
          </div>
          <div className="p-1">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={onChange}
              minLength="8"
              className="p-2 border border-black rounded w-72"
            />
          </div>
          <div className="p-1">
            <input
              type="password"
              placeholder="Confirm Password"
              name="password2"
              value={password2}
              onChange={onChange}
              minLength="8"
              className="p-2 border border-black rounded w-72"
            />
          </div>
          <input type="submit" value="Register" />
        </form>
      </div>
    </section>
  );
};
export default Signup;
