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
    const { data } = await axios.post("/users/signup", body, config);

    // storing token and userId in the browser localStorage
    localStorage.setItem(
      "user",
      JSON.stringify({ ...data.user, token: data.token })
    );
    return { 
      ...data.user, 
      token: data.token 
    }

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
    const { data } = await axios.post("/users/signin", body, config);
    console.log("res")
    console.log(data)
    if (data.user) {
      localStorage.setItem(
        "user",
        JSON.stringify({ ...data.user, token: data.token })
      );
      return { 
        ...data.user, 
        token: data.token 
      }

    }
  } catch (error) {
    console.log("thowed ???")
    // console.log(error.errorMessage)
    console.log(error.response.data.errorMessage);
    throw new Error(error.response.data.errorMessage)
  }
}

async function handleSignOut(cb) {
  try {
    return cb();
  } catch (error) {
    console.error(error);
    return error;
  }
}
export { handleSignIn, handleSignUp, handleSignOut };
