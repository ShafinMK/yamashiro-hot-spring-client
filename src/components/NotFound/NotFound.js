import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='text-center'>
            <img src={require('../../images/icons/404.png')} alt="" />
            <br />
           <Link to='/'> <button className='btn btn-primary px-5 py-2 mb-5'>Go back</button></Link>
        </div>
    );
};

export default NotFound;