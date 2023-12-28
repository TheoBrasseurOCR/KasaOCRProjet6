import React from 'react';
import Header from '../components/Header';
import AProposBanner from '../components/AProposBanner';
// Import de la variable Collapses depuis Collapse.jsx
import { Collapses } from '../components/Collapse';
import Values from '../data/values.json';
import Footer from '../components/Footer';

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