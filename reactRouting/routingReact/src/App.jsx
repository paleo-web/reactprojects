import { useEffect, useState } from "react";
import "./App.css";
import { getProducts } from "./Componets/Productapi.js";
import Card from "./Componets/Card.jsx";
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route, Router } from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
    {/* <Route path="/home" element={<Home/>}/> */}
    {/* <Route path="/content" element={<Contentus/>}/> */}
    </Route>
  )
);

function App() {
  const [products, setProducts] = useState([]);
  const [Cardcount, setCardCount] = useState([]);

  useEffect(() => {
   const getItems = JSON.parse(localStorage.getItem("Cart"));
   if(getItems){
    setCardCount(getItems);
   }
   
  }, []);

  useEffect(() => {

    if (Cardcount.length) {
      localStorage.setItem("Cart", JSON.stringify(Cardcount));
    }
  }, [Cardcount]);

  const addCart = (items) => {
    const newCart = [...Cardcount];
    const findIndex = Cardcount.findIndex((item) => item.id === items.id);

    if (findIndex == -1) {
      newCart.push(items);
      setCardCount([...newCart]);
      
    }

    // console.log('clicked',items);
  };

  useEffect(() => {
    // console.log("useeffect called");
    Apis();
  }, []);

  const Apis = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  return (
    <>
    <RouterProvider router={router} />
      <h1 className="text-3xl font-bold underline text-center top-0 fixed p-2 w-full bg-white">
        Cart <span>{Cardcount.length}</span>
      </h1>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {products.map((item) => {

              const isAdded =
                Cardcount.findIndex((product) => product.id === item.id) !== -1;

              return (
                <Card
                  key={item.id}
                  item={item}
                  addToCart={() => addCart(item)}
                  isAdded={isAdded} 
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
