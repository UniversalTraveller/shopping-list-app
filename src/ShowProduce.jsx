import React, { useState } from "react";
import useStore from "./useStore";

export default function ShowProduce() {
  const getProduce = useStore((state) => state.getProduce);
  getProduce();
  const items = useStore((state) => state.items);

  return (
    <>
      {items.map((item) => (
        <p>{item.name.de}</p>
      ))}
    </>
  );
}
