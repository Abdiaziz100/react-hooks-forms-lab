import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import ItemForm from "./components/ItemForm";
import Filter from "./components/Filter";
import ItemList from "./components/ItemList";

const initialItems = [
  { id: "1", name: "Milk", category: "Dairy" },
  { id: "2", name: "Carrots", category: "Produce" },
  { id: "3", name: "Cake", category: "Dessert" },
];

function App() {
  const [items, setItems] = useState(initialItems);
  const [searchText, setSearchText] = useState("");

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Shopping List</h1>
      <ItemForm onItemFormSubmit={handleAddItem} />
      <Filter search={searchText} onSearchChange={setSearchText} />
      <ItemList items={filteredItems} />
    </div>
  );
}

export default App;
