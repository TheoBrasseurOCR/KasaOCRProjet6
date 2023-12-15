import React from 'react';
import imgBannerAccueil from '../../images/img_home_banner.webp';
import Banner from '../../Layout/Banner';


function HomeBanner() {
    return (
        <Banner
            title='Chez vous, partout et ailleurs'
            src={imgBannerAccueil} 
        />
    )
}
export default HomeBanner;

