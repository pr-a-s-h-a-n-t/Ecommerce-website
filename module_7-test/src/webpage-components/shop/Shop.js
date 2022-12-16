import React,{ useState, useEffect } from 'react'
import Card from "./Card"


function Shop( { store , handleClick} ) {


  return (
    <> 
    <h2>MYSTORE</h2>
    <div className='container'>
        {store.map((item, i) => {

            return (
                < Card
                    key={i}
                    item={item}
                    handleClick={handleClick}

                />



            )
        })}
    </div>
    </>
  )
}

export default Shop
