import React from 'react';
import WorkingTime from '../Home/WorkingTime/WorkingTime';

const Contacts = () => {
    return (
        <div className=''>
             {/* banner */}
             <section className='contact-bg'>
                <div className='py-5'>
                    <div className="py-5"></div>
                    <h1 className='text-center text-light'>Contact Us</h1>
                    <p className='text-center text-light pt-4'>Our crazy-talented master stylists will connect with you on a personal
                        <br />
                        level, embraces your individuality and lifestyle.
                    </p>
                    <div className="py-5"></div>
                </div>
            </section>
            
            <div className="container">
            <WorkingTime></WorkingTime>
            </div>
        </div>
    );
};

export default Contacts;