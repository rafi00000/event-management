import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading } = useContext(AuthContext);
    
    if(loading){
        return(
            <div className="flex items-center justify-center min-h-screen">
                <span className="loading loading-infinity w-16"></span>
            </div>
        )
    }

    if(user){
        return children;
    }
    return <Navigate to={'/login'}></Navigate>
};

export default PrivateRoute;