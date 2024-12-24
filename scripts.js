// Example list of terms for "Word of the Day" feature
const wordsOfTheDay = [
    { word: "Bet", definition: "A term used to agree with someone, similar to 'okay' or 'sure'." },
    { word: "Cap", definition: "Used to indicate a lie or falsehood." },
    { word: "YOLO", definition: "Acronym for 'You Only Live Once,' often used to justify spontaneous actions." },
    { word: "Slay", definition: "To excel or do something very well, often used as a compliment." },
    { word: "Bussin'", definition: "Used to describe something that's really good or tasty." },
    { word: "Drip", definition: "Refers to someone's style, especially their clothing or accessories." },
    // Add more terms here
];

// Function to display the "Word of the Day"
function displayWordOfTheDay() {
    // Get today's date and use it to determine the word to display
    const today = new Date();
    const index = today.getDate() % wordsOfTheDay.length; // Use the date to cycle through words

    const word = wordsOfTheDay[index];
    
    // Display the word and its definition
    document.getElementById("word-display").textContent = word.word;
    document.getElementById("word-definition").textContent = word.definition;
}

// Call the function to display the "Word of the Day"
displayWordOfTheDay();

// Optional: Implement a live search feature
document.getElementById('search-bar').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const slangItems = document.querySelectorAll('.slang-item');

    slangItems.forEach(item => {
        const term = item.textContent.toLowerCase();
        
        if (term.includes(query)) {
            item.style.display = 'block'; // Show if search query matches
        } else {
            item.style.display = 'none'; // Hide if search query does not match
        }
    });
});

