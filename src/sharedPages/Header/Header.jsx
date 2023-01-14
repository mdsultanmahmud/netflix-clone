import React from 'react';
import logo from '../../assets/logo.png'
const Header = () => {
    return (
        <div className='header-container'>
            <img src={logo} alt="" />
            <button>Sign In</button>
        </div>
    );
};

export default Header;