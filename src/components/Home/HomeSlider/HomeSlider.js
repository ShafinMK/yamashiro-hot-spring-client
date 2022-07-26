import React, { useEffect, useState } from 'react';
import Slider from 'react-slick/lib/slider';
import './HomeSlider.css';

const HomeSlider = () => {
    const settings = {
        dots: false,
        autoplay: true,
        fade: true,
        infinite: true,
        speed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false
    };
    const [backgrounds, setBackgrounds] = useState([]);
    useEffect( ()=>{
        fetch('https://shafinmk.github.io/resources-api/cairo-bistro-api.json')
        .then(res => res.json())
        .then(data => setBackgrounds(data))
    }, []);
   
    return (
        <div>
            {/* slider */}
            <Slider {...settings} className=''>
                {
                    backgrounds.map(background =>(
                    <div>
                        <div className=' h-100 text-center p-5 carouBg'  style={{backgroundImage: `linear-gradient(0deg, rgba(20,20,9,0.639), rgba(20,20,9,0.639)),url(${background.foodImage})` }}>
                            
                        <h1 className='text-white text-center mt-5 py-5'>Relax, Indulge, Enjoy and Love <br /> Yourself.</h1>
                        <div>
                            <button className='large-button mx-3'>Book Service</button>
                            <button className='large-button mx-3 transparent-button-white'>Appointment</button>
                        </div>
                        <div className='d-flex justify-content-evenly text-white mt-5 flex-column flex-md-row '>
                            <div className='mt-5'>
                                <h6>Contact</h6>
                                <p>+880-1311111111</p>
                                <p>shafinmuhammad28<br></br>@gmail.com</p>
                            </div>
                            <div className='mt-5'>
                                <h6>Contact</h6>
                                <p>+880-1311111111</p>
                                <p>shafinmuhammad28<br></br>@gmail.com</p>
                            </div>
                            <div className='mt-5'>
                                <h6>Contact</h6>
                                <p>+880-1311111111</p>
                                <p>shafinmuhammad28<br></br>@gmail.com</p>
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