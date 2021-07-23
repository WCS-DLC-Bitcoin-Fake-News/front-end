import {Route, Redirect} from 'react-router-dom';
import {useContext} from 'react';
import UserContext from "../contexts/UserContext";

function ProtectedRoute({component: Component, ...rest}) {
    const { user } = useContext(UserContext);
    return (
        <Route
         {...rest}
         render={(props) => {
             if(user) {
                 return <Component/>
             } else {
                 return (
                     <Redirect to={{pathname: "/", state: {from: props.location}}}/>
                 )
             }
         }}
        />
    
    )
}

export default ProtectedRoute;
