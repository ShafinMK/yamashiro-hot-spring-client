import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick/lib/slider';
import './Navbar.css';
import '../../stylesheets/buttons.css';
import '../../stylesheets/font and Color.css';
import useFirebase from '../../hooks/useFirebase';

const Navbar = () => {

    const { user, logOut } = useFirebase();
    const userBookingsUrl = `/mybookings/${user.email}`

    return (
        <div className='overflow-hidden navbar-style sticky-top'>
            <div className='navbar navbar-expand-lg d-flex justify-content-between justify-content-lg-center navbar-dark '>
                <Link to='/home' style={{ textDecoration: 'none' }}>
                    <div className='d-flex align-items-center '>
                        <img src={require('../../images/icons/spa.png')} className='img-fluid px-1' width='40' alt="" />
                        <span className='fs-2 text-light lobstar-font'>Yamashiro <span className='green'>Onsen</span></span>
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
                            <li className="nav-item px-md-2">
                                <Link to='/home' className=' navItem' style={{ textDecoration: 'none' }}>Home</Link>
                            </li>
                            <li className="nav-item px-md-2 ">
                                <Link to='/services' className=' navItem' style={{ textDecoration: 'none' }}>Services</Link>
                            </li>
                            <li className="nav-item px-md-2">
                                <Link to='/philosophy' className=' navItem' style={{ textDecoration: 'none' }}>Phylosophy</Link>
                            </li>
                            <li className="nav-item px-md-2">
                                <Link to='/spasandbaths' className=' navItem' style={{ textDecoration: 'none' }}>Spas & baths </Link>
                            </li>
                            <li className="nav-item px-md-2">
                                <Link to='/giftcards' className=' navItem' style={{ textDecoration: 'none' }}>Gift Cards</Link>
                            </li>
                            <li className="nav-item px-md-2">
                                <Link to='/dining' className=' navItem' style={{ textDecoration: 'none' }}>Dining</Link>
                            </li>
                            <li className="nav-item px-md-2">
                                <Link to='/team' className=' navItem' style={{ textDecoration: 'none' }}>Team</Link>
                            </li>

                            <li className="nav-item px-md-2">
                                <Link to='/contacts' className=' navItem' style={{ textDecoration: 'none' }}>Contacts</Link>
                            </li>
                            {
                                user?.emailVerified ?
                                    <li className="nav-item px-md-2">
                                        <Link to={userBookingsUrl} className=' navItem' style={{ textDecoration: 'none' }}>My Bookings</Link>
                                    </li> : ''
                            }


                            {
                                user?.emailVerified ? <div className="nav-item px-md-2"><button onClick={logOut} className='btn btn-danger '>Log Out</button></div> :
                                    <li className="nav-item px-md-2">
                                        <Link to='/login' className=' navItem' style={{ textDecoration: 'none' }}>Log In/Sign Up </Link>
                                    </li>
                            }




                        </ul>

                    </div>

                </div>
            </nav>


            {/* for small screeen offcanvas  */}
            <div className="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className='abg-image'></div>
                <div className='abg-text'>
                    <div className="offcanvas-header ">
                        <div className='d-flex justify-content-center align-items-center py-2 py-md-3'>
                            <img src={user.photoURL} className='img-fluid rounded-circle' width='30' alt="" />
                            <span className='text-light ps-1'>{user.email}</span>
                        </div>

                        <button type="button" className="btn-close bg-light" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body ">
                        <ul className='sidebar'>
                            {/* <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/services'>Services</Link></li> */}
                            <li className="side-item px-md-2">
                                <a href='/home' className=' sideItem' style={{ textDecoration: 'none' }}>
                                    <div className='d-flex align-items-center py-2 py-md-3'>
                                        <img src={require('../../images/sidenavIcons/home.png')} className='img-fluid' width='25' alt="" />
                                        <span className='ps-5'>Home</span>
                                    </div>
                                </a>
                            </li>
                            <li className="side-item px-md-2 ">
                                <a href='/services' className=' sideItem' style={{ textDecoration: 'none' }}>
                                    <div className='d-flex align-items-center py-2 py-md-3'>
                                        <img src={require('../../images/sidenavIcons/services.png')} className='img-fluid' width='25' alt="" />
                                        <span className='ps-5'>Services</span>
                                    </div>
                                </a>
                            </li>
                            <li className="side-item px-md-2">
                                <a href='/philosophy' className=' sideItem' style={{ textDecoration: 'none' }}>
                                    <div className='d-flex align-items-center py-2 py-md-3'>
                                        <img src={require('../../images/sidenavIcons/philosophy.png')} className='img-fluid' width='25' alt="" />
                                        <span className='ps-5'>Phylosophy</span>
                                    </div>
                                </a>
                            </li>
                            <li className="side-item px-md-2">
                                <a href='/spasandbaths' className=' sideItem' style={{ textDecoration: 'none' }}>
                                    <div className='d-flex align-items-center py-2 py-md-3'>
                                        <img src={require('../../images/sidenavIcons/spaandbath.png')} className='img-fluid' width='25' alt="" />
                                        <span className='ps-5'>Spas & baths</span>
                                    </div>
                                </a>
                            </li>
                            <li className="side-item px-md-2">
                                <a href='/giftcards' className=' sideItem' style={{ textDecoration: 'none' }}>
                                    <div className='d-flex align-items-center py-2 py-md-3'>
                                        <img src={require('../../images/sidenavIcons/giftcard.png')} className='img-fluid' width='25' alt="" />
                                        <span className='ps-5'>Gift Cards</span>
                                    </div>
                                </a>
                            </li>
                            <li className="side-item px-md-2">
                                <a href='/dining' className=' sideItem' style={{ textDecoration: 'none' }}>
                                    <div className='d-flex align-items-center py-2 py-md-3'>
                                        <img src={require('../../images/sidenavIcons/dining.png')} className='img-fluid' width='25' alt="" />
                                        <span className='ps-5'>Dining</span>
                                    </div>
                                </a>
                            </li>
                            <li className="side-item px-md-2">
                                <a href='/team' className=' sideItem' style={{ textDecoration: 'none' }}>
                                    <div className='d-flex align-items-center py-2 py-md-3'>
                                        <img src={require('../../images/sidenavIcons/team.png')} className='img-fluid' width='25' alt="" />
                                        <span className='ps-5'>Team</span>
                                    </div>
                                </a>
                            </li>

                            <li className="side-item px-md-2">
                                <a href='/contacts' className=' sideItem' style={{ textDecoration: 'none' }}>
                                    <div className='d-flex align-items-center py-2 py-md-3'>
                                        <img src={require('../../images/sidenavIcons/contacts.png')} className='img-fluid' width='25' alt="" />
                                        <span className='ps-5'>Contacts</span>
                                    </div>
                                </a>
                            </li>
                            {
                                user?.emailVerified ?
                                    <li className="side-item px-md-2">
                                        <a href={userBookingsUrl} className=' sideItem' style={{ textDecoration: 'none' }}>
                                            <div className='d-flex align-items-center py-2 py-md-3'>
                                                <img src={require('../../images/sidenavIcons/bookings.png')} className='img-fluid' width='25' alt="" />
                                                <span className='ps-5'>My Bookings</span>
                                            </div>
                                        </a>
                                    </li> : ''
                            }


                            {

                                user?.emailVerified ? <button onClick={logOut} className='btn btn-danger mt-3 w-100 mx-auto'>Log Out</button> :
                                    <li className="side-item px-md-2">
                                        <a href='/login' className=' sideItem' style={{ textDecoration: 'none' }}>
                                            <div className='d-flex align-items-center py-2 py-md-3'>
                                                <img src={require('../../images/sidenavIcons/login.png')} className='img-fluid' width='25' alt="" />
                                                <span className='ps-5'>Log In/ Sign Up</span>
                                            </div>
                                        </a>
                                    </li>

                            }
                        </ul>
                    </div>
                </div>
            </div>





        </div>
    );
};

export default Navbar;