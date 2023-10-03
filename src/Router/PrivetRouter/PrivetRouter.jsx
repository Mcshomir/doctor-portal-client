import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation()
    if (loading) {
        return <h1 className='text-4xl text-red-200 text-center'> loading...</h1>
    }
    if (user) {
        return children;

    }
    return <Navigate to='/signin' state={{ from: location }} replace> </Navigate>
};

export default PrivetRouter;