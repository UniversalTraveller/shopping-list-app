import React, { useState, useEffect } from "react";
import useStore from "./useStore";
import { fuzzy, Searcher } from "fast-fuzzy";

export default function Form() {
  const [formInput, setFormInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  function handleChange(event) {
    setFormInput(event.target.value);
  }
  const getProduce = useStore((state) => state.getProduce);
  getProduce();
  const items = useStore((state) => state.items);

  {
    /* The search: */
  }
  function search() {
    const { Searcher } = require("fast-fuzzy");
    const searcher = new Searcher(items, {
      keySelector: (item) => item.name.de,
    });
    const data = searcher.search(formInput);
    setSearchResult(data);
    console.log(searchResult);
  }

  useEffect(() => {
    search();
  }, [formInput]);

  //setSearchResult(data); //returns ["abc", "bcd"];
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
        {searchResult.map((item) => (
          <li>{item.name.de}</li>
        ))}
      </ul>
    </>
  );
}
