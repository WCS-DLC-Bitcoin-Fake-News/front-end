import Home from "./pages"
import Explore from "./pages/Explore"
import PrivateRoute from "./components/Routes/PrivateRoute"
import PublicRoute from "./components/Routes/PublicRoute"

const routes = [
    {
        name: 'Home',
        path: "/",
        component: <Home />,
        isPrivate: true,
        protected: true
    },
    {
        name: 'Investigate',
        path: "/explore",
        component: <Explore />,
        isPrivate: true,
        protected: true
    },
    {
        name: 'Profile',
        path: "/explore",
        component: <Explore />,
        isPrivate: true,
        protected: true
    },

]


const RouteBuilder = (props) => {
    return (
        routes.map(( { isPrivate, component, ...rest } ) => {
            if(isPrivate){
                return(<PrivateRoute {...rest} >
                          {component}
                        </PrivateRoute>)
              } else {
                return (<PublicRoute {...rest}>
                          {component}
                                
                         </PublicRoute>)
              }
        })
    )

}

export default RouteBuilder;    