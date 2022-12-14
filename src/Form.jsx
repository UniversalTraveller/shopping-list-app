import React, { useState, useEffect } from "react";
import useStore from "./useStore";
import { fuzzy, Searcher } from "fast-fuzzy";

export default function Form() {
  const [formInput, setFormInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [selectedProduce, setSelectedProduce] = useState([]);

  function handleChange(event) {
    setFormInput(event.target.value);
  }
  const getProduce = useStore((state) => state.getProduce);
  getProduce();
  const items = useStore((state) => state.items);

  function search() {
    const { Searcher } = require("fast-fuzzy");
    const searcher = new Searcher(items, {
      keySelector: (item) => item.name.de,
    });
    const data = searcher.search(formInput);
    setSearchResult(data);
    //console.log(searchResult);
  }

  useEffect(() => {
    search();
  }, [formInput]);

  return (
    <>
      <h2>Was willst du einkaufen?</h2>
      <form>
        {selectedProduce.map((item) => (
          <p>{item}</p>
        ))}
        <input
          type={"text"}
          name={"whatToBuy"}
          id={"what-to-bux"}
          placeholder={"Tippe um zu suchen…"}
          onChange={handleChange}
        ></input>
      </form>

      {searchResult.map((item) => (
        <button
          type={"button"}
          onClick={() => setSelectedProduce([...selectedProduce, item.name.de])}
        >
          {item.name.de}
        </button>
      ))}
    </>
  );
}
