
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Data from './Data';
import Card from './Card';
import { useState } from 'react';
import Buttons from './Buttons';

function App() {
  const [item,setItems]=useState(Data)
  const menuItems = [...new Set(Data.map((val)=> val.category))];

  ///filter

  const filterItems = (cat) =>{
const newItems = Data.filter((newval)=> newval.category === cat)
setItems(newItems)
  }


  return (
    <div className='container-fluid'>
     <div className='row'>
<h1 className='text-center col-12 fw-bold mt-3 mb-5'>Food filter App</h1>
<Buttons
menuItems={menuItems}
filterItems={filterItems}
setItems={setItems}
/>
<Card item={item}/>
     </div>
    </div>
  );
}

export default App;
