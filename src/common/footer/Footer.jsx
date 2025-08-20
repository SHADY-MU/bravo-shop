import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import pay from '../../assets/Images/pay.png'

export default function Footer() {
  return (
    <footer className="text-white pt-5 pb-4 mt-5" style={{background:"var(--secondary-color)"}}>
      <div className="container-fluid px-5 text-center text-md-start">
        <div className="row text-center ">

          <div className="col-lg-3 col-md-12  mx-auto mt-3">
            <div className='single mx-auto'>
              <h5 className="fw-bold h4 mb-4 fw-bold ">Get In touch</h5>
              <p className='mt-3 lh-lg px-2'>
                  No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed dolor. Rebum tempor no vero est magna amet no
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-12  mx-auto mt-3">
            <div className='single mx-auto'>
              <h5 className="text-uppercase mb-4 fw-bold h4">quick shop</h5>
              <p className='mt-2 fw-bold'><Link href="#" to={"/"} className="text-white text-decoration-none">Home</Link></p>
              <p className='mt-2 fw-bold'><Link href="#" to={"about"} className="text-white text-decoration-none">About</Link></p>
              <p className='mt-2 fw-bold'><Link href="#" to={"shop"} className="text-white text-decoration-none">Shop</Link></p>
              <p className='mt-2 fw-bold'><Link href="#" to={"contact"} className="text-white text-decoration-none">Contact</Link></p>
              <p className='mt-2 fw-bold'><Link href="#" to={"cart"} className="text-white text-decoration-none">Cart</Link></p>
            </div>
          </div>

          <div className="col-lg-3 col-md-12  mx-auto mt-3">
            <div className='single mx-auto'>
              <h5 className="mb-4 fw-bold h4">Shop Media</h5>
              <p><Link href="#" className="text-white fs-5 mt-3 text-decoration-none"><FaFacebook/></Link></p>
              <p><Link href="#" className="text-white fs-5 mt-3 text-decoration-none"><FaTwitter/></Link></p>
              <p><Link href="#" className="text-white fs-5 mt-3 text-decoration-none"><FaInstagram/></Link></p>
              <p><Link href="#" className="text-white fs-5 mt-3 text-decoration-none"><FaLinkedin/></Link></p>
              <p><Link href="#" className="text-white fs-5 mt-3 text-decoration-none"><FaGithub/></Link></p>
            </div>
          </div>

          <div className="col-lg-3 col-md-12  mx-auto mt-3">
            <div className='single mx-auto'>
              <h5 className="text-uppercase mb-4 fw-bold h4"> NewSletter</h5>
              <p className='lh-lg my-4 fs-5'>
                  Duo stet tempor ipsum sit amet magna ipsum tempor est
              </p>
              <div className="input-group">
                  <input type="email" className='form-control' placeholder='Your Email Adress' />
                  <button className='btn btn-outline-secondary' style={{background:"var(--main-color)"}}>Button</button>
              </div>
            </div>
          </div>

        </div>

        <hr className="my-3" />

        <div className="row align-items-center px-2">
          <div className="col-md-7 col-lg-8">
            <p>@ copywrite By Bravo Team , All Right Reserved</p>
          </div>
          <div className="col-md-5 col-lg-4">
            <div className="text-center text-md-end">
              <img src={pay} alt="#" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
