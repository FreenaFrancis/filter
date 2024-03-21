import React from 'react'
import Data from './Data'

function Buttons({menuItems,filterItems, setItems}) {
  return (
    <div className='d-flex justify-content-center mb-2'>
      {
        menuItems.map(val => (
            <button className='btn-dark tetx-white p-1 px-2 mx-2 btn fw-bold'
            onClick={()=>filterItems(val)}
            >
                {val}
            </button>
        ))
      }
       <button className='btn-dark tetx-white p-1 px-2 mx-2 btn fw-bold'
       onClick={()=> setItems(Data)}
       >
                All
            </button>
    </div>
  )
}

export default Buttons
