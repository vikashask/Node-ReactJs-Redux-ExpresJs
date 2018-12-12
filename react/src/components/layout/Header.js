import React from 'react';
import {Link} from "react-router-dom";
import {Image} from "react-bootstrap";
import logo from './../../../src/logo.svg';

const Header = () => {

    return (
        <header className='header'>
            <Link to={'/'}>
                <Image src={logo} className={'header-logo'} />
            </Link>

            <div className={'header-text'}>
                React Router
            </div>

        </header>
    );
};

export default Header;

