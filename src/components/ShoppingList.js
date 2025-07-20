import React from "react";
import Item from "./Item";
import ItemForm from "./ItemForm";
import Filter from "./Filter";

function ShoppingList({
  items,
  onItemFormSubmit,
  onCategoryChange,
  selectedCategory,
  searchText,
  onSearchChange,
}) {
  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter
        onCategoryChange={onCategoryChange}
        selectedCategory={selectedCategory}
        searchText={searchText}
        onSearchChange={onSearchChange}
      />
      <ul className="Items">
        {items.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
