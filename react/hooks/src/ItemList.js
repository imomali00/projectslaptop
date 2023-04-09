import React, { useState, useEffect } from "react";

export default function ItemList({ getItems }) {
  const [item, setItem] = useState([]);
  useEffect(() => {
    const newItem = getItems();
    setItem(newItem);
  }, [getItems]);

  return (
    <ul>
      {item.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  );
}
