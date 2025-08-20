import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Shop.css';
import Products from '../../components/Products/Products';
import { displayContext } from '../../context/DisplayContext';


const Shop = () => {

  const {allProducts} = useContext(displayContext)
  

  return(
    <div className="Shop container">
      <Products data={allProducts } Store="All Products"/>
    </div>
  )

};

export default Shop;
