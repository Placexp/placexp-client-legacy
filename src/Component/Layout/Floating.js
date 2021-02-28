  
import React from 'react';
import { Link } from 'react-router-dom';
import './Floating.css';
import i1 from '../../assets/Images/icons8/insta.png';
import i2 from '../../assets/Images/icons8/ut.png';
import i3 from '../../assets/Images/icons8/link.png';
import i4 from '../../assets/Images/icons8/gmail.png';
import Icons8 from '../Layout/Icons8';
// import { buildQueryFromSelectionSet } from 'apollo-utilities';

const Floating = () => {
  return (
    <nav className="floating-menu shadow-sm bg-light d-none d-sm-block d-sm-none d-md-block">
      <ul className="main-menu ">
        <li>
          <Link
            to="/trackapp"
            className="ripple"
            style={{ textDecoration: 'none' }}
          >
            <center>
            <img src={i2}  width={32} height={32} />
            </center>
           
          </Link>
        </li>

        <li >
          <Link
            to="/creditscore"
            className="ripple"
            style={{ textDecoration: 'none' }}
          >
            <center>
              {' '}
              <img src={i1}  width={32} height={32} />
            </center>
          </Link>
        </li>

        <li>
          <Link
            to="/emicalculator"
            className="ripple"
            style={{ textDecoration: 'none' }}
          >
            <center>
            <img src={i3}  width={32} height={32} />
            </center>
            
          </Link>
        </li>

        
        <li>
          <Link
            to="/emicalculator"
            className="button-glow"
            style={{ textDecoration: 'none' }}
          >
            <center>
            <img src={i4}  width={32} height={32} />
            </center>
            
          </Link>
        </li>
      </ul>
      <div className="menu-bg" />
    </nav>
  );
};
export default Floating;