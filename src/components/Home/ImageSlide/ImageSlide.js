import React from 'react';
import Slider from "react-slick";

const ImageSlide = () => {
    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false
      };
    return (
        <div className='container'>
            <Slider {...settings} className='row'>
                <div className='col-12'>
                    <img src={require('../../../images/imageSlide/1.jpeg')} className='img-fluid w-100' alt="" />
                </div>
                <div className='col-12'>
                    <img src={require('../../../images/imageSlide/2.jpg')} className='img-fluid w-100' alt="" />
                </div>
                <div className='col-12'>
                    <img src={require('../../../images/imageSlide/3.jpeg')} className='img-fluid w-100' alt="" />
                </div>
                <div className='col-12'>
                    <img src={require('../../../images/imageSlide/4.jpg')} className='img-fluid w-100' alt="" />
                </div>
                <div className='col-12'>
                    <img src={require('../../../images/imageSlide/5.jpeg')} className='img-fluid w-100' alt="" />
                </div>
            </Slider>
            
        </div>
    );
};

export default ImageSlide;