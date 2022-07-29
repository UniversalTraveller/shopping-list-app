import React, { useState } from "react";

export default function Form() {
  const [formInput, setFormInput] = useState();

  function handleChange(event) {
    setFormInput(event.target.value);
  }
  return (
    <>
      <h2>Was willst du einkaufen?</h2>
      <form>
        <input type={"text"} onChange={handleChange}></input>
        <p>{formInput}</p>
      </form>
    </>
  );
}
