import React, { useEffect , useContext, useState} from 'react';
import { cartContext } from '../../context/CartContext';
import PropTypes from 'prop-types';
import './Cart.css';
import LottieHandler from '../../common/LottieHandler/LottieHandler';
import SecondaryLoading from '../../assets/lottiFiles/SecondaryLoading.json'
import { Link } from 'react-router-dom';
import { authContext } from '../../context/AuthContext';

const Cart = () => {

   const {
    cartIdes,
    getProductsOfCart,
    records,
    isLoadingRecords,
    removeHandler,
    amountOnChange,
    placeholderHandler
   } = useContext(cartContext)


   const {currentUser} = useContext(authContext)
   
   const productsFullInfo = records.map((val)=>({
     ...val ,
     amount:cartIdes[val.id]
    }))
    
    const totalprice = productsFullInfo.reduce((total, val) => {
      const discount = val.discount ?? Math.ceil(Math.random() * 30);
      const finalPrice = (val.price - (val.price * discount / 100)).toFixed(0);
      return total + finalPrice * val.amount;
    }, 0);
   

   useEffect(()=>{
    getProductsOfCart()
   } , [cartIdes])

  return<div className="Cart ">
    <p className='h1 fw-bold my-5 text-uppercase text-center border-bottom border-2 w-25 mx-auto py-2 border-black'> Your <span style={{color:"var(--main-color)"}}>Cart</span></p>
    <div className="container my-4 py-5">
      <div className="row g-2">
        <div className="col-8 offset-2 mb-4">
          <div className="flex justify-content-around py-3 rounded-4 bg-white shadow border border-2 border-black">
            <p className='h4 fw-bolder'>Total Cart:</p>
            <p className='h4 fw-bolder'>${totalprice}</p>
          </div>
        </div>

        {
          isLoadingRecords?
          <LottieHandler loadAnimation = {SecondaryLoading}/>

          : productsFullInfo.length != 0 ?
          productsFullInfo.map((val , i)=>{

            const option = Array(val.stock).fill(0).map((_ , index)=>{
              ++index
              return
            })

            if(val.discount == undefined){
                val.discount = Math.ceil(Math.random() * 30)
            }
            const finalPrice = (val.price - (val.price * val.discount/100)).toFixed(0)

          return <div className="col-12" key={i}>
              <div className="flex justify-content-around bg-white px-2 py-3 rounded shadow ">
                <div >
                  <img src={val.image} style={{width:"80px", height:"80px"}} alt="#" />
                </div>
                <div style={{ width:"80px", overflow:"hidden"}}>
                  <p className='m-0'>{val.title?.split(" ").slice(0,2).join(" ") }</p>
                </div>
                <div style={{width:"140px" , overflow:"hidden"}}>
                  <p className='m-0'>Price: ${finalPrice} </p>
                  <p className='m-0 fw-bold'>TotalPrice: ${finalPrice * val.amount} </p>
                </div>
                <div>
                  <select className="form-select" onChange={(e)=> amountOnChange(e.target.value , val.id)} defaultValue={val.amount} aria-label="Default select example">
                    {option.map((_ , index)=>(
                      <option key={index}  value={index + 1}>{index + 1}</option>
                    ))}
                  </select>
                </div>
                <button onClick={()=> removeHandler(val.id)} className='btn btn-danger'>Remove from the cart</button>
              </div>
            </div>
          })

          :
          <div className='flex-col gap-2' >
            <h3 className='h1 text-danger text-center mx-auto w-50 fw-bolder border-bottom border-2 border-dark py-2'>There No Items at your Carts</h3>
            <Link to={"/shop" } className="btn btnweb d-inline-block fs-5 border border-2 border-dark ">How About Go to Shop</Link>
          </div>

        }
        
        {
          currentUser && productsFullInfo.length > 0 ?
          <button className='btn btnweb btn-dark btn-lg w-50 mt-3 fw-bolder fst-italic fs-4 mx-auto' onClick={placeholderHandler}>Place Holder</button>
          :
          null

        }

      </div>
    </div>
  </div>
};

export default Cart;
