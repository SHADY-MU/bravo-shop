import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword , signInWithEmailAndPassword , onAuthStateChanged , signOut} from "firebase/auth"
import { auth  , db } from "../firebase/firebase";
import {doc, getDoc, setDoc} from "firebase/firestore"

export const authContext = createContext()

export const AuthContextProvider = ({children})=>{

    const [ isLoading , setIsLoading] = useState(false)
    const [loadingDisplayUserData , setLoadingDisplayUserData]  = useState(true)
    const [currentUser , setCurrentuser] = useState(null)

    const resgisterHandler = async (data)=>{

        const {firstName , lastName ,  email , password} = data

        
        try {
            setIsLoading(true)
            const userData = await createUserWithEmailAndPassword(auth , email , password)    
            
            await setDoc(doc(db, "Users", userData.user.uid), {
                firstName,
                lastName,
                email,
                id:userData.user.uid,
                createdAt: new Date(),
            });
            
            
            return {success:true}
            
        } catch (error) {
            console.log(error.message);
            console.log("failed auth");
            return {success:false , message : error.message}
        }finally{
            setIsLoading(false)
        }

    }

    const loginHandler = async(data)=>{

        const { email , password} = data
        
        try {
            setIsLoading(true)
            await signInWithEmailAndPassword(auth , email , password)    
            setLoadingDisplayUserData(true)
            return {success:true}
            
        } catch (error) {
            console.log(error.message);
            console.log("failed auth");
            return {success:false , message : error.message}
        }finally{
            setIsLoading(false)
        }

    }

    const fecthUserData = async (uid)=>{
        const user = await getDoc(doc( db , "Users" , uid) ) 
        if(user.exists()){
            setCurrentuser(user.data())
        }
    }

    const signout = async ()=>{
        try {
            await signOut(auth)
            setCurrentuser(null)
        } catch (error) {
            console.log(error,message);
        }
    }

    useEffect(()=>{

        const recordes = onAuthStateChanged(auth , async (user)=>{
            if(user){
               await fecthUserData(user.uid)
            }else{
                setCurrentuser(null)
            }
            setLoadingDisplayUserData(false)
        })

        return ()=> recordes()

    }, [])

    return <authContext.Provider value={{
        resgisterHandler,
        loginHandler,
        isLoading,
        loadingDisplayUserData,
        currentUser,
        signout

    }}>
        {children}
    </authContext.Provider>
}