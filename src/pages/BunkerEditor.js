import React, { useContext } from "react";
import BunkerForm from "../components/BunkerForm";
import UserContext from "../contexts/UserContext";
import { withRouter } from "react-router-dom";
import Layout from "./../layouts"

function BunkerEditor() {
  const { user } = useContext(UserContext);
  return ( <Layout><BunkerForm /> </Layout>);
}

export default withRouter(BunkerEditor);
