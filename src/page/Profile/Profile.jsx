import React, { useContext, useEffect, useMemo, useState } from 'react';
import './Profile.css';
import { authContext } from '../../context/AuthContext';
import avatar from "../../assets/Images/avatar.jpeg"
import LottieHandler from '../../common/LottieHandler/LottieHandler';
import SecondaryLoading from '../../assets/lottiFiles/SecondaryLoading.json'
import { cartContext } from '../../context/CartContext';
import { Navigate } from 'react-router-dom';

const Profile = () => {

  const {currentUser , loadingDisplayUserData} = useContext(authContext)
  const { orders , cartIdes } = useContext(cartContext)

  const [orderedItems , setOrderedItems] = useState()
  const [cartItems , setCartItems] = useState()

  useEffect(()=>{

    const totalOrders = Object.values(orders).reduce((sum , num) => ( +sum + +num ) , 0)
    setOrderedItems(totalOrders)

    const totalCart = Object.values(cartIdes).reduce((sum , num) => ( +sum + +num ) , 0)
    setCartItems(totalCart)

  } , [orders , cartIdes] )
  
  const displayName = useMemo(()=>{
    if(!currentUser) return <Navigate to={"/login"} />
    const first = currentUser.firstName || ''
    const last = currentUser.lastName || ''
    return `${first} ${last}`.trim()
  }, [currentUser])

  const memberSince = useMemo(()=>{
    if(!currentUser || !currentUser.createdAt) return ''
    try{
      const date = typeof currentUser.createdAt?.toDate === 'function'
        ? currentUser.createdAt.toDate()
        : new Date(currentUser.createdAt)
      return date.toLocaleDateString()
    }catch{
      return ''
    }
  }, [currentUser])
  
  if(loadingDisplayUserData){
    return <LottieHandler page={SecondaryLoading} />
  }
  else{
    return (
      <div className="Profile container my-5">
        <h3 className='mx-auto fw-bolder text-uppercase h1 mb-5 text-center'>Your <span style={{color:"var(--main-color)"}}>Profile</span></h3>

        <section className="profile-card mx-auto">
          <div className="profile-cover" />

          <div className="row gx-4 gy-4 profile-content">
            <div className="col-12 col-md-4 text-center d-flex flex-col">
              <div className="w-100 flex-col">
                <img src={avatar} alt="Profile avatar" className="profile-avatar mx-auto" />
                <h4 className="mt-3 mb-1 fw-bold text-uppercase">{displayName || 'User'}</h4>
                <p className="text-muted mb-0 small">{currentUser?.email}</p>
                <div className="profile-actions mt-4">
                  <button className="btn btn-dark me-2">Edit Profile</button>
                  <button className="btn btn-outline-dark">Change Photo</button>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-8">
              <div className="profile-info">
                <div className="info-item d-flex justify-content-between align-items-center">
                  <span className="label">Full Name</span>
                  <span className="value">{displayName || '-'}</span>
                </div>
                <div className="info-item d-flex justify-content-between align-items-center">
                  <span className="label">Email</span>
                  <span className="value">{currentUser?.email || '-'}</span>
                </div>
                <div className="info-item d-flex justify-content-between align-items-center">
                  <span className="label">Member Since</span>
                  <span className="value">{memberSince || '-'}</span>
                </div>
              </div>

              <div className="row text-center g-3 mt-3">
                <div className="col-6 col-lg-3">
                  <div className="profile-stat">
                    <div className="value">{orderedItems}</div>
                    <div className="label">Orders</div>
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <div className="profile-stat">
                    <div className="value">—</div>
                    <div className="label">Wishlist</div>
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <div className="profile-stat">
                    <div className="value">{cartItems}</div>
                    <div className="label">Cart</div>
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <div className="profile-stat">
                    <div className="value">—</div>
                    <div className="label">Coupons</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

}

export default Profile;
