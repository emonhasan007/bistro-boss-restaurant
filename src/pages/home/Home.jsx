import React from 'react';
import Banner from './Banner';
import Category from './Category';
import PopulerMenue from './PopulerMenue';
import Featured from '../Featured';
import Testimonial from '../Testimonial';
import { Helmet} from 'react-helmet-async';

const Home = () => {
    return (
        <div>
             <Helmet>
            <title>Home</title>
            </Helmet> 
            <Banner></Banner>
            <Category></Category>
            <PopulerMenue></PopulerMenue>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;