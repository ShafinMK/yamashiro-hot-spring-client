import React, { useEffect, useState } from 'react';
import './Services.css';
import '../../stylesheets/font and Color.css';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://shafinmk.github.io/resources-api/spa-services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div>
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
                    <h1>Spa Programs</h1>
                    <p className='my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis beatae earum culpa quod quidem, est quas harum veritatis rerum sequi!</p>

                    <div className='row row-cols-1 row-cols-md-3 g-4'>
                        {
                            services.map(service => (
                                <div className='col'>
                                    <div className='card border-0 shadow'>
                                        <img src={service.serviceThumb} className='img-fluid w-100' alt="" />
                                        <div className='my-4 '>
                                            <h5 className='darkish-green'>{service.serviceName}</h5>
                                            <div>
                                                <i class="fa-regular fa-star"></i>
                                                <i class="fa-regular fa-star"></i>
                                                <i class="fa-regular fa-star"></i>
                                                <i class="fa-regular fa-star"></i>
                                                <i class="fa-regular fa-star"></i>
                                            </div>
                                            <h5 className='orange-dark'>${service.price}</h5>
                                            <button className='btn btn-light 2 btn-outline-dark'>Book Now</button>
                                        </div>
                                        
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;