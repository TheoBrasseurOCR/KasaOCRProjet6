import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Home/Header/Header';
import Footer from '../components/Home/Footer/Footer';

function Error() {
    return ( 
        <div>
            <section className='error_container'>
                <Header />
                <div className='error'>
                    <div className='error_title'>
                        <h1 className='error_title_number'>404</h1>
                        <p className='error_title_message'>Oups ! La page que vous demandez n'existe pas.</p>
                    </div>
                        <Link to='/'>Retourner sur la page d'accueil</Link>               
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Error;