import React, { useState } from 'react';
import NavBar from './LandingPage/NavBar';
import DropMenu from './LandingPage/DropMenu';
import VideoCard from './LandingPage/VideoCard';
import TopHotels from './LandingPage/TopHotels';
import Testimonials from './LandingPage/Testimonials';
import Footer from './LandingPage/Footer';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <>
​
            <div className="bg-test1">
                <NavBar toggle={toggle} />
                <DropMenu isOpen={isOpen} toggle={toggle} />
                <VideoCard />
            </div>
​
            <TopHotels />
            <Testimonials />
            <Footer />
        </>
    );
}

export default Home;