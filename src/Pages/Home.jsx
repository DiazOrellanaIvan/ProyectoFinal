import React from 'react';
import Navbar from '../Components/Navbar';
import Cards from '../Components/Cards';
import Footer from '../Components/Footer';
import Slider from '../Components/Slider';
import Info from '../Components/Info';

const Home = () => {
    return(
    <>
        <Navbar />
        <Slider />
        <Cards />
        <Info />
        <Footer />
    </>
    );
}

export default Home; 