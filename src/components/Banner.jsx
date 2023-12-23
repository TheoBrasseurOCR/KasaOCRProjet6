import React from 'react';
import imgBannerAccueil from '../images/img_home_banner.webp';

function Banner() {
    return (
        <div className="banner">
            <h1 className='banner_title'>Chez vous, partout et ailleurs</h1>
            <img src={imgBannerAccueil} alt='Bannière Kasa' className='banner_img' />
        </div>
    )
}
export default Banner;

