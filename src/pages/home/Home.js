import React from 'react';
import Footer from '../sheard/Footer';
import Contect from './Dashbord/Contect';
import CostomarRevew from './Dashbord/CostomarRevew';
import HomeBanner from './HomeBanner';
import Services from './Services.';
import Tools from './Tools';

const Home = () => {
    return (
        <div className=''>
            <HomeBanner></HomeBanner>
            <Services></Services>
            <Tools></Tools>
            <CostomarRevew></CostomarRevew>
            <Contect></Contect>
            <Footer></Footer>
        </div>
    );
};

export default Home;