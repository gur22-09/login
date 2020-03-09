import React, { useState } from "react";

function App() {

 const [input,setInput] =useState("");
 const [name,setName] =useState("");


function getValue(event){
 setInput(event.target.value);
}

function displayInput(){
 setName(input);
}



  return (
    <div className="container">                                          
      <h1>Hello {name}</h1>
      <input onChange={getValue} 
      type="text" 
      value={input}
      placeholder="What's your name?" />
      <button onClick={displayInput}>Submit</button>
    </div>
  );
}
/*alternative using <form>
<form onsubmit={displayInput}>
<input onChange={getValue}
       type='text'
       value={input} />
 <button>Submit</button>
</form>
function displayInput(event){
setName(input);
event.preventDefault();
}
*/
export default App;
