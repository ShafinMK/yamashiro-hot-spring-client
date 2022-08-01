import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import '../../../stylesheets/buttons.css';
import './Gallery.css';

const Gallery = () => {
    const [images, setImages] = useState([]);
    useEffect(() => {
        fetch('https://murmuring-ravine-46664.herokuapp.com/carousals/?imgfor=Home%20Heading%20Carousal')
            .then(res => res.json())
            .then(data => setImages(data))
    }, []);

    
    const varients = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 1 } }
    }
    const item = {
        hidden: { scale: 0, x: -60 },
        show: { scale: 1, x: 0, transition: { duration: 2 } }
    }
    const { ref, inView } = useInView();
    const animation = useAnimation();
    const childanimation = useAnimation();
    useEffect(() => {
        console.log('image in view', inView);
        if(inView){
            animation.start({
                opacity: 1, transition: { duration:1 }
            });
            childanimation.start({
                scale:1, transition:{duration:2}
            })
        }
        // if(!inView){
        //     animation.start({
        //         opacity: 0, transition: { duration:1 }
        //     });
        //     childanimation.start({
        //         scale:.1
        //     })
            
        // }

    });

    return (
        <div className='my-5 text-center' >
            <h1 className='py-5'>Gallery</h1>
            <div ref={ref}>
                
                {
                    images.length>1 &&<motion.div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-1' initial={{opacity:0}} animate={animation}>

                
                    {
                        images.map(image => (
                            <motion.div className='col' key={image._id} initial={{scale:.1}} animate={childanimation}>
                                <div className='card gallery-img' style={{ backgroundImage: `url(${image.imgurl})` }}>
                                    <div className="py-5"></div>
                                    <div className="py-5"></div>
                                    <div className="py-5"></div>
                                    <div className="py-5"></div>
                                    <div className="py-5"></div>
                                    {/* <img src={image.imgurl} alt="" className='img-fluid w-100' /> */}
                                </div>
                            </motion.div>
                        ))
                    }

                </motion.div>
                }
            </div>
            <a href="https://www.instagram.com/shafin4104/" target={'_blank'}> <button className='btn btn-dark my-5 px-5 py-3'>Follow US @ Yamashiro Onsen</button></a>

        </div>
    );
};

export default Gallery;