import { useEffect, useState } from "react";
import "./App.css";
import { getProducts } from "./Componets/Productapi.js";
import Card from "./Componets/Card.jsx";
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route, Router } from "react-router-dom";
import About from "./Componets/About.jsx";
import Home from "./Componets/Home.jsx";
import ContentUs from "./Componets/ContentUs.jsx";
import FoundError from "./Componets/FoundError.jsx";
import Layout from "./Componets/Layout.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route>

    <Route path="/" element={<Layout/>}>
    <Route path="/" element={<Home/>}/>
    <Route path="/contact" element={<ContentUs/>}/>
    <Route path="/about" element={<About/>}/>
    </Route>
    <Route path="*" element={<FoundError/>}/>
    </Route>
    

  )
);


function App() {
  
  return (
    <>
    <RouterProvider router={router} />
      </>
  );
}

export default App;
