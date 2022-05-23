import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation } from 'react-router-dom';
import auth from '../../firebase.init';

const RequerAuth = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    if(loading){
        return <p>Loging...</p>
    }
    if(! user){
       return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default RequerAuth;