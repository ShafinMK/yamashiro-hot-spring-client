import React, { useEffect, useState } from 'react';
import './Services.css';
import '../../stylesheets/font and Color.css';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Services = () => {
    const [services, setServices] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch('https://murmuring-ravine-46664.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    const handleBooking = (serviceId) => {
        const url = `/booking/${serviceId}`;
        navigate(url);
        // console.log(url);
    }
    // useing animation 
    const { ref, inView } = useInView({ threshold: 0.2 });
    // const animationLeft = useAnimation();
    const animation = useAnimation();
    useEffect(() => {
        if (inView) {

            animation.start({
                scale: 1,
                transition: { duration: 2, type: 'spring', bounce: .3 }
            });

        }
        console.log(inView);

    }, [inView]);

    return (
        <div className='services-page-bg pb-5'>
            {/* banner */}
            <section className='services-bg'>
                <div className='py-5'>
                    <div className="py-5"></div>
                    <h1 className='text-center text-light'>Services</h1>

                    <div className="py-5"></div>
                </div>
            </section>

            {/* Spa Programs */}
            <section>
                <div className='container text-center my-5'>
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8 col-lg-6">
                            <h1>Spa Programs</h1>
                            <p className='my-5 light-black'>An oasis of calm, the extensively restored and enlarged Spa at Cherie Beauty Space, is a place to enjoy peaceful atmosphere and restore mind, body and soul. </p>
                        </div>
                    </div>

                    <div >
                        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4' >
                            {
                                services.map(service => (
                                    <motion.div className='col' key={service._id} initial={{ scale: .8 }} animate={{scale: 1}} transition={{duration:2}}>
                                        <div className='card service-card border-0 shadow'>
                                            <div className="service-img" style={{ backgroundImage: `url(${service.serviceThumb})` }}>
                                                <div className="py-5"></div>
                                                <div className="py-5"></div>
                                                <div className="py-5"></div>
                                                <div className="py-5"></div>
                                            </div>
                                            {/* <img src={service.serviceThumb} className='img-fluid w-100' alt="" /> */}
                                            <div className='my-4 '>
                                                <h5 className='darkish-green'>{service.serviceName}</h5>
                                                <div>
                                                    <i className="fa-solid fa-star text-warning"></i>
                                                    <i className="fa-solid fa-star text-warning"></i>
                                                    <i className="fa-solid fa-star text-warning"></i>
                                                    <i className="fa-solid fa-star text-warning"></i>
                                                    <i className="fa-regular fa-star"></i>
                                                </div>
                                                <h5 className='orange-dark'>${service.price}</h5>

                                                <button onClick={() => { handleBooking(service._id) }} className='btn btn-light 2 btn-outline-dark'>Book Now</button>


                                            </div>

                                        </div>
                                    </motion.div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;