import React,  { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        Expert Lecture
                    </Link>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home 
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/upload' className='nav-links' onClick={closeMobileMenu}>
                                UploadPage
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/results' className='nav-links' onClick={closeMobileMenu}>
                                ResultPage
                            </Link>
                        </li>

                    </ul>

                </div>
            </nav>
        </>
    )
}



export default Navbar
