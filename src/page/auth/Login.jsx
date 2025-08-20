import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './auth.css';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"
import { FaRegEye } from "react-icons/fa";
import { FiEyeOff } from "react-icons/fi";
import {zodResolver} from "@hookform/resolvers/zod"
import loginSchema from '../../validation/login';
import { useContext } from 'react';
import { authContext } from '../../context/AuthContext';

const Login = () => {

  const {loginHandler , isLoading} = useContext(authContext)

  const [ errorFirebase , setErrorFirebase] = useState()

  const navigate = useNavigate()

  const {register , handleSubmit , formState:{errors , isDirty , isValid}} = useForm({
    resolver : zodResolver(loginSchema)
  })
  const [isShowed , setIsShowed] = useState("password")

  const LoginSumbitHandler = async (data)=>{

    if(isDirty || isValid){
      const res = await loginHandler(data)
      if(res.success){
        navigate("/profile")
      }else{
        setErrorFirebase(res.message)
      }
    }

  }

 

  return <div className="Login container my-5">
    <div className='w-75 mx-auto px-5 py-3 border py-3 border-2 border-black rounded rounded-2'>
      <h3 className='h1 fw-bolder text-capitalize text-center my-2 w-25 mx-auto text-primary' > Login </h3>
      <form onSubmit={handleSubmit(LoginSumbitHandler)} className='mx-auto'>

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
        

        {errorFirebase && <div className='alert alert-danger'>Invild password or email</div>}

        <button type="submit" className="btn btnweb btnAuth border border-dark border-2 d-block my-3 fs-5 fw-bolder shadow w-lg-25 w-100" disabled={isLoading} >
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
          <p className='fw-bold px-2 py-3 text-start fs-5 fs-md-5 ' >
              You don't have a account ?
            <span className='d-block mt-2' style={{color:"var(--main-color)"}}><Link to={"/resgister"} className=' p-3 fs-5 btn btnweb btn-link text-decoration-none'> How About Create One</Link></span>
          </p>
      </div>
    </div>
  </div>
};

export default Login;
