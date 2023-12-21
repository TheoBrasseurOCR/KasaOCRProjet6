import React from 'react';

function Host({ name, imgHost }) {
    return (
        <section className='host_container'>
            <h3>{name}</h3>
            <div className='host_container_img'>
                <img src={imgHost} alt={name} />
            </div>
        </section>
    )
}

export default Host;