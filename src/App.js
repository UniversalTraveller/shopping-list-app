import React from "react";
import Header from "./Header";
import ShoppingList from "./ShoppingList";
import Form from "./Form";
import ContentArea from "./ContentArea";
import useStore from "./useStore";
import ShowProduce from "./ShowProduce";

function App() {
  return (
    <ContentArea>
      <Header />
      <ShoppingList />
      <Form />
    </ContentArea>
  );
}

export default App;
