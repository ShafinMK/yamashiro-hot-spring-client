import React from 'react';

const WorkingTime = () => {
    return (
        <div className='my-5 border-top'>
            <div className='container'>
            <div className='d-flex flex-column flex-md-row text-center mx-5 p-5 justify-content-evenly'>
                <div className='p-2 p-lg-5'>
                    <img src={require('../../../images/icons/phone.png')} className='img-fluid' width='40' alt="" />
                    <h6 className='py-3'>Contacts</h6>
                    <span>+880-131XXXXXXX</span>
                    <br />
                    <span>shafinmuhammad28@gmail.com</span>
                    <br />
                </div>
                <div className='p-2 p-lg-5'>
                    <img src={require('../../../images/icons/clock.png')} className='img-fluid' width='40' alt="" />
                    <h6 className='py-3'>Hours</h6>
                    <span>Mon to Fri: 7:30 am — 1:00 am</span>
                    <br />
                    <span>shafinmuhammad28@gmail.com</span>
                    <br />
                    <span>Sat: 9:00 am — 1:00 am</span>
                    <br />
                </div>
                <div className='p-2 p-lg-5'>
                    <img src={require('../../../images/icons/location.png')} className='img-fluid' width='40' alt="" />
                    <h6 className='py-3'>Location</h6>
                    <span>85 King Street,</span>
                    <br />
                    <span>NewYork, 323, USA</span>
                    <br />
                </div>

            </div>
        </div>
        </div>
    );
};

export default WorkingTime;