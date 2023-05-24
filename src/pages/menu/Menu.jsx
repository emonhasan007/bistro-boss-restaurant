import React from 'react';
import { Helmet} from 'react-helmet-async';
import Cover from '../sheared/cover/Cover';
import PopulerMenue from '../home/PopulerMenue';
import img from '../../assets/menu/banner3.jpg'

const Menu = () => {
    return (
        <div>
           <Helmet>
            <title>Menu</title>
            </Helmet> 
            <Cover img={img} title='Our Menu'></Cover>
            <PopulerMenue></PopulerMenue>
            <Cover img={img} title='Our Menu'></Cover>
            <PopulerMenue></PopulerMenue>
            <Cover img={img} title='Our Menu'></Cover>
            <PopulerMenue></PopulerMenue>
            <Cover img={img} title='Our Menu'></Cover>
            <PopulerMenue></PopulerMenue>
        </div>
    );
};

export default Menu;