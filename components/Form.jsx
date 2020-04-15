import React from "react";

function Form({display,submit}) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <input className={display} type="password" placeholder="Confirm Password" />
      <button  type="submit">{submit}</button>
    </form>
  );
}

export default Form;
