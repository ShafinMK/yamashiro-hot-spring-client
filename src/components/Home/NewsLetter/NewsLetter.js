import React from 'react';

const NewsLetter = () => {
    return (
        <div className='py-5'>
            <div className="row text-center py-5">
                <div className="col-12 col-md-6 border-end border-dark py-5">
                    <h5  className='my-5'>Follow Us</h5>
                    <p  className='my-3 light-black px-1'>Don’t miss promotions, follow us for the latest news</p>
                    <div>
                        <img src={require('../../../images/icons/facebook.png')} className='img-fluid px-2' width='40' alt="" />
                        <img src={require('../../../images/icons/instagram.png')} className='img-fluid px-2' width='40' alt="" />
                    </div>
                </div>
                <div className="col-12 col-md-6  py-5">
                    <h5 className='my-5'>Subscribe to Our Newsletter</h5>
                    <div className='row justify-content-center'>
                        <div className='col-12 col-lg-6'>
                            <div className="input-group px-3  ">
                                <input type="Email" className="form-control" placeholder="Email" />
                                <button className="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default NewsLetter;