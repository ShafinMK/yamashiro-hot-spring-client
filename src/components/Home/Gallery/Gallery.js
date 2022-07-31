import React, { useEffect, useState } from 'react';
import '../../../stylesheets/buttons.css';
import './Gallery.css';

const Gallery = () => {
    const [images, setImages] = useState([]);
    useEffect( ()=>{
        fetch('http://localhost:5000/carousals/?imgfor=Home%20Heading%20Carousal')
        .then(res => res.json())
        .then(data => setImages(data))
    }, [])
    return (
        <div className='my-5 text-center'>
            <h1 className='py-5'>Gallery</h1>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-1'>
                {
                    images.map(image => (
                        <div className='col' key={image._id}>
                            <div className='card gallery-img' style={{backgroundImage:`url(${image.imgurl})`}}>
                                <div className="py-5"></div>
                                <div className="py-5"></div>
                                <div className="py-5"></div>
                                <div className="py-5"></div>
                                <div className="py-5"></div>
                                {/* <img src={image.imgurl} alt="" className='img-fluid w-100' /> */}
                            </div>
                        </div>
                    ))
                }
               
            </div>
            <a href="https://www.instagram.com/shafin4104/" target={'_blank'}> <button className='btn btn-dark my-5 px-5 py-3'>Follow US @ Yamashiro Onsen</button></a>
           
        </div>
    );
};

export default Gallery;