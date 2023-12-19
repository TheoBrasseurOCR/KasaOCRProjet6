import React from 'react';
import imgBannerAbout from '../../../images/img_about_banner.webp';
import Banner from '../../Home/Banner/Banner';

function AProposBanner() {
    return (
        <div className="img_banner_about">
            <Banner
                src={imgBannerAbout}
            />
        </div>
    )
}
export default AProposBanner

