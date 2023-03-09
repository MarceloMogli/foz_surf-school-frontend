import React from 'react';

import HeaderImg from '../../assets/header-img.jpg';
import { HeaderText } from '../../components';
import './Header.scss';

const Header = () => {
  return (
    <section className="hero-banner">
      <HeaderText />
      <img src={HeaderImg} alt="Surfers catching a wave" className="hero-banner__image" />
    </section>
  )
}

export default Header

