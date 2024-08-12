import React from 'react';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import { RiTwitterXFill } from 'react-icons/ri';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FiYoutube } from 'react-icons/fi';
import DateTimeDisplay from './DateTimeDisplay';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          <DateTimeDisplay />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex" id="navbarNav">
          {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex">
            <li className="nav-item d-none d-md-block d-flex">
              <p className="nav-link">English</p>
              <p className="nav-link">தமிழ்</p>
              <p className="nav-link">বাংলা</p>
              <p className="nav-link">മലയാളം</p>
              <p className="nav-link">ગુજરાતી</p>
              <p className="nav-link">हिंदी</p>
              <p className="nav-link">मराठी</p>
              <p className="nav-link">Business</p>
              <p className="nav-link">बिज़नेस</p>
            </li>
          </ul> */}
          <div className="d-flex d-none d-sm-block">
            <a href="#" className="m-2"><TiSocialLinkedinCircular size={24} /></a>
            <a href="#" className="m-2"><RiTwitterXFill size={24} /></a>
            <a href="#" className="m-2"><FaFacebook size={24} /></a>
            <a href="#" className="m-2"><FiYoutube size={24} /></a>
            <a href="#" className="m-2"><FaInstagram size={24} /></a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
