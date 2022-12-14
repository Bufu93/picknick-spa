import React from 'react';
import About from '../About/About';
import Advantages from '../Advantages/Advantages';
import Ecology from '../Ecology/Ecology';
import FAQ from '../FAQ/FAQ';
import Hero from '../Hero/Hero';
import Technology from '../Technology/Technology';

function Home() {
    return (
        <>
            <main>
                <Hero />
                <About />
                <Advantages />
                <Technology />
                <Ecology />
                <FAQ />
            </main>
        </>
    );
}

export default Home;
