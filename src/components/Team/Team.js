import React, { useEffect, useState } from 'react';
import Member from './Member';
import './Team.css';

const Team = () => {
    const [members, setMembers] = useState([]);
    useEffect( ()=>{
        fetch('https://shafinmk.github.io/resources-api/spa-workers.json')
        .then(res => res.json())
        .then(data => setMembers(data))
    }, []);
    return (
        <div>
             {/* banner */}
             <section className='team-bg'>
                <div className='py-5'>
                    <div className="py-5"></div>
                    <h1 className='text-center text-light'>Our Team</h1>
                    <p className='text-center text-light pt-4'>Our crazy-talented master stylists will connect with you on a personal
                        <br />
                        level, embraces your individuality and lifestyle.
                    </p>
                    <div className="py-5"></div>
                </div>
            </section>


            {/* members section  */}
            <section className='container mt-5'>
                <div className='py-5'></div>
                <div className='row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4'>
                    {
                        members.map(member => <Member key={member.image} member={member}></Member>)
                    }
                </div>
                <div className='py-5'></div>
            </section>

            {/* join team section  */}
            <section className='container my-5 text-center border-top'>
                <div className='py-5'></div>
                <img src={require("../../images/icons/hiring.png")} width='50' className='my-4' alt="" />
                    <h4>Join Our Team</h4>
                    <p className='my-4'>Please send us an email at vacancy@cherie.com telling us a bit
                        <br />
                        about yourself. Oh…and attach your resume.
                    </p>
                    <button className='btn bg-transparent border border-dark px-4 py-2'>View Positions</button>
                    <div className='py-5'></div>
            </section>
        </div>
    );
};

export default Team;