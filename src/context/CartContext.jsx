import axios from "axios";
import { Children, createContext, useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import { promise } from "zod";

export const cartContext = createContext()

export const CartContextProvider = ({children})=>{

    
    const [cartIdes , setCartIdes] = useState({})
    const [orders , setOrders] = useState({})
    const [records , setRecords] = useState([])
    const [isLoadingRecords , setIsLoadingRecords] = useState(false)
    const firstRender = useRef(true)

    
    const addToCart = (id) => {
        
        setCartIdes(prev =>{
            const updata = {...prev}

            if(!updata[id]){
                updata[id] = 1
            }else{
                ++updata[id]
            }

            return updata
        })
        localStorage.setItem("ids" , JSON.stringify(cartIdes))
        
    }
    
    useEffect(()=>{
        if(localStorage.getItem("ids")){
            setCartIdes(prev => ({ ...prev , ...JSON.parse(localStorage.getItem("ids")) }));
        }
        if(localStorage.getItem("orders")){
            setOrders(prev => ({ ...prev , ...JSON.parse(localStorage.getItem("orders")) }))
        }
    } , [])

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
            return; // متكتبش في localStorage في أول render
        }
        localStorage.setItem("ids", JSON.stringify(cartIdes));
        localStorage.setItem("orders", JSON.stringify(orders));
    }, [cartIdes , orders]);
    
    
    const getProductsOfCart = async () => {
        const allIdes = Object.keys(cartIdes);
        
        try {
            setIsLoadingRecords(true);

            const requests = allIdes.map(id =>
                 axios.get(`http://localhost:3000/products?id=${id}`)
            );
            
            
            const results = await Promise.all(requests);
            const allProducts = results.flatMap(res => res.data);
            
            setRecords(allProducts);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoadingRecords(false);
        }
    };

    
    const removeHandler = (id)=>{
        const newCartIdes = {...cartIdes}
        Swal.fire({
            title: "Are you sure?",
            text: "Are You Sure You Want to Delete This Product",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "The Product Has Deleted",
                    icon: "success"
                });
                delete newCartIdes[id]
                setCartIdes(newCartIdes)
            }
        });
        
        localStorage.setItem("ids" , JSON.stringify(newCartIdes))
    }
    
    const placeholderHandler = ()=>{
        const newCartIdes = {}
        
        
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes , I am sure"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "All products placed holder",
                    text: "your products in the way",
                    icon: "success"
                });
                setOrders((prev) => {
                    const newOrders = { ...prev, ...cartIdes };
                    return newOrders;
                });
                setCartIdes(newCartIdes)
            }
            });

        localStorage.setItem("ids" , JSON.stringify(newCartIdes))
        localStorage.setItem("orders" , JSON.stringify(orders))

    }

    const amountOnChange = (e , id)=>{
        setCartIdes(prev =>{
            const updata = {...prev}
            updata[id] = e
            return updata
        })
    }
    
    return <cartContext.Provider value={{
        cartIdes,
        addToCart,
        records,
        isLoadingRecords,
        getProductsOfCart,
        removeHandler,
        amountOnChange,
        placeholderHandler,
        orders
    }}>
        {children}
    </cartContext.Provider>
}
