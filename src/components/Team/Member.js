import React from 'react';

const Member = (props) => {
    const { name, image, title } = props.member;
    return (
        <div className='col'>
            <div className=" text-center">
                <img src={image} className='img-fluid' alt="" />
                <div className='pt-3'>
                    <h6>{name}</h6>
                    <p>{title}</p>
                </div>
            </div>
        </div>
    );
};

export default Member;