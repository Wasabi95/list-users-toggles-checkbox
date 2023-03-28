// Challenge: Write a React component that displays a list of items.
// Each item should have a checkbox that toggles its checked state.
// Additionally, there should be a button that shows the number of checked items
// In this solution, we start by defining a state variable called checkedItems using the useState hook. This variable is an array that will store the IDs of the checked items. We also define two event handlers: handleCheckboxChange and handleButtonClick.
// handleCheckboxChange is called whenever a checkbox is clicked. It checks whether the clicked item is already checked or not. If it is checked, it removes the item ID from the checkedItems array, and if it is not checked, it adds the item ID to the checkedItems array.
// handleButtonClick is called when the button is clicked. It shows an alert that displays the number of checked items.
// We then use the map function to loop through the items array and render each item. We display a checkbox for each item, and use the checked property to set its checked state based on whether its ID is present in the checkedItems array or not. We also attach an onChange event handler to each checkbox that calls handleCheckboxChange with the item's ID.
// Finally, we render a button that calls handleButtonClick when clicked, which shows an alert with the number of checked items.
import React from "react";
import ItemList from "./ItemList";

const App = () => {
  const items = [
    { id: 1, label: "Item 1" },
    { id: 2, label: "Item 2" },
    { id: 3, label: "Item 3" },
  ];

  return <ItemList items={items} />;
};

export default App;
