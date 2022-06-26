import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Posts from './Posts';
import Contacts from './Contacts';

import React from 'react'

const HomePage = () => {
    return (
        <div id='home-spot'>
            <Navbar />
            <Home />
            <About />
            <Posts />
            <Contacts />
        </div>
    )
}

export default HomePage
