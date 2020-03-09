import React from "react";

function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <input className={props.display} type="password" placeholder="Confirm Password" />
      <button  type="submit">{props.submit}</button>
    </form>
  );
}

export default Form;
