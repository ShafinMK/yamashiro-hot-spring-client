import React from 'react';

const ForestHotWater = () => {
    return (
        <div>
            <section className='container mb-5'>
                <div className='shadow rounded'>
                    <div className='forest-hot-water-bg mt-5 '>
                        <div className='py-5'>
                            {/* <div className="py-5"></div> */}
                            <div className="row ">
                                <div className="col-12 col-md-6 col-lg-4 text-light ">
                                    <div className='p-2'>
                                        <h1 className=' '>Forest Hot Water Area</h1>
                                        <p>Escape the bustling city and unwind in our outdoor garden with hot spring baths and picturesque Hakone mountain panorama. Enjoy private baths, a sauna and various types of traditional Japanese hot spring baths including one you can lie down in and another crafted from aromatic cypress (female area only).</p>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="py-5"></div> */}
                        </div>
                    </div>

                    <div className=''>
                        {/*open air bath  */}
                        <div className="row mt-5  align-items-center">
                            <div className="col-12 col-lg-7 p-4">
                                <img src='https://i.ibb.co/XDy2fbN/Open-air-baths.jpg' className='img-fluid' alt="" />
                            </div>
                            <div className="col-12 col-lg-5 p-4">
                                <h1 className='pacifico-font'><span className='dark-blue'>Open-air</span> baths</h1>
                                <p className='mt-3'>Indulge in the open atmosphere and mountain scenery of our outdoor hot spring baths. Male and female areas include a Jacuzzi, shallow bath for lying down and roofed rest area. The view of the Hakone mountains is fantastic and at night the area is enchantingly illuminated. Please remove the line break.
                                    Other features include a waterfall shoulder massage in the men’s area and a collagen bath in the female area.</p>
                            </div>

                        </div>
                        {/* Cypress bath  */}
                        <div className="row mt-5  align-items-center">
                            <div className="col-12 col-lg-5 p-4">
                                <h1 className='pacifico-font'><span className='dark-blue'>Cypress bath</span> (female area only)</h1>
                                <p className='mt-3'>Savor the refreshing fragrance of a tub and entire room lavishly crafted from aromatic cypress as you pamper yourself and appreciate the scenic vista.
                                </p>

                            </div>
                            <div className="col-12 col-lg-7 p-4">
                                <img src='https://i.ibb.co/HT9fwsY/Cypress-bath-female.jpg' className='img-fluid w-100' alt="" />
                            </div>
                        </div>
                        {/* Pottery bath   */}
                        <div className="row mt-5  align-items-center">
                            <div className="col-12 col-lg-7 p-4">
                                <img src='https://i.ibb.co/SXjYTRD/Pottery-bath.jpg' className='img-fluid w-100' alt="" />
                            </div>
                            <div className="col-12 col-lg-5 p-4">
                                <h1 className='pacifico-font'><span className='dark-blue'>Pottery</span> bath</h1>
                                <p className='mt-3'>Thoroughly warm your body while admiring the mountains in this rustic outdoor hot spring tub made of traditional Japanese Shigaraki stoneware pottery.</p>

                            </div>
                        </div>

                        {/* Indoor bath */}
                        <div className="row mt-5  align-items-center">
                            <div className="col-12 col-lg-5 p-4">
                                <h1 className='pacifico-font'><span className='dark-blue'>Indoor</span> bath</h1>
                                <p className='mt-3'>Slow down and chat with friends in any weather while basking in our indoor hot spring. The big window with clear view of surrounding mountains creates a sense of oneness with nature.</p>

                            </div>
                            <div className="col-12 col-lg-7 p-4">
                                <img src='https://i.ibb.co/48CSyT8/Indoor-bath.jpg' className='img-fluid' alt="" />
                            </div>
                        </div>
                        {/* Reserved private room with baths */}
                        <div className="row mt-5  align-items-center">
                            <div className="col-12 col-lg-7 p-4">
                                <img src='https://i.ibb.co/0JNvBcy/private-room-with-baths.jpg' className='img-fluid' alt="" />
                            </div>
                            <div className="col-12 col-lg-5 p-4">
                                <h1 className='pacifico-font'>Reserved <span className='dark-blue'>private</span> room with baths</h1>
                                <p className='mt-3'>Relish quality time alone with your family or friends in one of our private hot spring baths, fully indoors or partly outdoors depending on your preference. Guests with tattoos are welcome as well.</p>

                            </div>

                        </div>
                        {/* Saunas */}
                        <div className="row mt-5  align-items-center">
                            <div className="col-12 col-lg-5 p-4">
                                <h1 className='pacifico-font'><span className='dark-blue'>Saunas</span></h1>
                                <p className='mt-3'>An invigorating dry sauna made of richly aromatic cypress invokes healthy sweating in the men’s area. Female guests can enjoy a mist sauna that comfortably moisturizes skin and hair.</p>

                            </div>
                            <div className="col-12 col-lg-7 p-4">
                                <img src='https://i.ibb.co/gvvjnJy/Saunas.jpg' className='img-fluid' alt="" />
                            </div>
                        </div>
                        {/* Lie down bath */}
                        <div className="row mt-5  align-items-center">
                            <div className="col-12 col-lg-7 p-4">
                                <img src='https://i.ibb.co/RTBRHMS/Lie-down-bath.jpg' className='img-fluid w-100' alt="" />
                            </div>
                            <div className="col-12 col-lg-5 p-4">
                                <h1 className='pacifico-font'>Lie <span className='dark-blue'>down</span> bath</h1>
                                <p className='mt-3'>Lie down in the shallow water of this outdoor hot spring for the ultimate in relaxation. At night, starry sky views further enhance your pleasure.</p>

                            </div>

                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default ForestHotWater;