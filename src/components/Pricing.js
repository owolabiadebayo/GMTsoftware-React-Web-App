import React from 'react';
import { Button } from './Button';
import './Pricing.css';
import { FaLaptopCode } from 'react-icons/fa';
import { FaServer } from 'react-icons/fa';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

function Pricing() {


  const style = {display: 'block', backgroundColor: '#000', color: '#fff', width: '100px', margin: '0 auto',  borderRadius: '7px', padding: '7px'}
  return (
    <>
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='pricing__section'>
        <div className='pricing__wrapper'>
          <h1 className='pricing__heading'>Our Courses</h1>
          <div className='pricing__container'>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon1'>
                  <FaLaptopCode />
                </div>
                <h3>Front-End Dev</h3>
                {/* <h4>#70,000</h4> */}
                <p>per month</p>
                <ul className='pricing__container-features'> 
                  <li>100 Transactions</li>
                  <li>2% Cash Back</li>
                  <li>$10,000 Limit</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Choose Plan
                </Button>
              </div>
            </Link>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon1'>
                  <FaServer />
                </div>
                <h3>Back-End Dev</h3>
                {/* <h4>#65,000</h4> */}
                <p>per month</p>
                <ul className='pricing__container-features'>
                  <li>1000 Transactions</li>
                  <li>3.5% Cash Back</li>+
                  <li>$100,000 Limit</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='blue'>
                  Choose Plan
                </Button>
              </div>
            </Link>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon1'>
                  <GiCrystalize />
                </div>
                <h3>Diamond</h3>
                {/* <h4>$99.99</h4> */}
                <p>per month</p>
                <ul className='pricing__container-features'>
                  <li>Unlimited Transactions</li>
                  <li>5% Cash Back</li>
                  <li>Unlimited Spending</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Choose Plan
                </Button>
              </div>
            </Link>

            
          </div>
        </div>
      </div>
    </IconContext.Provider>
    </>
    
  );
}
export default Pricing;
