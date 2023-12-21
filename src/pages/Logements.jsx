import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Header from '../components/Home/Header/Header';
import Footer from '../components/Home/Footer/Footer';
import Carousel from '../components/Logements/Carousel/Carousel';
import accommodations from '../data/accommodations.json';
import Presentation from '../components/Logements/Presentation/Presentation';
import Collapse from '../components/Logements/Collapse/Collapse';

function Accommodation() {
    const { id } = useParams();
    const accommodation = accommodations.find((item) => item.id === id)

    return !accommodation ? (<Navigate to="/error" />) : ( 
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

