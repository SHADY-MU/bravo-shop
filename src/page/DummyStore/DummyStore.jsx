import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './DummyStore.css';
import Products from '../../components/Products/Products';
import { displayContext } from '../../context/DisplayContext';

const DummyStore = () => {

  const {dummyStore , isLoadingDummyStore} = useContext(displayContext)

  return(
    <div className="DummyStore container">
      <Products data={dummyStore} Store={"Dummy Store"} loading={isLoadingDummyStore} />
    </div>
  )
};

export default DummyStore;
