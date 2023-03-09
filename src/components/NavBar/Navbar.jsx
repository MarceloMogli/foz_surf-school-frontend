import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMenuAlt3 } from 'react-icons/hi'
import { RxCross2 } from 'react-icons/rx'

import Logo from '../../assets/logo.png';
import { navbarVariants } from '../../utils/motion';
import './Navbar.scss';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const categories = ['Home', 'About Us', 'Team', 'Lessons', 'Rentals', 'Gallery', 'Contact Us'];

    return (
        <motion.nav
            className="app__navbar"
            variants={navbarVariants}
            initial="hidden"
            whileInView="show"
        >
            <div className="app__navbar-logo">
                <a href="#home">
                    <img src={Logo} alt="logo" />
                </a>
            </div>
            <ul className="app__navbar-links">
                {categories.map((item) => (
                    <motion.li
                        className="app__flex p-text"
                        key={`link-${item}`}
                        variants={navbarVariants}
                    >
                        <a href={`#${item}`}>{item}</a>
                    </motion.li>
                ))}
            </ul>
            <div className="app__navbar-menu">
                <HiMenuAlt3 onClick={() => setToggle(true)} />

                {toggle && (
                    <motion.div
                        whileInView={{ x: [300, 0] }}
                        transition={{ duration: 0.85, ease: "easeOut" }}
                    >
                        <RxCross2 onClick={() => setToggle(false)} />
                        <ul>
                            {categories.map((item) => (
                                <li key={item}>
                                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </div>
        </motion.nav>
    );
};

export default Navbar;
