import React, { useEffect, useState } from 'react';
import '../../../stylesheets/buttons.css';

const Gallery = () => {
    const [images, setImages] = useState([]);
    useEffect( ()=>{
        fetch('https://shafinmk.github.io/resources-api/cairo-bistro-api-updated-1.json')
        .then(res => res.json())
        .then(data => setImages(data))
    }, [])
    return (
        <div className='my-5 text-center'>
            <h1 className='py-5'>Gallery</h1>
            <div className='row row-cols-1 row-cols-md-3 g-4'>
                {
                    images.map(image => (
                        <div className='col'>
                            <div className='card'>
                                <img src={image.foodImage} alt="" className='img-fluid w-100' />
                            </div>
                        </div>
                    ))
                }
               
            </div>
            <button className='btn btn-dark my-5 px-5 py-3'>Follow US @ Yamashiro Onsen</button>
        </div>
    );
};

export default Gallery;