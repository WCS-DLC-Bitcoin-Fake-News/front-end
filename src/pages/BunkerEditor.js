import React, { useContext } from "react";
import BunkerForm from "../components/BunkerForm";
import UserContext from "../contexts/UserContext";
import { withRouter } from "react-router-dom";

function BunkerEditor() {
  const { user, setUser } = useContext(UserContext);
  return (
        <BunkerForm/>  
  );
}

export default withRouter(BunkerEditor);
