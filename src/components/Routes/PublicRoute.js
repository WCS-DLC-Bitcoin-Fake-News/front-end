import { useContext } from "react";
import UserContext from "./../../contexts/UserContext";
import { Route, Redirect } from "react-router-dom"

const PublicRoute = ({ children, restricted, ...rest }) => {
    const { user } = useContext(UserContext)
    const control = props => {
        if (user && restricted) {
            return <Redirect to={`/${user._id}/profile`} />;
        }

        return (children);
    };

    return <Route {...rest} >{ control() }</Route>;
}

export default PublicRoute;