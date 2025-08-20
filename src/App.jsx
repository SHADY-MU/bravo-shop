import React, { lazy , Suspense } from 'react'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import LottieHandler from './common/LottieHandler/LottieHandler';
import MainLoader from './assets/lottiFiles/MainLoading.json'
import SecondaryLoading from './assets/lottiFiles/SecondaryLoading.json'
import Error from './assets/lottiFiles/404 Error - Doodle animation.json'

const Layout = lazy( ()=> import('./layout/Layout') )
const Home = lazy( ()=> import('./page/Home/Home') )
const Shop = lazy( ()=> import('./page/Shop/Shop') )
const FakeStore = lazy( ()=> import('./page/FakeStore/FakeStore') )
const DummyStore = lazy( ()=> import('./page/DummyStore/DummyStore') )
const About = lazy( ()=> import('./page/About/About'))
const Contact = lazy( ()=> import('./page/Contact/Contact'))
const Cart = lazy( ()=> import('./page/Cart/Cart'))
const Login = lazy( ()=> import('./page/auth/Login'))
const Resgister = lazy( ()=> import('./page/auth/Resgister'))
const Profile = lazy( ()=> import('./page/Profile/Profile'))

export default function App() {
  
  

  const router = createBrowserRouter([
    {
      path : "",
      element: <Suspense fallback={<LottieHandler loadAnimation = {MainLoader}/>}> <Layout /> </Suspense>,
      children: [
        { index:true , element: <Suspense fallback={<LottieHandler loadAnimation = {SecondaryLoading}/>}> <Home /> </Suspense>},
        { path:"about" , element: <Suspense fallback={<LottieHandler loadAnimation = {SecondaryLoading}/>}> <About /> </Suspense>},
        { path:"shop" , element: <Suspense fallback={<LottieHandler loadAnimation = {SecondaryLoading}/>}> <Shop /> </Suspense>},
        { path:"fake" , element: <Suspense fallback={<LottieHandler loadAnimation = {SecondaryLoading}/>}> <FakeStore /> </Suspense>},
        { path:"dummy" , element: <Suspense fallback={<LottieHandler loadAnimation = {SecondaryLoading}/>}> <DummyStore /> </Suspense>},
        { path:"contact" , element: <Suspense fallback={<LottieHandler loadAnimation = {SecondaryLoading}/>}> <Contact /> </Suspense>},
        { path:"cart" , element: <Suspense fallback={<LottieHandler loadAnimation = {SecondaryLoading}/>}> <Cart /> </Suspense>},
        { path:"login" , element: <Suspense fallback={<LottieHandler loadAnimation = {SecondaryLoading}/>}> <Login /> </Suspense>},
        { path:"resgister" , element: <Suspense fallback={<LottieHandler loadAnimation = {SecondaryLoading}/>}> <Resgister /> </Suspense>},
        { path:"profile" , element: <Suspense fallback={<LottieHandler loadAnimation = {SecondaryLoading}/>}> <Profile /> </Suspense>},
      ],
      errorElement: <LottieHandler loadAnimation={Error} isError={true} />
    }
  ])


  return <>
    <RouterProvider router={router}/>
  </> 
}
