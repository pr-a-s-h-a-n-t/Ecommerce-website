import React,{ useState, useEffect } from 'react'

function Shop() {



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


  // console.log(store)























  return (
    <div>
      this is shop!!!
    </div>
  )
}

export default Shop
