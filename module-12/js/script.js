// Array of top 10 favorite books
const topBooks = [
	"Dragons of Autumn Twilight",
	"Dragons of Winter Night",
	"Dragons of Spring Dawning",
	"A Spell for Chameleon",
	"Watchmen",
	"The Incredible Hulk: What Savage Beast",
	"Have a Nice Day: A Tale of Blood and Sweatsocks",
	"The Stone Cold Truth",
	"The New Encyclopedia of Modern Bodybuilding",
	"Zinn & the Art of Mountain Bike Maintenance"
];

// Get references to the buttons and the unordered list
const topToBottomBtn = document.getElementById('topToBottomBtn');
const bottomToTopBtn = document.getElementById('bottomToTopBtn');
const bookList = document.getElementById('bookList');

// Function to display books in ascending order (Top to Bottom)
function displayTopToBottom() {
    bookList.innerHTML = ''; // Clear current list
    topBooks.forEach((book, index) => {
        const listItem = document.createElement('li');
        // Display the sequential number of the book
        listItem.textContent = `${index + 1}. ${book}`;
        bookList.appendChild(listItem);
    });
}

// Function to display books in descending order (Bottom to Top)
function displayBottomToTop() {
    bookList.innerHTML = ''; // Clear current list
    const reversedBooks = [...topBooks].reverse();
    reversedBooks.forEach((book, index) => {
        const listItem = document.createElement('li');
        // Display the sequential number for the reversed order
        listItem.textContent = `${topBooks.length - index}. ${book}`;
        bookList.appendChild(listItem);
    });
}

// Add event listeners to the buttons
topToBottomBtn.addEventListener('click', displayTopToBottom);
bottomToTopBtn.addEventListener('click', displayBottomToTop);

// Initial display when the page loads (e.g., Top to Bottom)
document.addEventListener('DOMContentLoaded', displayTopToBottom);