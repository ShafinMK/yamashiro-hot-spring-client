import React from 'react';
import './Philosophy.css';

const Philosophy = () => {
    return (
        <div>
            {/* banner */}
            <section className='philosophy-bg'>
                <div className='py-5'>
                    <div className="py-5"></div>
                    <h1 className='text-center text-light'>Philosophy</h1>
                    <div className="py-5"></div>
                </div>
            </section>

            {/* feature section  */}
            <section>
                <div className='container'>
                    <h1 className='text-center py-5'>What We Believe</h1>
                    <div className='row text-center  py-5' data-aos="fade-up" data-aos-duration="3000">
                        <div className=' col-12 col-md-6 col-lg-4 p-3 feature '>
                            <img src={require('../../images/philosophy-icons/1.png')} className='img-fluid' width='60' alt="" />
                            <h6 className='py-3'>Green Beauty</h6>
                            <span className='light-black'>All cosmetic forumulas are organic.</span>
                            <br />
                            <span className='light-black'>The majority of all ingredients is</span>
                            <br />
                            <span className='light-black'>natural.</span>
                        </div>
                        <div className=' col-12 col-md-6 col-lg-4 p-3 feature '>
                            <img src={require('../../images/philosophy-icons/2.png')} className='img-fluid' width='60' alt="" />
                            <h6 className='py-3'>Cruelty-Free</h6>
                            <span className='light-black'>Even nowadays some cosmetic</span>
                            <br />
                            <span className='light-black'>products are tested on animals. That</span>
                            <br />
                            <span className='light-black'>is not the case for us.</span>
                            <br />
                        </div>
                        <div className=' col-12 col-md-6 col-lg-4 p-3 feature '>
                            <img src={require('../../images/philosophy-icons/3.png')} className='img-fluid' width='60' alt="" />
                            <h6 className='py-3'>Professional Care</h6>
                            <span className='light-black'>All products we use are professional</span>
                            <br />
                            <span className='light-black'>and have proven effeciency. No</span>
                            <br />
                            <span className='light-black'>compromises.</span>
                        </div>
                        <div className=' col-12 col-md-6 col-lg-4 p-3 feature '>
                            <img src={require('../../images/philosophy-icons/4.png')} className='img-fluid' width='60' alt="" />
                            <h6 className='py-3'>Non-Toxic Formula</h6>
                            <span className='light-black'>Don’t worry, all our nails polishes and</span>
                            <br />
                            <span className='light-black'>other products are non-toxic. We do</span>
                            <br />
                            <span className='light-black'>care about you and our specialists.</span>
                        </div>
                        <div className=' col-12 col-md-6 col-lg-4 p-3 feature '>
                            <img src={require('../../images/philosophy-icons/5.png')} className='img-fluid' width='60' alt="" />
                            <h6 className='py-3'>Personalized Experience</h6>
                            <span className='light-black'>Each guest is our favourite guest.</span>
                            <br />
                            <span className='light-black'>Come and make sure that our service</span>
                            <br />
                            <span className='light-black'>is exceptional.</span>
                        </div>
                        <div className=' col-12 col-md-6 col-lg-4 p-3 feature '>
                            <img src={require('../../images/philosophy-icons/6.png')} className='img-fluid' width='60' alt="" />
                            <h6 className='py-3'>We Love What We Do</h6>
                            <span className='light-black'>People that you’ll meet in our studio</span>
                            <br />
                            <span className='light-black'>are doing job they love. Come and</span>
                            <br />
                            <span className='light-black'>make sure there is a difference.</span>
                        </div>

                    </div>
                </div>
            </section>

            {/* story section  */}
            <section className='story-bg'>
                <div className="py-3"></div>
                <div className="container">
                    <div className="row align-items-center ">
                        <div className="col-12 col-md-6">
                            <img src={require('../../images/ourStory.jpg')} className='img-fluid p-5' alt="" />
                        </div>
                        <div className="col-12 col-md-5 px-5">
                            <h1 className='my-5'>Our Story</h1>
                            <p className='light-black'>Dear friends, I would certainly love to meet you all in persone, so come and just say hi. If it’s not possible at the moment, I would loke to introduce myself‚ I’m Shafin, the founder of Yamashiro Onsen. I’m certain that new haircut, professional makup or just getting your nails done — is a pretty easy way to make your day or week better. I guarantee that you will appreciate the atmosphere of our place. Looking forward to meeting you!</p>
                            <h6>- Shafin Muhammad</h6>
                        </div>
                    </div>
                </div>
                <div className="py-3"></div>
            </section>
            {/* products section  */}
            <section className='container my-5 py-5'>

                <div className="row align-items-center">

                    <div className="col-12 col-md-6 px-5">
                        <h1 className='my-5'>Our Products</h1>
                        <p className='light-black'>All our products are cruelty-free, it’s a category containing all cosmetics that have not been tested on animals. Each cosmetic is subject to strict control by independent inspection bodies chosen by the Coalition for Consumer Information in Cosmetics (CCIC), which is an NGO founded by 8 international animal protection groups such as: American Anti-Vivisection Society, Animal Alliance of Canada, Doris Day Animal League, etc.</p>
                        <button className='my-5 btn border border-3 border-dark px-4 py-2'>Shop Now</button>
                    </div>
                    <div className="col-12 col-md-6">
                        <img src={require('../../images/product.jpg')} className='img-fluid p-5' alt="" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Philosophy;