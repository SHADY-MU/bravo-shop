import PropTypes from 'prop-types';
import './Products.css';
import image1 from "../../assets/Images/P1.jpg"
import { IoStarSharp } from "react-icons/io5";
import { FaShoppingCart, FaSlack } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import MyLoader from '../../assets/skoltons/MyLoader';
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import ReactPaginate from 'react-paginate';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { cartContext } from '../../context/CartContext';
import Swal from 'sweetalert2';




const Products = ({data , Store="Products" , loading}) => {

  const {addToCart , cartIdes} = useContext(cartContext)

  const [sliceArry , setSliceArry] = useState([])
  const [isDisable , setIsDasible] = useState(false)
  const [isDisableId , setIsDasibleId] = useState(false)

  const rowRef = useRef()
  const pageProducts = 12


  const handlerPagination = (currentPage)=>{

    let lastIndex = currentPage * pageProducts
    let firstIndex = lastIndex - pageProducts

    setSliceArry(data.slice(firstIndex , lastIndex))
  }

  const hanleAddToCart = (proId)=>{
    addToCart(proId)
    setIsDasibleId(proId)
    setIsDasible(true)
    if(cartIdes[proId] === 1){
      Swal.fire({
        title: `Succfullu Add a New product`,
        icon: "success",
        draggable: true
      });
    }else{
      Swal.fire({
        title: `Succfullu Add More`,
        icon: "success",
        draggable: true
      });
    }
  }

  useEffect(()=>{

    if(!isDisable){
      return
    }
    setIsDasible(true)
    setTimeout(()=>{
      return setIsDasible(false)
    } , 1500)

  } , [isDisable])
  
  const handlerPageChange = (data)=>{


    rowRef.current?.classList.add("changePagenation")
    let selectedPage = data.selected + 1 
    handlerPagination(selectedPage)

    window.scrollTo({
    top: 0,
    behavior: 'smooth'
    });
    
    setTimeout(()=>{
      rowRef.current?.classList.remove("changePagenation")
    } , [800])
  }

  useEffect(()=>{
    handlerPagination(1)
  } , [])

  return(
      <div className="Products container my-5">
        <h2 className='h1 fw-bold text-center mb-5 d-block' style={{color:"var(--main-color)"}}>{Store.toUpperCase()}</h2>
        <div className="row g-4" ref={rowRef}>
          {
            loading?
            <MyLoader />
            :
            sliceArry.map((Value)=>{

              if(Value.discount == undefined){
                Value.discount = Math.ceil(Math.random() * 30)
              }
              let finalPrice = (Value.price - (Value.price * Value.discount/100)).toFixed(2)
              
              return(

                <div className="col-lg-3 col-md-6 col-12" key={Value.id}>

                  <div className="card shadow shadow-2 border text-center">

                    <div className='w-100 p-5 image'>
                      <img src={Value.image} alt="" className="w-100" style={{height:"200px"}} />
                    </div>

                    <div className="card-body">

                        <b className=' fs-5 ' >{Value.title?.split(" ").slice(0,2).join(" ") }</b>

                        <p className=' my-2 h5 fw-bold '>
                          {finalPrice}
                          <del className='ms-3 h5 fw-bold text-muted '>{Value.price}</del>
                        </p>

                        <div className="stars fs-5 my-2" style={{color:"yellow"}}>
                            <IoStarSharp/>
                            <IoStarSharp/>
                            <IoStarSharp/>
                            <IoStarSharp/>
                            <IoStarSharp/>
                        </div>

                        <div className='buttons flex'>
                          <button><FaHeart /></button>
                          <button disabled={isDisable} onClick={()=> hanleAddToCart(Value.id)}>
                            {
                              isDisable & Value.id == isDisableId ?
                              <div class="spinner-border" role="status">
                                <span class="sr-only"></span>
                              </div>
                              :
                              <FaShoppingCart/>
                            }
                          </button>
                        </div>

                      </div>
                    </div>
                </div>

              )
            })
          
          }
        </div>
        <div className="my-5 mx-auto" style={{width:"max-content"}}>
            <ReactPaginate 
              onPageChange={ handlerPageChange }
              previousLabel={ <FaAngleLeft/> }
              nextLabel={ <FaAngleRight /> }
              pageCount={ Math.ceil( data.length / pageProducts)}
              pageRangeDisplayed={0}
              marginPagesDisplayed={2}

              containerClassName='pagination'
              activeClassName='active'

              pageClassName='page-item'
              pageLinkClassName='page-link'

              previousClassName='page-item'
              previousLinkClassName='page-link'

              nextClassName='page-item'
              nextLinkClassName='page-link'

              breakClassName='page-item'
              breakLinkClassName='page-link'
            />
        </div>

        
      </div>
  )
  

}


export default Products;
