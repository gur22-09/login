//for changing complex states



import React, { useState } from "react";

function App() {
  
  const [fullName,setName]=useState({
    fName:'',
    lName:''
  });



  function displayName(event){
    const {value,name}=event.target;

    setName((obj)=>{
     
      if(name === 'fName'){
        return{
          fName:value,
          lName:obj.lName   
        }
      }else if(name === 'lName'){
        return{
          fName:obj.fName,
          lName:value
        }
      }

    });
  }
  
const f = fullName.fName;
const l =fullName.lName;

return (
    <div className="container">
      <h1>Hello {f} {l}</h1>
      <form>
        <input onChange={displayName} name="fName" placeholder="First Name" />
        <input onChange={displayName} name="lName" placeholder="Last Name" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
