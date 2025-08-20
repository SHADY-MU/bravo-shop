import React from 'react';
import PropTypes from 'prop-types';
import { BiTargetLock } from "react-icons/bi";
import { FaRegCommentAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import './Contact.css';

const Contact = () => (
  <div className="Contact container">
    <h2 className='h1 fw-bold text-center my-5 d-block'>Contact <span style={{color:"var(--main-color)"}}>Us</span></h2>
    <div className="row">
      <div className="col-lg-8 col-sm-12">
        <form className='bg-light p-3 rounded'>
          <div className="form-group">
            <input type="text" className="form-control px-3 my-3" id="exampleFormControlInput1" placeholder="Name"/>
          </div>
          <div className="form-group">
            <input type="email" className="form-control px-3 mb-3" id="exampleFormControlInput1" placeholder="Email"/>
          </div>
          <div className="form-group">
            <input type="text" className="form-control px-3 mb-3" id="exampleFormControlInput1" placeholder="Subjects"/>
          </div>
          <div className="form-group">
            <textarea className="form-control px-3" id="exampleFormControlTextarea1" style={{height:"144px"}} placeholder='Message' rows="3"></textarea>
          </div>
          <button type='sumbit' className='px-4 my-3 border-0 rounded btn' style={{fontSize:"18px" , height:"45px" , background:"var(--main-color)"}}>Send Message</button>
        </form>
      </div>
      <div className="col-lg-4 col-sm-12">
        <div className='map p-4 rounded bg-light'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3434.3521362674496!2d31.499302325344377!3d30.595829392237796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7f147e5fe7337%3A0x27ea7767255ccbe!2z2LTYsdmD2Kkg2KjYsdin2YHZiCDZhNiq2LnZhNmK2YUg2KfZhNio2LHZhdis2Kk!5e0!3m2!1sar!2seg!4v1713800005950!5m2!1sar!2seg" frameborder="0" className='w-100'></iframe>
        </div>
        <div className="loaction p-4 rounded bg-light mt-2 flex-col">
          <div className='flex gap-3'>
            <BiTargetLock  />
            <b>Egypt - Sharkia - Zagazig</b>
          </div>
          <div className='flex gap-3'>
            <FaRegCommentAlt  />
            <b>bravocoading123@gmail.com</b>
          </div>
          <div className='flex gap-3'>
            <FaPhone  />
            <b>+0123456789</b>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
