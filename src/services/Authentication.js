import firebase from "../firebase/init";
import axios from "axios";
async function handleSignUp(email, password, username, name) {
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
    return res.data.user
    // setUser({ ...res.data.user, token: res.data.token });
    // history.push("/");
  } catch (error) {
    console.log(error.response.data);
  }
}

async function handleSignIn(email, password) {
  try {
    const user = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    window.location.replace("/home");
  } catch (error) {
    console.error(error);
    return error;
  }
}

async function handleSignOut() {
  try {
    await firebase.auth().signOut();
    window.location.replace("/");
    return true;
  } catch (error) {
    console.error(error);

    return error;
  }
}
export { handleSignIn, handleSignUp, handleSignOut };
