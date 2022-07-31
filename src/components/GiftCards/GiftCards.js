import React from 'react';
import './GiftCards.css';
import '../../stylesheets/backgrounds.css';

const GiftCards = () => {
    return (
        <div className=''>
            {/* banner */}
            <section className='gift-cards-bg'>
                <div className='py-5'>
                    <div className="py-5"></div>
                    <h1 className='text-center text-light'>Gift Cards</h1>
                    <div className="py-5"></div>
                </div>
            </section>

            {/* feature section  */}
            <section>
                <div className='container'>
                    <h1 className='text-center py-5'>Benefits</h1>
                    <div className='row text-center  py-5 '>
                        <div className=' col-12 col-md-6 col-lg-4 p-3 feature '>
                            <img src={require('../../images/icons/give.png')} className='img-fluid' width='60' alt="" />
                            <h6 className='py-3'>Easy to give</h6>
                            <span className= 'light-black'>Electronic gift card can be sent with a</span>
                            <br />
                            <span className= 'light-black'>coule of clicks. Easy as is, fastest</span>
                            <br />
                            <span className= 'light-black'>delivery possible.</span>
                        </div>
                        <div className=' col-12 col-md-6 col-lg-4 p-3 feature '>
                            <img src={require('../../images/icons/price.png')} className='img-fluid' width='60' alt="" />
                            <h6 className='py-3'>No Amount Limitations</h6>
                            <span className= 'light-black'>You can choose any amount you wish</span>
                            <br />
                            <span className= 'light-black'>and it will be applied to the gift card.</span>
                            <br />
                            <span className= 'light-black'>Very flexible.</span>
                            <br />
                        </div>
                        <div className=' col-12 col-md-6 col-lg-4 p-3 feature '>
                            <img src={require('../../images/icons/Personalize.png')} className='img-fluid' width='60' alt="" />
                            <h6 className='py-3'>Nice & Personalized</h6>
                            <span className= 'light-black'>There is also a possibility to write a</span>
                            <br />
                            <span className= 'light-black'>personalized message: nice, funny,</span>
                            <br />
                            <span className= 'light-black'>just as you wish.</span>
                        </div>


                    </div>
                </div>
            </section>

            {/* cards section  */}

            <section className=' gift-bg-parallax'>

                <div className='gift-parallax-text'>
                <div className='container my-5 py-5 text-center '>
                    <div className="row align-items-center">

                        <div className="col-12 col-md-6 px-lg-5">
                            <img src={require('../../images/gift-cards/1.jpeg')} className='img-fluid p-5' alt="" />
                            <h5 className='py-4'>Physical Gift Card</h5>
                            <p className= ''>When in doubt what to buy as a gift, this is the
                                <br />
                                best option. Our gift cards have no expiration
                                <br />
                                date.
                            </p>
                            <button className='my-5 btn border border-3 border-dark px-4 py-2'>Shop Now</button>
                        </div>
                        <div className="col-12 col-md-6  px-lg-5">
                            <img src={require('../../images/gift-cards/2.jpeg')} className='img-fluid p-5' alt="" />
                            <h5 className='py-4'>E-Gift Card</h5>
                            <p className= ''>When in doubt what to buy as a gift, this is the
                                <br />
                                best option. Our gift cards have no expiration date
                                <br />
                                and you can add a personalized message.
                            </p>
                            <button className='my-5 btn border border-3 border-dark px-4 py-2'>Shop Now</button>
                        </div>
                    </div>
                </div>
                </div>
            </section>

            {/* FAQ section  */}

            <section className='my-5'>
                <div className='container'>
                    <div className='text-center my-5'>
                        <h1 className='my-5'>Frequently Asked Questions</h1>
                        <p className= 'light-black'>Here you can find answers on frequently asked questions. If you cannot
                            <br />
                            find the answer, feel free to contact us via email or phone.
                        </p>
                    </div>
                    <div className="accordion accordion-flush" id="accordionFAQ">
                        <div className="accordion-item row justify-content-center border-0">
                            <div className="  col-12 col-md-8 col-lg-6 border-top border-bottom">
                                <h2 className="accordion-header" id="flush-headingOne">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        Can I exchange my Gift Card to money?
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFAQ">
                                    <div className="accordion-body light-black">

                                        When in doubt what to buy as a gift, this is the best option. Our gift cards have no expiration date and can be used to pay for all the services in our beauty studio or in our cosmetic shop. Amount is flexible and you can personalize your gift card with a message.
                                        <br /><br />
                                        When in doubt what to buy as a gift, this is the best option. Our gift cards have no expiration date and can be used to pay for all the services in our beauty studio or in our cosmetic shop. Amount is flexible and you can personalize your gift card with a message. Our gift cards have no expiration date and can be used to pay for all the services in our beauty studio or in our cosmetic shop.

                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className="accordion-item row justify-content-center  border-0">
                            <div className="col-12 col-md-8 col-lg-6 border-top border-bottom">
                                <h2 className="accordion-header" id="flush-headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        How much time do I have to use my Gift Card?
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFAQ">
                                    <div className="accordion-body light-black">When in doubt what to buy as a gift, this is the best option. Our gift cards have no expiration date and can be used to pay for all the services in our beauty studio or in our cosmetic shop. Amount is flexible and you can personalize your gift card with a message. Our gift cards have no expiration date and can be used to pay for all the services in our beauty studio or in our cosmetic shop.</div>
                                </div>
                            </div>

                        </div>
                        <div className="accordion-item row justify-content-center  border-0">
                            <div className="col-12 col-md-8 col-lg-6 border-top border-bottom">
                                <h2 className="accordion-header" id="flush-headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                        Can I pay for the service with my gift card?
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFAQ">
                                    <div className="accordion-body light-black">Yes, You can pay for the service with your gift card. You can also add money with the gift card to take more service.</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='py-5'></div>
            </section>
        </div>
    );
};

export default GiftCards;