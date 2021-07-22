import axios from "axios";

async function handleSignUp(email, password, name) {
  console.log(name, email, password)
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({name, email, password});
    const res = await axios.post("/users/signup", body, config);

    // storing token and userId in the browser localStorage
    localStorage.setItem(
      "user",
      JSON.stringify({ ...res.data.user, token: res.data.token })
    );
    return { ...res.data.user, token: res.data.token }

  } catch (error) {
    return error;
    console.error(error);
  }
}

async function handleSignIn(email, password) {
  const user = {
    email,
    password
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
      return res.data.user
    }
  } catch (error) {
    console.error(error);
    return error
  }
}

async function handleSignOut() {
  try {
    localStorage.removeItem("user")
      
    
    return true;
  } catch (error) {
    console.error(error);

    return error;
  }
}
export { handleSignIn, handleSignUp, handleSignOut };
