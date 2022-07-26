import React from 'react';
import '../../../stylesheets/buttons.css';
import '../../../stylesheets/backgrounds.css';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const HomePhilosophy = () => {
    return (
        <div className='light-orange my-5'>
            <div className='container py-5'>
                <div className="row align-items-center">
                    <div className="col-12 col-lg-6 p-5">
                        <img src={require('../../../images/philosophy.jpg')} className='img-fluid' alt="" />
                    </div>
                    <div className="col-12 col-lg-6 p-5 h-100">
                        <h1>Philosophy</h1>
                        <p className='my-5'>We started as a small spa salon in Islington, London. Our main idea was to create the best spa salon in the world. Can there be compromises in the best salon in the world? Our answer is always no, we care about the best quality, we hire the best specialists and provide the best customer service. This approach allowed us to grow and create awesome team that is passionate about everything we do.</p>
                        
                        <Link to='/philosophy'>

                            <motion.button className='large-button transparent-button-black' whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}>Learn More</motion.button>
                            </Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default HomePhilosophy;