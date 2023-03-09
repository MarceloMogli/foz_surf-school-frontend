import React from 'react'
import HeaderImg from '../../assets/header-img.jpg'
import './Header.scss'

const Header = () => {
  return (
    <section className="hero-banner">
      <div className="hero-banner__content">
        <h1 className="hero-banner__title">Learn to Surf in Figueira da Foz</h1>
        <p className="hero-banner__subtitle">Join our community of surfers and experience the thrill of riding the waves</p>
        <a href="#Lessons" className="hero-banner__cta-button">Book Now</a>
      </div>
      <img src={HeaderImg} alt="Surfers catching a wave" className="hero-banner__image" />
    </section>
  )
}

export default Header