import React from 'react';
import Header from '../components/Header';
import AProposBanner from '../components/AProposBanner';
import AProposCollapse from '../components/AProposCollapse';
import Values from '../data/values.json';
import Footer from '../components/Footer';

function APropos() {
    return(
        <section>
            <div className='about'>
                <Header />
                <AProposBanner />
                <div className='about_collapses'>
                    <AProposCollapse data={Values} />
                </div>
            </div>
            <Footer />
        </section>
    )
}

export default APropos;