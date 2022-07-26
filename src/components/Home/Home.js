import React from 'react';
import BeautyBox from './BeautyBox/BeautyBox';
import Gallery from './Gallery/Gallery';
import GiftCards from './GiftCards/GiftCards';
import HomePhilosophy from './HomePhilosophy/HomePhilosophy';
import HomeSlider from './HomeSlider/HomeSlider';
import ImageSlide from './ImageSlide/ImageSlide';
import NewsLetter from './NewsLetter/NewsLetter';
import Review from './Review/Review';
import ServiceMenu from './ServiceMenu/ServiceMenu';
import WorkingTime from './WorkingTime/WorkingTime';

const Home = () => {
   
   
    return (
        <div className='overflow-hidden'>
             <HomeSlider></HomeSlider>
             <ServiceMenu></ServiceMenu>
             <HomePhilosophy></HomePhilosophy>
             <ImageSlide></ImageSlide>
             <GiftCards></GiftCards>
             <BeautyBox></BeautyBox>
             <Review></Review>
             <NewsLetter></NewsLetter>
             <Gallery></Gallery>
             <WorkingTime></WorkingTime>
        </div>
    );
};

export default Home;