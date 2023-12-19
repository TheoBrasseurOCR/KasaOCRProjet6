import React from 'react';
import Header from '../components/Home/Header/Header';
import Banner from '../components/Home/Banner/Banner';
import Footer from '../components/Home/Footer/Footer';
import Logements from '../data/logements.json';

function Home() {
    return(
        <section>
            <div className='home'>
                <Header />
                <Banner />

            </div>
            <Footer />
        </section>
    )
}
export default Home;