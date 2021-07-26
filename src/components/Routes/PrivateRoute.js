import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import UserContext from "./../../contexts/UserContext";

function PrivateRoute({ children, ...rest }) {
    const { user } = useContext(UserContext)
    const control = props => {
        if (!user) {
            return <Redirect to={"/signin"} />;
        }
        return ( children );
    };

    return <Route {...rest} >{ control() }</Route>;
}

export default PrivateRoute