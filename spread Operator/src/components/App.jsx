import React, { useState } from "react";

function App() {
  
  const [lists,setList] =useState('');
  const [savedList,setsavedList]=useState([]);

  function getList(event){
    
    const value =event.target.value;
    setList(value);
   
  
  }
  function saveList(){
    setsavedList(prevList=>{
      return [...prevList,lists]
    });
    setList('');
  }




  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={getList} type="text" value={lists} />
        <button onClick={saveList}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
           {savedList.map(el=>{
             return <li>{el}</li>
           })}
        </ul>
      </div>
    </div>
  );
}

export default App;
