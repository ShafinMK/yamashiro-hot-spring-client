import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import '../../../stylesheets/backgrounds.css';
import '../../../stylesheets/buttons.css';

const GiftCards = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        fade: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1

    };
    return (
        <div className=' my-5 light-pink'>
            <div className='container py-5'>
                <div className="row py-5 my-5">
                    <div className="col-12 col-lg-5">
                        <h1 className=''>Gift Cards</h1>
                        <p className='my-5'>Our crazy-talented master stylists will connect with you on a personal level, using their creativity and skill to envision a natural, ready-to-wear style that embraces your individuality and lifestyle. Our crazy-talented master stylists will connect with you on a personal level, using their creativity and skill to envision a natural, ready style that embraces your individuality and lifestyle.</p>
                        <Link to='/giftcards'>
                            <button className='large-button transparent-button-black'>Learn More</button>
                        </Link>

                    </div>
                    <div className="col-12 col-lg-7">
                        <Slider {...settings}>
                            <div>
                                <img src={require('../../../images/gift-cards/1.jpeg')} className='img-fluid' alt="" />
                            </div>
                            <div>
                                <img src={require('../../../images/gift-cards/2.jpeg')} className='img-fluid' alt="" />
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default GiftCards;