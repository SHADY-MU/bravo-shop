import React, { useContext } from 'react'
import Header from '../../components/Header/Header'
import Categories from '../../components/Categories/Categories'
import Products from '../../components/Products/Products'
import { displayContext } from '../../context/DisplayContext'

function Home() {

  const {mainStore , isLoadingMainStore} = useContext(displayContext)

  console.log(mainStore);
  

  return (
    <div className='Home' >
        <Header />
        <Categories/>
        <Products data={mainStore} loading={isLoadingMainStore}/>
    </div>
  )
}

export default Home