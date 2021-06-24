import React from 'react';
import Carosel from '../Carosel/Carosel';
import Footer from '../Footer/Footer';
import NavBar from '../NabBar/NavBar';
import RecentPost from '../RecentPost/RecentPost';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    return (
        <>
        <NavBar />
        <Carosel />
        <RecentPost />
        <Subscribe />
        <Footer />

        </>
    );
};

export default Home;