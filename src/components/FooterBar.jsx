import React from 'react'
import Logo from  '../assets/logo.svg'
const FooterBar = () => {
    return (
        <footer className='footer-bar'>
            <img className='logo' src={Logo} alt='logo'></img>
            <button className='black-btn'>Free Consultation</button>
        </footer>
    )
}

export default FooterBar