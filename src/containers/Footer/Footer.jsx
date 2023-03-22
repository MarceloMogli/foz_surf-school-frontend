import React, { useState, useEffect } from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaPhoneAlt } from "react-icons/fa";
import { ImLocation2 } from 'react-icons/im'
import { client, urlFor } from '../../client';

import './Footer.scss'

const Footer = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const query = '*[_type == "brands"]';

    client.fetch(query).then((data) => setBrands(data));
  }, [])
  return (
    <footer>
      <div className="footer__container">
        <div className="footer__info">
          <p>FozSurfschool LLC</p>
          <div className='container'>
            <ImLocation2 />
            <p>123 Main Street, Figueira da Foz, Coimbra</p>
          </div>
          <div className='container'>
            <FaPhoneAlt />
            <p>(+351) 233 422 114</p>
          </div>
        </div>
        <div className='footer__brands'>
          <h3>Supported by:</h3>
          <ul className="brand-icons">
            {brands.map((data) => (
              <li key={data._id}><img src={urlFor(data.imgUrl)} alt={data.name} /></li>
            ))}
          </ul>
        </div>
        <div className="footer__socials">
          <h3>Follow Us</h3>
          <ul className="social-icons">
            <li><a href='https://www.facebook.com/'><FaFacebook /></a></li>
            <li><a href='https://www.instagram.com/'><FaInstagram /></a></li>
            <li><a href='https://twitter.com/'><FaTwitter /></a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer