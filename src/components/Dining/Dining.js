import React, { useEffect, useState } from 'react';
import './Dining.css';

const Dining = () => {
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
            .then(res => res.json())
            .then(data => {
                // console.log(data.meals);
                setFoods(data.meals);
            })
    }, [])
    return (
        <div className='dinig-bg'>
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
                        <h1 className='text-center pb-5 text-dark'>Dining Menu</h1>
                        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3'>
                            {
                                foods.map(food => (
                                    <div className='col ' key={food.idMeal}>
                                        <div className=' food-card-bg rounded shadow-sm position-relative' style={{backgroundImage:`linear-gradient(to bottom, rgba(0, 0, 0, 0.07), rgba(0, 0, 0, 0.73)), url(${food.strMealThumb})`}}>
                                            {/* <img src={food.strMealThumb} className='img-fluid rounded' alt="" /> */}
                                            <div className="py-5"></div>
                                            <div className="py-5"></div>
                                            <div className="py-5"></div>
                                            <div className="position-absolute top-0 end-0 me-5 mt-4 khaki text-light px-3 rounded py-1"> ${parseInt(food.idMeal.slice(-3,-1))+10}</div>
                                            <h5 className='position-absolute bottom-0 start-50 translate-middle text-light'>{food.strMeal}</h5>
                                        </div>

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