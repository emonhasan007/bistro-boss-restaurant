import React from 'react';
import Banner from './Banner';
import Category from './Category';
import PopulerMenue from './PopulerMenue';
import Featured from '../Featured';
import Testimonial from '../Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopulerMenue></PopulerMenue>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;