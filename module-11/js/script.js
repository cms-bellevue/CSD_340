// Array to hold our to-do items. Initially empty.
const items = [];

/**
 * Adds a new item to the 'items' array from the input field.
 * Alerts the user confirming the addition of the item.
 */
function addItem() {
  const input = document.getElementById("itemInput").value.trim(); // Get and trim user input
  if (input) {
    items.push(input); // Add item to array
    alert(`Item: ${input} Added as Item ${items.length}`); // Confirm to user
    document.getElementById("itemInput").value = ""; // Clear input field
  } else {
    alert("Please enter a value before adding."); // Alerts the user if no input is entered
  }
}

/**
 * Removes the last item from the 'items' array.
 * Alerts the user about the removed item or if the list is already empty.
 */
function deleteLast() {
  if (items.length > 0) {
    const removed = items.pop();
    alert(`Removed: "${removed}"`);
  } else {
    alert("Array is already empty.");
  }
}

/**
 * Displays all items currently in the 'items' array in the output area.
 * Displays items starting from 1 for easier reference.
 */
function displayItems() {
  const displayDiv = document.getElementById("output");
  displayDiv.innerHTML = "";

  if (items.length === 0) {
    displayDiv.innerHTML = "<p>No items to display.</p>";
    return;
  }

  let outputHTML = "";
  for (let i = 0; i < items.length; ++i) {
    outputHTML += `Item ${i + 1} = ${items[i]}<br>`;
  }

  displayDiv.innerHTML = outputHTML;
}

/**
 * Opens a modal popup for selecting items to delete.
 * Dynamically builds a checkbox list from the current array items.
 */
function openDeletePopup() {
  const popup = document.getElementById("deletePopup");
  const form = document.getElementById("deleteForm");
  form.innerHTML = "";

  if (items.length === 0) {
    form.innerHTML = "<p>No items to delete.</p>";
  } else {
    items.forEach((item, index) => {
      const label = document.createElement("label");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.value = index;
      label.appendChild(checkbox);
      label.appendChild(document.createTextNode(`Item ${index + 1} = ${item}`));
      form.appendChild(label);
      form.appendChild(document.createElement("br"));
    });
  }

  popup.style.display = "block";
}

/**
 * Closes the item deletion modal popup.
 */
function closeDeletePopup() {
  document.getElementById("deletePopup").style.display = "none";
}

/**
 * NOTE: "Delete Selected Item(s)" refreshes the display after deletion.
 * "Delete Last Entry" does NOT refresh automatically since that wasn't required in the original assignment.
 * Removes selected items from the array and updates the display.
 * Splices them from the array and refreshes the output display.
 */
function confirmDeleteSelected() {
  const form = document.getElementById("deleteForm");
  const checkedBoxes = Array.from(form.querySelectorAll("input[type='checkbox']:checked"));

  if (checkedBoxes.length === 0) {
    alert("Please select at least one item to delete.");
    return;
  }

  // Convert checkbox values to integers and sort descending
  const indexesToDelete = checkedBoxes.map(cb => parseInt(cb.value)).sort((a, b) => b - a);

  // Remove selected items from array (starting from highest index)
  indexesToDelete.forEach(index => {
    items.splice(index, 1);
  });

  closeDeletePopup();
  displayItems();
}