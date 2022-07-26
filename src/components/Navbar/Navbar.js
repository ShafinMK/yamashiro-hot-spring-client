import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick/lib/slider';
import './Navbar.css';
import '../../stylesheets/buttons.css';
import '../../stylesheets/font and Color.css';

const Navbar = () => {



    return (
        <div className='overflow-hidden '>
            <div className='navbar navbar-expand-lg d-flex justify-content-between justify-content-lg-center navbar-dark bg-dark'>
                <Link to='/home' style={{ textDecoration: 'none' }}>
                    <div className='d-flex align-items-center'>
                        <img src={require('../../images/icons/spa.png')} className='img-fluid px-1' width='40' alt="" />
                        <span className='fs-2 text-light'>Yamashiro <span className='green'>Onsen</span></span>
                    </div>
                </Link>
                <button className="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <nav className="navbar navbar-expand-lg p-0 p-lg-2">

                <div className="container-fluid">

                    {/* <Link to='/home'><div className='d-block'>Yamashiro Hot Spring</div></Link>
                    <button className="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}


                    {/* for wide screen large device  */}
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100  justify-content-center align-items-center">
                            <li className="nav-item">
                                <Link to='/home' className=' navItem' style={{ textDecoration: 'none' }}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/services' className=' navItem' style={{ textDecoration: 'none' }}>Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/philosophy' className=' navItem' style={{ textDecoration: 'none' }}>Phylosophy</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/team' className=' navItem' style={{ textDecoration: 'none' }}>Team</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/giftcards' className=' navItem' style={{ textDecoration: 'none' }}>Gift Cards</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/contacts' className=' navItem' style={{ textDecoration: 'none' }}>Contacts</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/dining' className=' navItem' style={{ textDecoration: 'none' }}>Dining</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/spasandbaths' className=' navItem' style={{ textDecoration: 'none' }}>Spas & baths </Link>
                            </li>


                        </ul>

                    </div>

                </div>
            </nav>


            {/* for small screeen offcanvas  */}
            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasRightLabel">Yamashiro Hot Spring</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul>
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/services'>Services</Link></li>
                    </ul>
                </div>
            </div>





        </div>
    );
};

export default Navbar;