import './App.css'
import Home from './assets/Pages/Home'
import {useEffect, useState } from "react"

function App() {
  
   // why we use useEffect?
    // we want to fetch data from an api
    // we want to make api calls
    //if we use any function of javaScript like so we use useeffect
     const [Products, setProducts] = useState([])
    useEffect(()=>{
      localStorage.setItem("products", JSON.stringify(
      [
    {
      key: 1,
      name: "twister",
      price: 400,
      img : "/public/twister.png"
    },
    {
      key: 2,
      name: "Hot Wing Bucket",
      price: 770,
      img : "/public/Hot Wing Bucket.png"
    },
    {
      key: 2,
      name: "Burger",
      price: 350,
      img : "/public/Burger.png"
    },
    {
      key: 2,
      name: "Crispy Duo",
      price: 990,
      img : "/public/crispy duo.png"
    },
    {
      key: 2,
      name: "Krunch Combo",
      price: 1270,
      img : "/public/krunch Combo.png"
    },
      ]

      
      ))

      const Products = JSON.parse(localStorage.getItem("products"))
      setProducts(Products)
    }, [])

  return <Home  Products={Products}/>
}

export default App
