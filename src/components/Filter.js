import React from "react";

function Filter({ search, onSearchChange }) {
  return (
    <div>
      <label>
        Search:
        <input
          type="text"
          placeholder="Search items..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </label>
    </div>
  );
}

export default Filter;
