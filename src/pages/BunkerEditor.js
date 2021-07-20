import React, { useContext } from "react";
import BunkerForm from "../components/BunkerForm";
import UserContext from "../contexts/UserContext";

function BunkerEditor() {
  const { user, setUser } = useContext(UserContext);
  return (
    <>
      {user ? (
        <BunkerForm></BunkerForm>
      ) : (
        <p>you need to be signed in to post </p>
      )}
    </>
  );
}

export default BunkerEditor;
