import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './auth.css';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"
import { FaRegEye } from "react-icons/fa";
import { FiEyeOff } from "react-icons/fi";
import {zodResolver} from "@hookform/resolvers/zod"
import resgisterSchema from '../../validation/resgister';
import { useContext } from 'react';
import { authContext } from '../../context/AuthContext';

const Resgister = () => {

  const {resgisterHandler , isLoading} = useContext(authContext)

  const [ errorFirebase , setErrorFirebase] = useState()

  const navigate = useNavigate()

  const {register , handleSubmit , formState:{errors , isDirty , isValid}} = useForm({
    resolver : zodResolver(resgisterSchema)
  })
  const [isShowed , setIsShowed] = useState("password")

  const ResgisterSumbitHandler = async (data)=>{

    if(isDirty || isValid){
      const respond = await resgisterHandler(data)
      if(respond.success){
        navigate("/profile")
      }else{
        setErrorFirebase(respond.message)
      }
    }

  }

 

  return <div className="Resgister container my-5">
    <div className='w-75 mx-auto px-5 py-3 border py-3 border-2 border-black rounded rounded-2'>
      <h3 className='h1 fw-bolder text-capitalize text-center my-2 w-25 mx-auto text-primary' > Resgister </h3>
      <form onSubmit={handleSubmit(ResgisterSumbitHandler)} className='mx-auto'>
        <div className="form-group my-2">
          <label htmlFor="firstName" className='py-2'>First Name</label>
          <input {...register("firstName")} type="text" className={`form-control shadow px-3 ${errors.firstName ? "is-invalid" : ""}`} style={{height:"45px"}} id="firstName" aria-describedby="emailHelp" placeholder="First Name"/>
          {errors.firstName && <div className='invalid-feedback'>{errors.firstName.message}</div>}
        </div>
        <div className="form-group my-2">
          <label htmlFor="lastName" className='py-2'>Last Name</label>
          <input {...register("lastName")} type="text" className={`form-control shadow px-3 ${errors.lastName ? "is-invalid" : ""}`} style={{height:"45px"}} id="lastName" aria-describedby="emailHelp" placeholder="Last Name"/>
          {errors.lastName && <div className='invalid-feedback'>{errors.lastName.message}</div>}
        </div>
        <div className="form-group my-2">
          <label htmlFor="email" className='py-2'>Email address</label>
          <input {...register("email")} type="email" className={`form-control shadow px-3 ${errors.email ? "is-invalid" : ""}`} style={{height:"45px"}} id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
          {errors.email && <div className='invalid-feedback'>{errors.email.message}</div>}
        </div>
        <div className="form-group my-2">
          <label htmlFor="password" className='py-2'>Create Password</label>
          <div className='password-container'>
            <input {...register("password")} type={isShowed} className={`form-control shadow px-3 ${errors.password ? "is-invalid" : ""}`} style={{height:"45px"}} id="password" aria-describedby="emailHelp"  placeholder="Create Password"/>
            {
              isShowed == "password"?
              <FiEyeOff onClick={()=> isShowed == "password"? setIsShowed("text") : setIsShowed("password")}/>
              :
              <FaRegEye onClick={()=> isShowed == "password"? setIsShowed("text") : setIsShowed("password")}/>
            }
            {errors.password && <div className='invalid-feedback'>{errors.password.message}</div>}
          </div>
        </div>
        <div className="form-group my-2">
          <label htmlFor="confirmPassword" className='py-2'>Confirm Password</label>
          <input {...register("confirmPassword")} type="text" className={`form-control shadow px-3 ${errors.confirmPassword ? "is-invalid" : ""}`} style={{height:"45px"}} id="confirmPassword" placeholder="Confirm Password"/>
          {errors.confirmPassword && <div className='invalid-feedback'>{errors.confirmPassword.message}</div>}
        </div>

        {errorFirebase && <div className='alert alert-danger'>This email used before</div>}

        <button type="submit" className="btn btnweb btnAuth border border-dark border-2 d-block my-3 fs-5 fw-bolder shadow w-100" disabled={isLoading} >
          {
            isLoading ?
            <div className='flex gap-2'>
              <div class="spinner-border" role="status"></div>
                <span>Loading</span>
            </div>
            :
            "Sumbit"
          }
        </button>
      </form>
      <div className='mx-auto '>
          <p className='fw-bold px-2 py-3 text-start fs-5 fs-md-5'>
              You Have an account ?
            <span className='d-block mt-2' style={{color:"var(--main-color)"}}><Link to={"/login"} className='btn btnweb p-3 fs-5 btn-link text-decoration-none'> How About Login</Link></span>
          </p>
      </div>
    </div>
  </div>
};

export default Resgister;
