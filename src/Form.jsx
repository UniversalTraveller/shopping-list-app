import React, { useState } from "react";
import useStore from "./useStore";

export default function Form() {
  const [formInput, setFormInput] = useState();

  function handleChange(event) {
    setFormInput(event.target.value);
  }
  const getProduce = useStore((state) => state.getProduce);
  getProduce();
  const items = useStore((state) => state.items);
  return (
    <>
      <h2>Was willst du einkaufen?</h2>
      <form>
        <input
          type={"text"}
          name={"whatToBuy"}
          id={"what-to-bux"}
          placeholder={"Tippe um zu suchen…"}
          onChange={handleChange}
        ></input>
        <p>{formInput}</p>
      </form>
      <ul>
        {items.map((item) => (
          <li>{item.name.de}</li>
        ))}
      </ul>
    </>
  );
}
