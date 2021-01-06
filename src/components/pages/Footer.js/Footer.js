import React from 'react';
import './Footer.css';
import { Button } from '../../Button';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import { MdFingerprint } from 'react-icons/md';
import { ImLocation2 } from 'react-icons/im';
import { MdPhoneIphone } from 'react-icons/md';
import { MdEmail } from 'react-icons/md';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Subscribe  to receive the latest news and trends in the world of technology
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up' className="fo">We strive to provide the tech industry with the people it needs, while providing life-changing opportunities to people from all walks of life. We bring people together and we offer more than just software development, we focus on clients needs, go deep into requirements to suggest improvements, plan our workflow to reduce the budget, and never miss the deadlines.</Link>
           
          </div>
          {/* <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/' className="fo">Contact</Link>
            <Link to='/' className="fo">Support</Link>
            <Link to='/' className="fo">Destinations</Link>
          </div> */}
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Contact</h2>
            <div className="contact_us">
            <ImLocation2 size={30} color="#fff" /> Address: Block B2, WAEC Building, Maitama, Abuja.
            </div>

            <div className="contact_us">

              <MdPhoneIphone size={30} color="#fff" /> +2348160197959 | +2348032745058
            </div>
            <div className="contact_us">
              <MdEmail size={30} color="#fff" />  info@gmtsoftware.tech

            </div>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo fo'>
            <Link to='/' className='social-logo'>
              <img src='images/up.jpg' width='17%'/ >
              GMTsoftware
            </Link>
          </div>
          <small className='website-rights'>GMTsoftware © 2020</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to={'//www.facebook.com/GreatmindNG'}
              target='_blank'
              aria-label='Facebook' className="fo"
            >
              <FaFacebook size={30} color="#fff" />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Instagram' className="fo"
            >
              <FaInstagram size={30} color="#fff" />
            </Link>
            <Link
              className='social-icon-link'
              to={
                '//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber'
              }
              target='_blank'
              aria-label='Youtube' className="fo"
            >
              <FaYoutube size={30} color="#fff" />
            </Link>
            <Link
              className='social-icon-link'
              to={'//www.twitter.com/GMTsoftware'}
              target='_blank'
              aria-label='Twitter' className="fo"
            >
              <FaTwitter size={30} color="#fff" />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='LinkedIn' className="fo"
            >
              <FaLinkedin size={30} color="#fff" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
