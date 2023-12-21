import React from 'react';

function PictureCounter({ pictures, pictureIndex }) {
    return (
        <div className='picture_counter'>
            {pictureIndex + 1}/{pictures.length}
        </div>
    )
}

export default PictureCounter;