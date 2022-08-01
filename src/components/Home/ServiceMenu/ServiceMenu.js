import React from 'react';
import './ServiceMenu.css';
import '../../../stylesheets/buttons.css';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const ServiceMenu = () => {
    return (
        <motion.div className='container py-5 text-center'  initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}   transition={{ delay: .2, duration: 1 }} viewport={{ once: true }} >
            <h1 className='my-5 py-5'>Services</h1>

            <ul className="nav nav-pills mb-5 justify-content-center" style={{overlowX:'auto'}} id="pills-tab" role="tablist">
                <li className="nav-item mx-3" role="presentation">

                    <div data-bs-toggle="pill" data-bs-target="#pills-spa-programs" className='active service-icon'>
                        <img src={require('../../../images/icons/1.png')} className='img-fluid px-5' alt="" />
                        <span>SPA PROGRAMS</span>
                    </div>
                </li>
                <li className="nav-item mx-3" role="presentation">

                    <div data-bs-toggle="pill" data-bs-target="#pills-massages" className='service-icon'>
                        <img src={require('../../../images/icons/2.png')} className='img-fluid px-5' alt="" />
                        <span>MASSAGES</span>
                    </div>
                </li>
                <li className="nav-item mx-3" role="presentation">

                    <div data-bs-toggle="pill" data-bs-target="#pills-facials" className='service-icon'>
                        <img src={require('../../../images/icons/3.png')} className='img-fluid px-5' alt="" />
                        <span>FACIALS</span>
                    </div>
                </li>
                <li className="nav-item mx-3" role="presentation">

                    <div data-bs-toggle="pill" data-bs-target="#pills-body-treatments" className='service-icon'>
                        <img src={require('../../../images/icons/4.png')} className='img-fluid px-5' alt="" />
                        <span>HOT SPRING</span>
                    </div>
                </li>
                <li className="nav-item mx-3" role="presentation">

                    <div data-bs-toggle="pill" data-bs-target="#pills-for-couples" className='service-icon'>
                        <img src={require('../../../images/icons/5.png')} className='img-fluid px-5' alt="" />
                        <span>FOR COUPLES</span>
                    </div>
                </li>
            </ul>
            <div className="tab-content row justify-content-center" id="pills-tabContent">
                <div className="tab-pane fade show active col-12 col-lg-5" id="pills-spa-programs" role="tabpanel" aria-labelledby="pills-spa-programs-tab" tabIndex="0">
                    <p className= 'light-black'>Our crazy-talented master stylists will connect with you on a personal level, using their creativity and skill to envision a natural, ready-to-wear style that embraces your individuality and lifestyle.</p>
                </div>
                <div className="tab-pane fade col-12 col-lg-5" id="pills-massages" role="tabpanel" aria-labelledby="pills-massages-tab" tabIndex="0">
                    <p className= 'light-black'>We provide a wide range of massages: sports, relaxing, aroma therapy, full body, face massages and a lot more. All our masseurs have medical education and official certificates.</p>
                </div>
                <div className="tab-pane fade col-12 col-lg-5" id="pills-facials" role="tabpanel" aria-labelledby="pills-facials-tab" tabIndex="0">
                    <p className= 'light-black'>Prolong youth by regularly attending our cosmetologists. Treat yourself with professional facial using the best cosmetics.</p>
                </div>
                <div className="tab-pane fade col-12 col-lg-5" id="pills-body-treatments" role="tabpanel" aria-labelledby="pills-body-treatments-tab" tabIndex="0">
                    <p className= 'light-black'>Our crazy-talented master stylists will connect with you on a personal level, using their creativity and skill to envision a natural, ready-to-wear style that embraces your individuality and lifestyle.</p>
                </div>
                <div className="tab-pane fade col-12 col-lg-5" id="pills-for-couples" role="tabpanel" aria-labelledby="pills-for-couples-tab" tabIndex="0">
                    <p className= 'light-black'>All massages and spa programs are available for couples. This mean that you'll have your session at the same time in the same room. What can be more romantic and relaxing?</p>
                </div>
            </div>


            <Link to='/services'>
                <motion.button  whileTap={{ scale: 0.9 }} transition={{ duration: 1 }} className='my-5 btn button-black'>View Service Menu</motion.button>
            </Link>

        </motion.div>
    );
};

export default ServiceMenu;