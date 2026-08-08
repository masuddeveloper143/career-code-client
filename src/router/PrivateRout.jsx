import React, { use } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRout = ({ children }) => {
    const { loading, user } = use(AuthContext);
    const location = useLocation();
    
     if (loading) {
        return <span className="loading loading-ring loading-xl"></span>
    };

    if (!user) {
        return <Navigate to="/signIn" state={location.pathname}></Navigate>
    };

   



    return children;
    return (
        <div>

        </div>
    );
};

export default PrivateRout;