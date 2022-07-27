import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import './Review.css';
import '../../../stylesheets/backgrounds.css';


const Review = () => {
  // const [images, setImages] = useState([]);
  // useEffect(() => {
  //   fetch('https://shafinmk.github.io/resources-api/techExpert.json')
  //     .then(res => res.json())
  //     .then(data => setImages(data))
  // }, []);
  const reviews = [
    { name: 'Adam Frans', review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam perferendis error odio, fuga consequatur dolor!' },
    { name: 'Shafin Muhammad', review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam perferendis error odio, fuga consequatur dolor!' },
    { name: 'Shuvam Mazumder', review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam perferendis error odio, fuga consequatur dolor!' },
    { name: 'Salauddin Ahmed', review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam perferendis error odio, fuga consequatur dolor!' },
    { name: 'Jennifer Lopez', review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam perferendis error odio, fuga consequatur dolor!' },
    { name: 'Pit Bull', review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam perferendis error odio, fuga consequatur dolor!' },
    { name: 'Madona', review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam perferendis error odio, fuga consequatur dolor!' },
  ];


  const [reviewIndex, setReviewIndex] = useState(0);

  const settings = {
    dots: false,
    arrows: true,
    autoplay:true,
    infinite: true,
    slidesToShow: 3,
    centerMode: true,
    slidesToScroll: 1,
    beforeChange: (current, next) => setReviewIndex(next),
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  };
  return (
    <div className='border light-green'>
      <div className='text-center py-5'>
        <h4 className='my-5'>Word From Our Happy Clients</h4>
        <Slider {...settings} >

          {
            reviews.map((review, index) => (
              <div className={(index === reviewIndex) ? 'activeSlide' : 'slide'}>
                <div className='py-5'>
                  <h5><q>{review.review}</q></h5>
                  <h6 className='my-4'>{review.name}</h6>
                </div>

              </div>
            ))
          }
        </Slider>

      </div>
      <div className='py-5'></div>
    </div>
  );
};

export default Review;

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className='arrow right'
      // style={{ display: "block", background: "red" }}
      onClick={onClick}
    ><i className="fa-solid fa-circle-arrow-right"></i></div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className=' arrow left'
      // style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    ><i className="fa-solid fa-circle-arrow-left"></i></div>
  );
}