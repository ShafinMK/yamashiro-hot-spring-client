import React, { useEffect, useState } from 'react';
import './Dining.css';

const Dining = () => {
    const [foods, setFoods] =  useState([]);
    useEffect( ()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
        .then(res => res.json())
        .then(data => {
            console.log(data.meals);
            setFoods(data.meals);
        })
    },[])
    return (
        <div>
            {/* banner */}
            <section className='dining-bg'>
                <div className='py-5'>
                    <div className="py-5"></div>
                    <h1 className='text-center text-light'>Our Dining</h1>
                    <p className='text-center text-light pt-4'>Check our awesome dining with variety of items.
                        <br />
                        Get your favourate dish from our menu
                    </p>
                    <div className="py-5"></div>
                </div>
            </section>

            {/* food menu section  */}
            <section>

                <div className="container">
                    <section className='container mt-5'>
                        <div className='py-5'></div>
                        <h1 className='text-center pb-5'>Dining Menu</h1>
                        <div className='row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4'>
                            {
                                foods.map( food  => (
                                    <div className='col shadow-sm'>
                                        <img src={food.strMealThumb} className='img-fluid rounded' alt="" />
                                        <h6 className='text-center py-3'>{food.strMeal}</h6>
                                    </div>
                                ))
                                
                            }
                        </div>
                        <div className='py-5'></div>
                    </section>
                </div>
            </section>
        </div>
    );
};

export default Dining;