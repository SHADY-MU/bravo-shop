import axios from "axios";
import { Children, createContext, useEffect, useState } from "react";

export const displayContext = createContext() 

export const DisplayContextProvider = ({ children }) => {

    const url = "https://shady-mu.github.io/host-db/db.json"
    
    const [allProducts , setAllProducts] = useState([])
    const [ isLoadingAllProducts , setIsLoadingAllProducts] = useState(false)
    
    const [mainStore , setMainStore] = useState([])
    const [ isLoadingMainStore , setIsLoadingMainStore] = useState(false)
    
    const [fakeStore , SetFakeStore] = useState([])
    const [ isLoadingFakeStore , setIsLoadingFakeStore] = useState(false)
    
    const [dummyStore , setDummyStore] = useState([])
    const [ isLoadingDummyStore, setIsLoadingDummyStore] = useState(false)
    
    async function handlerAllProducts() {
        try {
            
            setIsLoadingAllProducts(true)
            const {data} = await axios.get(url)
            setAllProducts(data.products) 
            
        } catch (error) {
            console.log(error)
        }finally{
            setIsLoadingAllProducts(false)
        }
        
    }
    async function handlerMainStore() {
        try {

            setIsLoadingMainStore(true)
            const {data} = await axios.get(url)
            setMainStore(data.products.filter(p => p.category === "mainStore")); 
            
        } catch (error) {
            console.log(error)
        }finally{
            setIsLoadingMainStore(false)
        }
        
    }
    async function handlerFakeStore() {
        try {
            
            setIsLoadingFakeStore(true)
            const {data} = await axios.get(url)
            SetFakeStore(data.products.filter(p => p.category === "fakeStore"))
            
        } catch (error) {
            console.log(error)
        }finally{
            setIsLoadingFakeStore(false)
        }
    }
    async function handlerDUmmeyStore() {
        try {
            
            setIsLoadingDummyStore(true)            
            const {data} = await axios.get(url)
            setDummyStore(data.products.filter(p => p.category === "dummyStore"))
            
        } catch (error) {
            console.log(error);
        }finally{
            setIsLoadingDummyStore(false)
        }
        
    }
    useEffect(()=>{
        handlerAllProducts()
        handlerMainStore()
        handlerFakeStore()
        handlerDUmmeyStore()
    } , [])
    
    return (
        <displayContext.Provider value={
            {   allProducts,
                mainStore,
                fakeStore,
                dummyStore,
                isLoadingAllProducts,
                isLoadingMainStore,
                isLoadingFakeStore,
                isLoadingDummyStore,
            }
        }>
            {children}
        </displayContext.Provider>
    );
}
