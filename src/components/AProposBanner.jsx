import React from 'react';
import imgBannerAbout from '../images/img_about_banner.webp';

function AProposBanner() {
    return (
        <div className="banner">
            <img src={imgBannerAbout} alt='Bannière Kasa' className='banner_img' />
        </div>
    )
}
export default AProposBanner;

