import React from "react";
import Form from "./Form";
import '../../public/styles.css';

var userIsRegistered = 0;


function renderConditionally(userIsRegistered){

return (userIsRegistered?<div className="container"><Form display='hide' submit='Login'/></div>:<div className='container'><Form submit='Register' /></div>);

}

function App() {
  return renderConditionally(userIsRegistered);
}

export default App;
