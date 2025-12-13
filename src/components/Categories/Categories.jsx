import React from 'react';
import PropTypes from 'prop-types';
import './Categories.css';
import image1 from "../../assets/Images/P1.jpg"
import image2 from "../../assets/Images/P2.jpg"
import image3 from "../../assets/Images/P3.jpg"
import image4 from "../../assets/Images/P4.jpg"


const Categories = () => (
  <div className="Categories container my-5" style={{ color: "var(--main-color)" }}>
    <h2 className='h1 fw-bold text-center'>CATEGORIES</h2>
    <div className='row g-3 my-3'>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div className="flex px-2 py-1 card-bg gap-3 rounded rounded-2">
          <div className='w-25'>
            <img src={image1} className="w-100" alt="#" />
          </div>
          <div className='flex-col'>
            <b className=''>Catergory Name</b>
            <p className=''>100 products</p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div className="flex px-2 py-1 card-bg gap-3 rounded rounded-2">
          <div className='w-25'>
            <img src={image2} className="w-100" alt="#" />
          </div>
          <div className='flex-col'>
            <b className=' '>Catergory Name</b>
            <p className=''>100 products</p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div className="flex px-2 py-1 card-bg gap-3 rounded rounded-2">
          <div className='w-25'>
            <img src={image3} className="w-100" alt="#" />
          </div>
          <div className='flex-col'>
            <b className=' '>Catergory Name</b>
            <p className=''>100 products</p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div className="flex px-2 py-1 card-bg gap-3 rounded rounded-2">
          <div className='w-25'>
            <img src={image4} className="w-100" alt="#" />
          </div>
          <div className='flex-col'>
            <b className=' '>Catergory Name</b>
            <p className=''>100 products</p>
          </div>
        </div>
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <div className="flex px-2 py-1 card-bg gap-3 rounded rounded-2">
          <div className='w-25'>
            <img src={image1} className="w-100" alt="#" />
          </div>
          <div className='flex-col'>
            <b className=''>Catergory Name</b>
            <p className=''>100 products</p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div className="flex px-2 py-1 bg-white gap-3 rounded rounded-2">
          <div className='w-25'>
            <img src={image2} className="w-100" alt="#" />
          </div>
          <div className='flex-col'>
            <b className='text-dark '>Catergory Name</b>
            <p className='text-dark'>100 products</p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div className="flex px-2 py-1 bg-white gap-3 rounded rounded-2">
          <div className='w-25'>
            <img src={image3} className="w-100" alt="#" />
          </div>
          <div className='flex-col'>
            <b className='text-dark '>Catergory Name</b>
            <p className='text-dark'>100 products</p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div className="flex px-2 py-1 bg-white gap-3 rounded rounded-2">
          <div className='w-25'>
            <img src={image4} className="w-100" alt="#" />
          </div>
          <div className='flex-col'>
            <b className='text-dark '>Catergory Name</b>
            <p className='text-dark'>100 products</p>
          </div>
        </div>
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <div className="flex px-2 py-1 card-bg gap-3 rounded rounded-2">
          <div className='w-25'>
            <img src={image1} className="w-100" alt="#" />
          </div>
          <div className='flex-col'>
            <b className=''>Catergory Name</b>
            <p className=''>100 products</p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div className="flex px-2 py-1 bg-white gap-3 rounded rounded-2">
          <div className='w-25'>
            <img src={image2} className="w-100" alt="#" />
          </div>
          <div className='flex-col'>
            <b className='text-dark '>Catergory Name</b>
            <p className='text-dark'>100 products</p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div className="flex px-2 py-1 bg-white gap-3 rounded rounded-2">
          <div className='w-25'>
            <img src={image3} className="w-100" alt="#" />
          </div>
          <div className='flex-col'>
            <b className='text-dark '>Catergory Name</b>
            <p className='text-dark'>100 products</p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div className="flex px-2 py-1 bg-white gap-3 rounded rounded-2">
          <div className='w-25'>
            <img src={image4} className="w-100" alt="#" />
          </div>
          <div className='flex-col'>
            <b className='text-dark '>Catergory Name</b>
            <p className='text-dark'>100 products</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Categories;
