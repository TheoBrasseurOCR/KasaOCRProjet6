import React from 'react';
import logoFooter from '../images/logo_footer.png';

function Footer() {
    return (
        <footer className='footer'>
            <img src={logoFooter} alt='Logo Kasa' className='footer_img'/>
            <p>© 2023 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer;