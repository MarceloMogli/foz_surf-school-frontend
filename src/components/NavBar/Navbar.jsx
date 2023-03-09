import React from 'react'
import Logo from '../../assets/logo.png';
import './Navbar.scss'

const Navbar = () => {
    const categories = ['Home', 'About Us', 'Team', 'Lessons', 'Rentals', 'Gallery', 'Contact Us']
    return (
        <nav className="app__navbar">
            <div className="app__navbar-logo">
                <a href='#home'>
                <img src={Logo} alt="logo" />
                </a>
            </div>
            <ul className="app__navbar-links">
                {categories.map((item) => (
                    <li className="app__flex p-text" key={`link-${item}`}>                       
                        <a href={`#${item}`}>{item}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar