import React from 'react';
import About from '../About/About';
import Advantages from '../Advantages/Advantages';
import Ecology from '../Ecology/Ecology';
import FAQ from '../FAQ/FAQ';
import Hero from '../Hero/Hero';
import Technology from '../Technology/Technology';
import Gallery from '../Gallery/Galley';

function Home() {
    return (
        <>
            <main>
                <Hero />
                <About />
                <Advantages />
                <Gallery />
                <Technology />
                <Ecology />
                <FAQ />
            </main>
        </>
    );
}

export default Home;
