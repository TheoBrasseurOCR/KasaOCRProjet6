import React from 'react';
import Tag from './Tag';
import Host from './Host';
import Rating from './Rating';

function Presentation({ title, location, tags, rating, host }) {
    return (
        <section className='presentation_container'>
            <div>
                <h1>{title}</h1>
                <h2>{location}</h2>
                <div className='tags'>
                    {tags.map((tag, index) => {
                        return <Tag key={index} tag={tag} />;
                    })}
                </div>
            </div>
            <div className='host_rating_container'>
                <Rating rating={rating} />
                <Host name={host.name} imgHost={host.picture} />
            </div>
        </section>
    )
}

export default Presentation;