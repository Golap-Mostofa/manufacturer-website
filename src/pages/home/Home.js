import React from 'react';
import Footer from '../sheard/Footer';
import HomeBanner from './HomeBanner';
import Services from './Services.';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Tools></Tools>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;