import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import Logements from '../data/logements.json';
import Presentation from '../components/Presentation';
// Import de Collapse depuis Collapse.jsx
import { Collapse } from '../components/Collapse';
import Error from './Error'

function Accommodation() {
    const { id } = useParams();
    const accommodation = Logements.find((item) => item.id === id)

    return !accommodation ? <Error /> : ( 
        <section>
        <div className='accommodation_page'>
            <Header />
            <div className='accommodation_container'>
                <Carousel 
                    pictures={accommodation.pictures} 
                    title={accommodation.title}
                />
                <Presentation 
                    title={accommodation.title}
                    location={accommodation.location}
                    tags={accommodation.tags}
                    host={accommodation.host}
                    rating={accommodation.rating}
                />
                <div className='accommodation_collapses collapses'>
                    <Collapse 
                        title="Description"
                        content={<p>{accommodation.description}</p>} 
                    />
                    <Collapse 
                        title="Équipements"
                        content={
                            <ul>
                                {accommodation.equipments.map((equip, index) => {
                                    return <li key={`${index}${equip}`}>{equip}</li>;
                                })}
                            </ul>
                        } 
                    />
                </div>
            </div>
        </div>
        <Footer />
        </section>
    )
}

export default Accommodation;

