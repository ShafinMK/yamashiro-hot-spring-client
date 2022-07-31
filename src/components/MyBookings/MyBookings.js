import React, { useEffect, useState, useSyncExternalStore } from 'react';
import { useParams } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
const axios = require('axios').default;

const MyBookings = () => {
    const [bookings, setBookings] = useState([]);
    const { user } = useFirebase();
    const { email } = useParams();


    useEffect(() => {
        fetch(`http://localhost:5000/userbooking/?email=${email}`)
            .then(res => res.json())
            .then(data => {
                setBookings(data);
                // console.log(data);
            })
    }, []);



    return (
        <div className='userbooking-bg'>
             {/* banner */}
             <section className='team-bg'>
                <div className='py-5'>
                    <div className="py-5"></div>
                    <h1 className='text-center text-light'>My Bookings</h1>
                    
                    <div className="py-5"></div>
                </div>
            </section>

            <div className="container py-5">
                {
                    bookings.map(booking => (

                        <div className='my-3' key={booking._id}>

                            <div className="row justify-content-center align-items-center shadow userbooking-card text-dark">
                                <div className="col-12 col-md-4 p-1 p-md-0">

                                    <img src={booking.serviceThumb} className='img-fluid  rounded' alt="" />
                                </div>
                                <div className="col-12 col-md-4 col-lg-6 ">
                                    <div className="row py-3">
                                        <div className="col-12 col-lg-6">
                                            <h6 className='py-1 px-2'><i className="pe-2 fa-solid fa-calendar-days"></i><span>{booking.bookingDate}</span></h6>
                                            <h6 className='py-1 px-2'><i className="pe-2 fa-solid fa-file-signature"></i><span>{booking.firstName}</span> <span>{booking.lastName}</span></h6>
                                            <h6 className='py-1 px-2'><i className="pe-2 fa-solid fa-location-arrow"></i><span>{booking.country}</span></h6>
                                        </div>

                                        <div className="col-12 col-lg-6">
                                            <h6 className='py-1 px-2'><i className="pe-2 fa-solid fa-user"></i><span>{booking.guestNumber}</span></h6>
                                            <h6 className='py-1 px-2'><i className="pe-2 fa-solid fa-briefcase"></i><span>{booking.serviceName}</span></h6>
                                            <h6 className='py-1 px-2'><i className="pe-2 fa-solid fa-clock"></i><span>{booking.time}</span></h6>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-md-4 col-lg-2 py-3">
                                    <div className="d-flex justify-content-around align-items-center">
                                        <span className='fs-4'>${booking.price}</span>
                                        {/* <button className='btn btn-danger mx-3'><i className="fa-solid fa-trash "></i></button> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default MyBookings;