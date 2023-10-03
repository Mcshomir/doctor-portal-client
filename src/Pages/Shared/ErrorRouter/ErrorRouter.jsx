import React, { useContext } from 'react';
import { useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const ErrorRouter = () => {
    const error = useRouteError()
    const { logoutHandle } = useContext(AuthContext)
    const handleClickLogout = () => {
        logoutHandle()
            .then(() => { })
            .catch(error => console.log(error))

    }
    return (
        <div>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <p>
                Please <button className='btn btn-error' onClick={handleClickLogout}>LogOut</button>  and log back in !
            </p>

        </div>
    );
};

export default ErrorRouter;