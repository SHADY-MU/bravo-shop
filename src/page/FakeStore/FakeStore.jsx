import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './FakeStore.css';
import { displayContext } from '../../context/DisplayContext';
import Products from '../../components/Products/Products';

const FakeStore = () => {

  const {fakeStore , isLoadingFakeStore} = useContext(displayContext)

  return(
    <div className="FakeStore container">
      <Products data={fakeStore} Store={"Fake Store"} loading={isLoadingFakeStore} />
    </div>
  )
};

export default FakeStore;
