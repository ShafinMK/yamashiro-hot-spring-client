import React from 'react';
import { Link } from 'react-router-dom';
import '../../stylesheets/font and Color.css'

const Footer = () => {
    return (
        <div className='bg-dark text-white '>
        <div className="container py-5">
            <div className="row g-4">
                <div className='col-12 col-lg-6'>
                    <div className='d-flex justify-content-center align-items-center justify-content-lg-start'>
                        <img src={require('../../images/icons/spa.png')} width='40' height='40' alt="" />
                        <h1><span className=''>Yamashiro</span> <span className='green'>Onsen</span></h1>
                    </div>

                    <div className='text-center text-lg-start'>
                        <p className='pt-5'>Reach us:</p>
                        <h1>+(880) 1234567890</h1>
                        <p>Burj Khalifa, 58th Floor, D block, 34 Row, <br /> Kandirpar, Comilla</p>
                        <h5>shafinmuhammad28@gmail.com</h5>
                        <div className='py-5'>
                            <i className=" p-4 fs-4 fa-brands fa-facebook"></i>
                            <i className=" p-4 fs-4 fa-brands fa-instagram"></i>
                            <i className=" p-4 fs-4 fa-brands fa-twitter"></i>
                            <i className=" p-4 fs-4 fa-brands fa-youtube"></i>

                        </div>

                        <span>&copy;2022 Yamashiro Onsen <Link to='/privacyterms'>Privacy Policy</Link></span>
                    </div>
                </div>


                <div className='col-12 col-lg-6 text-center text-lg-start'>
                    <h1>Subscribe to Newsletter</h1>
                    <p>Sign up for our e-mail and be the first to know about our special offers!</p>

                    <div className="input-group mb-3 ">
                        <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-envelope"></i></span>
                        <input type="email" className="form-control" placeholder="Type Your Email" />
                        <button className="btn btn-outline-secondary bg-warning text-dark" type="button" id="button-addon2">Subscribe</button>
                    </div>

                    <div className="row mt-5">
                        <div className="col-12 col-lg-4 p-4">
                            <div className='d-flex justify-content-center align-items-center  h-100'>
                                <div className='text-center text-lg-start'>
                                    <h6>Who We are</h6>
                                    <h6>Services</h6>
                                    <h6>Pricing</h6>
                                    <h6>Contacts</h6>
                                </div>
                            </div>
                        </div>

                        <div className='col-12 col-lg-5 p-4'>
                            <div className='d-flex justify-content-center align-items-center h-100'>
                                <div className='text-center text-lg-start'>
                                    <h6>Spa</h6>
                                    <h6>Facial</h6>
                                    <h6>Massage</h6>
                                    <h6>Skin Care</h6>
                                    <h6>Body Treatment</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    );
};

export default Footer;