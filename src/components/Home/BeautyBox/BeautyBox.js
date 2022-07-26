import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import './BeautyBox.css';
import '../../../stylesheets/backgrounds.css';
import '../../../stylesheets/buttons.css';

const BeautyBox = () => {
    const settings = {
        dots: true,
        infinite: true,
        // autoplay: true,
        vertical: true,
        verticalSwiping: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1

    };
    return (
        <div className=' my-5 '>
            <div className='container py-5'>
                <div className="row py-5 my-5 align-items-center">
                    <div className="col-12 col-lg-6 p-5">
                        <Slider {...settings}>
                            <div>
                                <img src={require('../../../images/beautybox/1.jpg')} className='img-fluid w-100' alt="" />
                            </div>
                            <div>
                                <img src={require('../../../images/beautybox/2.jpg')} className='img-fluid w-100' alt="" />
                            </div>
                            <div>
                                <img src={require('../../../images/beautybox/3.jpg')} className='img-fluid w-100' alt="" />
                            </div>
                            <div>
                                <img src={require('../../../images/beautybox/4.jpg')} className='img-fluid w-100' alt="" />
                            </div>
                            <div>
                                <img src={require('../../../images/beautybox/5.jpg')} className='img-fluid w-100' alt="" />
                            </div>
                            <div>
                                <img src={require('../../../images/beautybox/6.jpg')} className='img-fluid w-100' alt="" />
                            </div>
                            

                        </Slider>
                    </div>
                    <div className="col-12 col-lg-6">
                        <h1 className=''>Beauty Box</h1>
                        <p className='my-5'>Our crazy-talented master stylists will connect with you on a personal level, using their creativity and skill to envision a natural, ready-to-wear style that embraces your individuality and lifestyle. Our crazy-talented master stylists will connect with you on a personal level, using their creativity and skill to envision a natural, ready style that embraces your individuality and lifestyle.</p>
                        <Link to='/shop'>
                            <button className='large-button transparent-button-black'>Shop Now</button>
                        </Link>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default BeautyBox;