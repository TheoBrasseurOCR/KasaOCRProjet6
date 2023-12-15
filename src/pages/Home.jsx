import React from 'react';
import Header from '../Layout/Header';
import HomeBanner from '../components/Home/HomeBanner';
import Footer from '../Layout/Footer'

function Home() {
    return(
        <section>
            <div className='home'>
                <Header />
                <HomeBanner />

            </div>
            <Footer />
        </section>
    )
}
export default Home;