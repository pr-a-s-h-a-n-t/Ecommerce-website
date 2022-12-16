
 import { Routes, Route } from "react-router-dom";
 import React,{useState, useEffect } from "react";
import LandingPage from "./webpage-components/Index";
import Cart from "./webpage-components/cart/Cart"
import NavBar from "./webpage-components/1_NavigationBar/NavBar";
import Shop from "./webpage-components/Shop";


function App() {
  const [cartCount, setCartCount] = useState(0);

  const [store, setStore] = useState([]);
  useEffect(() => {
    mystore();
  }, [])


  const mystore = async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const jsondata = await res.json();
    jsondata.forEach(object => {
      object.amount = 1;
    });
    setStore(jsondata);


  }


  console.log(store)


  // below caode is for add to Cart feature!
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);


  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id)
        isPresent = true;
    })
    if (isPresent) {
      setWarning(true);
      alert("Item is already added to your cart")
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }
    setCart([...cart, item]);
  }

  const handleChange = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id)
        ind = index;
    });
    const tempArr = cart;
    tempArr[ind].amount += d;

    if (tempArr[ind].amount === 0)
      tempArr[ind].amount = 1;
    setCart([...tempArr])
  }




  

  return (
    <>
    <NavBar cartCount={cartCount} />
    <Routes>
       {/* <Route path="/" element ={ <NavBar cartCount={cartCount} />}> </Route> */}
          <Route index element ={ <LandingPage  cartCount={cartCount} setCartCount={setCartCount}    />} /> 
          <Route path="cart" element ={ <Cart />} /> 
          <Route path="shop" element ={ <Shop />} /> 
          
           
        
    </Routes>



    </>

  );
}

export default App;
