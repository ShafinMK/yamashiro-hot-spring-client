import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick/lib/slider';
import './HomeSlider.css';


const HomeSlider = () => {
    const settings = {
        dots: false,
        autoplay: true,
        fade: true,
        arrows: false,
        infinite: true,
        speed: 4000,
        autoplaySpeed: 6000,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false
    };
    const [backgrounds, setBackgrounds] = useState([]);
    

    useEffect(() => {
        
        fetch('https://murmuring-ravine-46664.herokuapp.com/carousals/?imgfor=Home Heading Carousal')
            .then(res => res.json())
            .then(data => {
                setBackgrounds(data);     
            })
            
    }, []);

    return (

        <div>
            <Slider {...settings} className=''>
                {
                    backgrounds.map(background => (
                        <div key={background._id}>
                            <div className=' h-100 text-center p-5 carouBg' style={{ backgroundImage: `linear-gradient(0deg, rgba(20,20,9,0.639), rgba(20,20,9,0.639)),url(${background.imgurl})` }}>

                                <h1 className='text-white text-center mt-5 py-5 lobstar-font' >Relax, Indulge, Enjoy and Love <br /> <span className='orange'>Yourself</span>.</h1>
                                <div>
                                    <Link to='/services'><button className='btn btn-light px-5 py-3'>Book Service</button></Link>
                                    <button className='btn btn-outline-light px-5 py-3 m-3'>Spas & baths</button>
                                </div>
                                <div className='row justify-content-evenly text-white mt-5 '>
                                    <div className='col-12 col-lg-4'>
                                        <h6 className='py-3'>Contact</h6>
                                        <span>+880-1311111112</span>
                                        <br />
                                        <span>shafinmuhammad28@gmail.com</span>
                                    </div>
                                    <div className='col-12 col-lg-4'>
                                        <h6 className='py-3'>Hours</h6>
                                        <span>Mon to Fri: 7:30 am — 1:00 am</span>
                                        <br />
                                        <span>Sat: 9:00 am — 1:00 am</span>
                                        <br />
                                        <span>Sat: 9:00 am — 1:00 am</span>
                                        <br />
                                    </div>
                                    <div className='col-12 col-lg-4'>
                                        <h6 className='py-3'>Location</h6>
                                        <span>85 King Street,</span>
                                        <br />
                                        <span>NewYork, 323, USA</span>
                                        <br />
                                    </div>
                                </div>
                            </div>
                        </div>))
                }


            </Slider>
        </div>
    );


};

export default HomeSlider;