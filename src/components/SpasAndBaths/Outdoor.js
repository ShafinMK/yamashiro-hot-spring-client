import React from 'react';

const Outdoor = () => {
    return (
        <div>
            {/* ourdoor bath section  */}
            <section className='container '>
                <div className='shadow rounded'>
                    <div className='outdoor-bath-bg mt-5 '>
                        <div className='py-5'>
                            {/* <div className="py-5"></div> */}
                            <div className="row ">
                                <div className="col-12 col-md-6 col-lg-4 text-light ">
                                    <div className='p-2'>
                                        <h1 className=' '>Outdoors</h1>
                                        <p>Enjoy the beauty of nature while playing outdoors in this fun area. The popular warm water slides keep you comfortable year round and the outdoor hot spring, perched 600m above sea level, provides a magnificent view of Sagami Bay on clear days.</p>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="py-5"></div> */}
                        </div>
                    </div>

                    <div className=''>
                        {/* water  slide  */}
                        <div className="row mt-5  align-items-center">
                            <div className="col-12 col-lg-7 p-4">
                                <img src='https://i.ibb.co/db4h1f8/mountain-water-slide.jpg' className='img-fluid' alt="" />
                            </div>
                            <div className="col-12 col-lg-5 p-4">
                                <h1 className='pacifico-font'><span className='dark-blue'>Rodeo Mountain</span> <br /> water slides</h1>
                                <p className='mt-3'>Experience the thrill of river rapids on exciting water slides that are often featured in Japanese TV shows and magazines. Warm water keeps you cozy even in cold winter months, and you can admire a great vista of Hakone from the top. Try all three slides to compare their turns! (Minimum guest height: 110 cm)</p>
                            </div>

                        </div>
                        {/* outdoor hot spring  */}
                        <div className="row mt-5  align-items-center">
                            <div className="col-12 col-lg-5 p-4">
                                <h1 className='pacifico-font'>Outdoor hot spring <br /> with <span className='dark-blue'>scenic view</span></h1>
                                <p className='mt-3'>Relax surrounded by nature in our 40-meter hot spring bath while soaking up the beautiful sight of Hakone’s mountains and Sagami Bay when the weather is clear.</p>

                            </div>
                            <div className="col-12 col-lg-7 p-4">
                                <img src='https://i.ibb.co/KjsFD8L/outdoor-hot-spring.jpg' className='img-fluid' alt="" />
                            </div>
                        </div>
                        {/* cave baths    */}
                        <div className="row mt-5  align-items-center">
                            <div className="col-12 col-lg-7 p-4">
                                <img src='https://i.ibb.co/BNcyd5G/cave-bath.jpg' className='img-fluid' alt="" />
                            </div>
                            <div className="col-12 col-lg-5 p-4">
                                <h1 className='pacifico-font'><span className='dark-blue'>Cave</span> Baths</h1>
                                <p className='mt-3'>Explore the mysterious hot spring caves beneath Rodeo Mountain and discover the stunning aquariums of swaying jellyfish.</p>

                            </div>
                        </div>

                        {/* dragons waterfall */}
                        <div className="row mt-5  align-items-center">
                            <div className="col-12 col-lg-5 p-4">
                                <h1 className='pacifico-font'>Dragon’s <span className='dark-blue'>Waterfall</span></h1>
                                <p className='mt-3'>Stand beneath the waterfall and feel it splash your body. Or play in its warm pool while relishing Hakone’s natural scenery.</p>

                            </div>
                            <div className="col-12 col-lg-7 p-4">
                                <img src='https://i.ibb.co/s5zTWZt/dragon-s-waterfall.jpg' className='img-fluid' alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Outdoor;