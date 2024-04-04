import React, { useState } from 'react'
import './App.css';

function App() {
  const [inputValue,setInputValue]=useState("")
  const [addItem,setAddItem]=useState([])
  const addItems=()=>{
   setAddItem((oldItems)=>
        [...oldItems,inputValue]
   )
  }
  const deleteItem=(e)=>{
     setAddItem((olditem)=>{
      return olditem.filter((item,index)=>{
        return index != e.target.id
      })
     })
  }

  return (
    <div className="App">
      <div  className='toDoList'>
        <h1>To Do List</h1>
        <input  className='to-do-input' value={inputValue}type="text" onChange={(e)=>(
       setInputValue( e.target.value)
        )}placeholder='Enter Your Data' />
        <button onClick={addItems}className='btn-add'>Add</button>
        <div className='result'>
          <ul>
            {addItem.map((item,index)=>(
              <li onClick={deleteItem} key={index} id={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
