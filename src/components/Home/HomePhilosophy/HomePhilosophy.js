import React, { useEffect } from 'react';
import '../../../stylesheets/buttons.css';
import '../../../stylesheets/backgrounds.css';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from "framer-motion";
import './HomePhilosophy.css';
import { useInView } from 'react-intersection-observer';

const HomePhilosophy = () => {
    const { ref, inView } = useInView({ threshold: 0.4 });
    const animationLeft = useAnimation();
    const animationRight = useAnimation();
    useEffect(() => {
        if (inView) {
            animationLeft.start({
                x: 0,
                transition: { duration: .5, type:'spring', bounce: .3 }
            });
            animationRight.start({
                x: 0,
                transition: { duration: .5 , type:'spring', bounce: .3}
            });

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
        <div className='philosophy-bg-parallax my-5'>
            <div className='philosophy-parallax-text'>
                <div className='container py-5' ref={ref}>
                    <motion.div className="row align-items-center" initial={{x:'-100vw'}} animate={animationLeft}>
                        <div className="col-12 col-lg-6 p-5" >
                            <img src={require('../../../images/philosophy.jpg')} className='img-fluid rounded' alt="" />
                        </div>
                        <div className="col-12 col-lg-6 p-5 h-100 text-light" animate={animationLeft}>
                            <h1>Philosophy</h1>
                            <p className='my-5 '>We started as a small spa salon in Islington, London. Our main idea was to create the best spa salon in the world. Can there be compromises in the best salon in the world? Our answer is always no, we care about the best quality, we hire the best specialists and provide the best customer service. This approach allowed us to grow and create awesome team that is passionate about everything we do.</p>

                            <Link to='/philosophy'>

                                <motion.button className='large-button transparent-button-white' whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}>Learn More</motion.button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>

    );
};

export default HomePhilosophy;