import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import '../../../stylesheets/backgrounds.css';
import '../../../stylesheets/buttons.css';
import { useInView } from 'react-intersection-observer';

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
    const { ref, inView } = useInView({ threshold: 0.6 });
    const animationLeft = useAnimation();
    const animationRight = useAnimation();
    useEffect(() => {
        if (inView) {
            animationLeft.start({
                x: 0,
                transition: { duration: .5, type: 'spring', bounce: .3 }
            });
            animationRight.start({
                x: 0,
                transition: { duration: .5, type: 'spring', bounce: .3 }
            });
            console.log(inView);
        }
        // if (!inView) {
        //     animationLeft.start({
        //         x: '-100vw'
        //     });
        //     animationRight.start({
        //         x: '100vw',
        //         // transition: { duration: 1 }
        //     });
        // }

    }, [inView])

    return (
        <div className=' my-5 light-pink'>
            <div className='container py-5' ref={ref}>
                <motion.div className="row py-5 my-5" initial={{x:"100vw"}} animate={animationRight}>
                    <div className="col-12 col-lg-5">
                        <h1 className=''>Gift Cards</h1>
                        <p className='my-5 light-black'>Our crazy-talented master stylists will connect with you on a personal level, using their creativity and skill to envision a natural, ready-to-wear style that embraces your individuality and lifestyle. Our crazy-talented master stylists will connect with you on a personal level, using their creativity and skill to envision a natural, ready style that embraces your individuality and lifestyle.</p>
                        <Link to='/giftcards'>
                            <button className='btn btn-outline-dark px-5 py-3'>Learn More</button>
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
                </motion.div>
            </div>

        </div>
    );
};

export default GiftCards;