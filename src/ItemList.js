import React, { useState } from "react";

const ItemList = ({ items }) => {
  const [checkedItems, setCheckedItems] = useState([]);

  const handleCheckboxChange = (id) => {
    const isChecked = checkedItems.includes(id);
    if (isChecked) {
      setCheckedItems(checkedItems.filter((itemId) => itemId !== id));
    } else {
      setCheckedItems([...checkedItems, id]);
    }
  };

  const handleButtonClick = () => {
    alert(`Number of checked items: ${checkedItems.length}`);
  };

  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <label>
            <input
              type="checkbox"
              checked={checkedItems.includes(item.id)}
              onChange={() => handleCheckboxChange(item.id)}
            />
            {item.label}
          </label>
        </div>
      ))}
      <button onClick={handleButtonClick}>Show checked items</button>
    </div>
  );
};

export default ItemList;
