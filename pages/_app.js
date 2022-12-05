import '../styles/globals.css'
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState({})
  const [subTotal, setSubTotal] = useState(0)
  const router = useRouter()

  useEffect(() => {
    console.log("I am for useEffect form _app.js.")
    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")))
        saveCart(JSON.parse(localStorage.getItem("cart")))
        
      }
    } catch (error) {
      console.error(error)
      localStorage.clear()
    }
  }, [])


  const saveCart = (myCart) => {
    localStorage.setItem("cart", JSON.stringify(myCart))
    let subt = 0;
    let keys = Object.keys(myCart)
    for (let i = 0; i<keys.length; i++) {
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

  const buyNow = (itemCode, qty, price, name, size, variant, img) =>{
    saveCart({})
    let newCart = {itemCode: {qty: 1, price, name, size, variant, img} };
    setCart(newCart)
    saveCart(newCart)
    
    router.push('/checkout')
  }

  return <>
    <NavBar key={subTotal} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} 
    subTotal={subTotal} removeItemFromCart={removeItemFromCart} buyNow={buyNow}/>
    <Component cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} 
    subTotal={subTotal} removeItemFromCart={removeItemFromCart} buyNow={buyNow}{...pageProps} />
    <Footer />
  </>
}


export default MyApp
