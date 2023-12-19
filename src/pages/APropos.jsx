import React from 'react';
import Header from '../components/Home/Header/Header';
import AProposBanner from '../components/APropos/Banner/AProposBanner';
import Collapses from '../components/APropos/Collapse/Collapses';
import Values from '../data/values.json';
import Footer from '../components/Home/Footer/Footer';

function APropos() {
    return(
        <section>
            <div className='about'>
                <Header />
                <AProposBanner />
                <div className='about_collapses'>
                    <Collapses data={Values} />
                </div>
            </div>
            <Footer />
        </section>
    )
}

export default APropos;