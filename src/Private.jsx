import { useContext } from "react";
import { AuthContext } from "./Providers/AuthProvider";
import { Navigate } from "react-router-dom";


const Private = ({children}) => {
    const {user,loading}=useContext(AuthContext)

    if(loading){
        return <progress className="progress w-56"></progress>
    }

    if(user?.email){
        return children
    }
    return<Navigate to='/login' replace>Login</Navigate>
    
};

export default Private;