/* eslint-disable react-hooks/exhaustive-deps */
import '../styles/globals.css'
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingBar from 'react-top-loading-bar'

function MyApp({ Component, pageProps }) {
  
  const [cart, setCart] = useState({})
  const [subTotal, setSubTotal] = useState(0)
  const [user, setUser] = useState({ value: null })
  const [key, setKey] = useState()
  const [progress, setProgress] = useState(0)
  // const [userName, setuserName] = useState({value: null})
  const router = useRouter()

  useEffect(() => {
    console.log("I am for useEffect form _app.js.")
    router.events.on('routeChangeStart',()=>{
      setProgress(40)
    })
    router.events.on('routeChangeComplete',()=>{
      setProgress(100)
    })
    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")))
        saveCart(JSON.parse(localStorage.getItem("cart")))

      }
    } catch (error) {
      console.error(error)
      localStorage.clear()
    }
    const token = localStorage.getItem('token')
    if (token) {
      setUser({ value: token })
      // setuserName({value: token.name})
    }
    setKey(Math.random())
  }, [router.query])


  const saveCart = (myCart) => {
    localStorage.setItem("cart", JSON.stringify(myCart))
    let subt = 0;
    let keys = Object.keys(myCart)
    for (let i = 0; i < keys.length; i++) {
      subt += myCart[keys[i]].price * myCart[keys[i]].qty
    }
    setSubTotal(subt)

  }

  const addToCart = (itemCode, qty, price, name, size, variant, img) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty + qty
    } else {
      newCart[itemCode] = { qty: 1, price, name, size, variant, img }
    }
    setCart(newCart)
    saveCart(newCart)
  }

  const clearCart = () => {
    setCart({})
    saveCart({})
  }

  const removeFromCart = (itemCode, qty, price, name, size, variant, img) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty - qty
    }
    if (newCart[itemCode]["qty"] <= 0) {
      delete newCart[itemCode]
    }
    setCart(newCart)
    saveCart(newCart)
  }

  const removeItemFromCart = (itemCode, qty, price, name, size, variant, img) => {
    let newCart = cart;
    if (newCart[itemCode]["qty"] >= 1) {
      delete newCart[itemCode]
    }
    setCart(newCart)
    saveCart(newCart)
  }

  const buyNow = (itemCode, qty, price, name, size, variant, img) => {
    let newCart = {}
    newCart[itemCode] = { qty: 1, price, name, size, variant, img };
    setCart(newCart)
    saveCart(newCart)

    router.push('/checkout')
  }

  const logout = () => {
    localStorage.removeItem('token')
    setUser({ value: null })
    setKey(Math.random())
    router.push('/')
    toast.success('You are successfully logged out.', {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  return <>
  <LoadingBar
      color='white'
      progress={progress}
      waitingTime={400}
      onLoaderFinished={() => setProgress(0)}
    />
   
     {key && <NavBar logout={logout} user={user} key={key} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} removeItemFromCart={removeItemFromCart} buyNow={buyNow} />}
      
    <ToastContainer
      position="top-left"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
     
    <Component cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart}
      subTotal={subTotal} removeItemFromCart={removeItemFromCart} buyNow={buyNow}{...pageProps} />
    <Footer />
  </>
}


export default MyApp
