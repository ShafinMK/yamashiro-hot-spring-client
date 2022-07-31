import { async } from '@firebase/util';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const PrivateRoute = (props) => {
    const { children } = props;
    const { user, loading } = useFirebase();
    let location = useLocation();
    if (loading) {
        return <div className='d-flex justify-content-center my-5 py-5'>
            <div className="spinner-grow text-dark mx-3" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-dark mx-3" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-dark mx-3" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>;
    }

    // user?.email? console.log('verified'): console.log('not verified');
    // console.log();
    return user?.emailVerified ? children : <Navigate to='/login' state={{from:location}} replace></Navigate>;
};

export default PrivateRoute;