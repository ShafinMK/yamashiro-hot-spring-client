import React from 'react';
import './SpasAndBaths.css';
import '../../stylesheets/backgrounds.css';
import Outdoor from './Outdoor';
import Indoor from './Indoor';
import ForestHotWater from './ForestHotWater';

const SpasAndBaths = () => {
    return (
        <div className='spa-bath-bg pb-5'>
            {/* banner */}
            <section className='spa-and-bath-bg'>
                <div className='py-5'>
                    <div className="py-5"></div>
                    <h1 className='text-center text-light'>Our Spas & Baths</h1>
                   
                    <div className="py-5"></div>
                </div>
            </section>

            
            <Outdoor></Outdoor>
            <Indoor></Indoor>
            <ForestHotWater></ForestHotWater>

        </div>
    );
};

export default SpasAndBaths;