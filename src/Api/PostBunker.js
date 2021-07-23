import axios from "axios";

const postBunker = async (
  user,
  text,
  imgLink = null,
  parentBunker = null
) => {
    console.log('posting bunker')
    console.log(user, text, imgLink, parentBunker);
    const newPost = {
      source: text,
    };
    try {
      // this const gets the 'token' and 'user'from localStorage. Check Signup.js to see how to access and save in localStorage.
      // Get the user from your context

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      };

      const res = await axios.post(
        `/users/${user._id}/bunkers`,
        newPost,
        config
      );

      return res.data._id;

    } catch (error) {
      console.log(error);
    }
};

export default postBunker;
