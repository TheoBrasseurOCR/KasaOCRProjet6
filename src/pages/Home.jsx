import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import Logements from '../data/logements.json';

function Home() {
    return(
        <section>
            <div className='home'>
                <Header />
                <Banner />
                <Gallery accommodations={Logements}/>
            </div>
            <Footer />
        </section>
    )
}
export default Home;