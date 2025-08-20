import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import { Link } from 'react-router-dom';
import { Swiper , SwiperSlide } from 'swiper/react';
import { Autoplay , EffectFade , Navigation , Pagination} from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { FaCheck } from "react-icons/fa6";
import { FaTruck } from "react-icons/fa";


const Header = () => (

  <div className="Header container mt-3">
    <div className='row'>
      <div className="col-lg-8 col-sm-12">
        <Swiper
        loop={true}
        spaceBetween={2}
        modules={[Autoplay , EffectFade , Navigation , Pagination]}
        navigation={true}
        pagination={{clickable:true }}
        effect='fade'
        autoplay={{
          delay: 1500,
          pauseOnMouseEnter:true
        }}
         className="slider">
          <SwiperSlide>
            <div className="men flex-col gap-2 text-white px-5 py-2 ">
              <b className='h2 fw-bold'>Men Fashon</b>
              <p className='fs-5'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni quaerat, tempora, omnis assumenda temporibus repudiandae repellat nam iure consectetur quas iusto cupiditate expedita esse inventore eum ea reprehenderit! Tempore, cum.
              </p>
              <Link to={"shop"} className='text-light px-4 py-2 btn btnweb border border-2 rounded rounded-0'>Shop Now</Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="woman flex-col gap-2 text-white px-5 py-2 ">
              <b className='h2 fw-bold'>Woman Fashon</b>
              <p className='fs-5'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni quaerat, tempora, omnis assumenda temporibus repudiandae repellat nam iure consectetur quas iusto cupiditate expedita esse inventore eum ea reprehenderit! Tempore, cum.
              </p>
              <Link to={"shop"} className='text-light px-4 py-2 btn btnweb border border-2 rounded rounded-0'>Shop Now</Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="kids flex-col gap-2 text-white px-5 py-2 ">
              <b className='h2 fw-bold'>Kids Fashon</b>
              <p className='fs-5'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni quaerat, tempora, omnis assumenda temporibus repudiandae repellat nam iure consectetur quas iusto cupiditate expedita esse inventore eum ea reprehenderit! Tempore, cum.
              </p>
              <Link to={"shop"} className='text-light px-4 py-2 btn btnweb border border-2 rounded rounded-0'>Shop Now</Link>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="col-lg-4 col-sm-12 mt-4">
        <div className="offers offer-1 flex-col mb-3 text-light">
          <p className='m-0'>Save 20%</p>
          <b className='my-2'>Special Offer</b>
          <Link to={"shop"} className='text-light px-4 py-2 btn btnweb border border-2 rounded rounded-0'>Shop Now</Link>
        </div>
        <div className="offers offer-2 flex-col text-light">
          <p className='m-0'>Save 20%</p>
          <b className='my-2'>Special Offer</b>
          <Link to={"shop"} className='text-light px-4 py-2 btn btnweb border border-2 rounded rounded-0'>Shop Now</Link>
        </div>
      </div>
    </div>
    <div className="row g-3 mt-5">
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div className='cons-nav rounded rounded-2 px-4 bg-white flex gap-2'>
          <FaCheck className='fs-4 me-2' style={{color:"var(--main-color)"}} />
          <b className='fs-5'>Quilty Product</b>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div className='cons-nav rounded rounded-2 px-4 bg-white flex gap-2'>
          <FaTruck className='fs-4 me-2' style={{color:"var(--main-color)"}} />
          <b className='fs-5'>Free Shipping</b>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div className='cons-nav rounded rounded-2 px-4 bg-white flex gap-2'>
          <FaCheck className='fs-4 me-2' style={{color:"var(--main-color)"}} />
          <b className='fs-5'>14-Day Return</b>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div className='cons-nav rounded rounded-2 px-4 bg-white flex gap-2'>
          <FaTruck className='fs-4 me-2' style={{color:"var(--main-color)"}} />
          <b className='fs-5'>24/7 Support</b>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
