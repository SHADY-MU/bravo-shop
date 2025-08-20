import React from 'react';
import PropTypes from 'prop-types';
import './About.css';
import image from "../../assets/Images/about.jpg"
import { Link } from 'react-router-dom';

const About = () => (
  <div className="About my-5 container">
    <h3 className='h1 fw-bold my-5 text-center'> About <span style={{color:"var(--main-color)"}}>Us</span></h3>
    <div className="row my-5">
      <div className="col-lg-5 col-12">
        <div className='text-start'>
          <img className='w-100' src={image} alt="#" />
        </div>
      </div>
      <div className="col-lg-7 col-12">
        <div className='text-start py-2 flex-col gap-4'>
          <b className='h3 fw-bold'>Welcome To <span style={{color:"var(--main-color)"}}>Bravo Shop</span></b>
          <div>
            <p className='text-muted lh-lg fw-bold' style={{fontSize:"18px"}}>
              <span style={{color:"var(--main-color)"}}>Bravo Shop</span> is Best online Shopping Company Lorem ipsum dolor sit amet   consectetur adipisicing elit. Quisquam expedita dolore omnis cumque ipsa vel nam non necessitatibus eius, molestiae    officiis, rem et distinctio? Nisi voluptates amet in aliquam sapiente.
            </p>
            <Link to={"/shop"} className='text-light px-5 py-2 fs-5 btn border border-2 rounded rounded-0'>Shop Now</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
