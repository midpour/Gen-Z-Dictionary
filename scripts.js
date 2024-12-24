// Example list of terms for "Word of the Day" feature
const wordsOfTheDay = [
  { word: "Af/Asf", definition: "Used to emphasize something. E.g., 'I'm tired af'." },
  { word: "ASL", definition: "Short for 'Age, Sex, Location'. Often used in online chats." },
  { word: "Aura", definition: "The vibe or energy a person gives off, usually a positive or negative feeling." },
  { word: "Based", definition: "Someone or something that's confident, unbothered, or authentic." },
  { word: "Basic", definition: "Describes someone or something that’s overly mainstream or predictable." },
  { word: "BDE", definition: "A vibe of confidence without being arrogant." },
  { word: "Bestie", definition: "A close, trusted friend." },
  { word: "Bet", definition: "Used to agree with something or as a challenge. E.g., 'Bet, I’ll do it.'" },
  { word: "BFFR", definition: "Best Friend For Real. An emphasis on true friendship." },
  { word: "Big Yikes", definition: "An expression of surprise or discomfort, often in response to something awkward." },
  { word: "BBL", definition: "Brazilian Butt Lift, a cosmetic surgery, or an abbreviation for 'Be Back Later'." },
  { word: "Blud", definition: "A term for a friend or mate, commonly used in British slang." },
  { word: "Boujee", definition: "Someone who is high-class, materialistic, or has expensive tastes." },
  { word: "Bop", definition: "A catchy or good song." },
  { word: "Brainrot", definition: "The feeling of being completely consumed by something, often a media obsession." },
  { word: "Bruh", definition: "An exclamation used to express disbelief or frustration." },
  { word: "Bussin'", definition: "Used to describe something that’s really good, especially food." },
  { word: "Cap", definition: "Lying or exaggerating. 'No cap' means 'no lie'." },
  { word: "Caught in 4K", definition: "Being caught doing something wrong or embarrassing, often recorded." },
  { word: "Clapback", definition: "A quick, clever response, often to an insult." },
  { word: "Cook", definition: "To perform well or dominate in a certain activity." },
  { word: "Dab", definition: "A dance move where you drop your head into the bend of one arm while raising the other." },
  { word: "Dank", definition: "Describes something of high quality, often in reference to memes or weed." },
  { word: "Dead/Ded", definition: "Used when something is so funny or surprising that it’s overwhelming. 'I’m dead'." },
  { word: "Delusionship", definition: "A fake or imaginary relationship, usually an over-idealized one." },
  { word: "Dogs", definition: "A term of endearment or reference to people in a group, often used in a friendly way." },
  { word: "Drip", definition: "A term for stylish, fashionable clothing or accessories." },
  { word: "Era", definition: "A period in time defined by a specific vibe or trend." },
  { word: "Face Card", definition: "Refers to a person’s attractiveness or how recognizable they are." },
  { word: "Failure Management", definition: "How someone deals with failure or setbacks." },
  { word: "Fire", definition: "Something that is really good or impressive." },
  { word: "Fit/Fit Check", definition: "A slang term for outfit, and the practice of showcasing one's style." },
  { word: "Finna", definition: "A variation of ‘fixing to,’ meaning ‘about to.’" },
  { word: "Flop", definition: "When something fails or underperforms." },
  { word: "Gagged", definition: "To be shocked or impressed, often in a theatrical sense." },
  { word: "Ghost", definition: "To abruptly cut off communication with someone without explanation." },
  { word: "Girlboss", definition: "A woman who is confident, successful, and empowered in a typically masculine space." },
  { word: "Glaze", definition: "To overly compliment or adore someone, often in a superficial or exaggerated way." },
  { word: "Glizzy", definition: "A slang term for a hot dog." },
  { word: "Glow-up", definition: "A dramatic improvement in someone’s appearance or life, usually over time." },
  { word: "GOAT", definition: "Greatest of All Time, often used to describe someone who is exceptional." },
  { word: "Gooning", definition: "A state of being extremely focused or obsessed, often used in a meme context." },
  { word: "Gucci", definition: "Something that is good, cool, or high quality." },
  { word: "Hit Different", definition: "When something feels special or uniquely impactful." },
  { word: "Huzz", definition: "An expression of excitement or approval." },
  { word: "Ick", definition: "A feeling of disgust or repulsion, often toward a person or their behavior." },
  { word: "IJBOL", definition: "I Just Burst Out Laughing. Used when something is hilariously funny." },
  { word: "I Oop", definition: "An expression used after an awkward or embarrassing moment, often in response to a mistake." },
  { word: "iPad Kid", definition: "A kid who is obsessed with screens or technology, often at the expense of social skills." },
  { word: "It's Giving", definition: "Used to describe a vibe or aesthetic, e.g., 'It’s giving main character energy.'" },
  { word: "Iykyk", definition: "If you know, you know. Used to imply that something is understood only by those familiar with it." },
  { word: "Jit", definition: "A term for a young person or someone acting immature." },
  { word: "Karen", definition: "A pejorative term for an entitled, often rude, middle-aged woman." },
  { word: "Lit", definition: "Used to describe something exciting, fun, or energetic." },
  { word: "Looksmaxxing", definition: "The act of improving one’s physical appearance, often through cosmetic procedures." },
  { word: "Living Rent-Free", definition: "When something (like a thought or idea) dominates your mind, often in a negative way." },
  { word: "Main Character", definition: "The person who stands out in a situation, often with a sense of self-importance." },
  { word: "Mew", definition: "A sound that denotes excitement or interest, usually in response to something cute." },
  { word: "Mid", definition: "Something that’s average or unimpressive." },
  { word: "Moot/Moots", definition: "Refers to a topic that’s no longer relevant or has no real impact." },
  { word: "Mogging", definition: "To outdo someone or show superiority in a particular situation." },
  { word: "Netflix and Chill", definition: "A euphemism for casual sex, though originally referring to watching Netflix together." },
  { word: "NPC", definition: "Non-playable character. Used to describe someone who lacks original thought or personality." },
  { word: "Nyaa", definition: "The sound a cat makes, often used humorously or as part of an anime reference." },
  { word: "No Cap", definition: "No lie, the truth. Used to emphasize honesty." },
  { word: "Ohio", definition: "A meme term that implies a weird or chaotic place, often referring to bizarre internet phenomena." },
  { word: "OK Boomer", definition: "A dismissive response to someone from an older generation, implying they are out of touch." },
  { word: "Oof", definition: "An expression of sympathy or a response to something awkward or painful." },
  { word: "Oomf", definition: "One of my followers. Used on social media to refer to someone else." },
  { word: "Opp", definition: "An enemy or rival, usually in reference to someone in a conflict." },
  { word: "Out of Pocket", definition: "Behaving in an inappropriate or unexpected manner." },
  { word: "Owned", definition: "To be defeated or outsmarted, often used in internet culture." },
  { word: "Periodt", definition: "An emphasized version of 'period', used to end a statement definitively." },
  { word: "Pick-Me", definition: "A person (usually a woman) who tries too hard to gain the approval of others, often at the expense of self-respect." },
  { word: "Pluh", definition: "A term of approval or excitement, often used in a humorous context." },
  { word: "Pookie", definition: "A term of endearment, like 'baby' or 'sweetheart.'" },
  { word: "Queen", definition: "A term used to describe someone who is empowered, confident, and deserving of respect." },
  { word: "Rank", definition: "To describe something that is unpleasant or of poor quality." },
  { word: "Ratio", definition: "When a reply to a post gets more likes than the original post, indicating the original post is unpopular." },
  { word: "Red Flag", definition: "An indicator of something being wrong or problematic." },
  { word: "Rizz", definition: "Short for charisma, specifically in flirting or attracting others." },
  { word: "Roman Empire", definition: "A meme that refers to how often men think about the Roman Empire." },
  { word: "Salty", definition: "Feeling irritated, upset, or bitter." },
  { word: "Secure the Bag", definition: "To make money or achieve success, especially in a lucrative or strategic way." },
  { word: "Sheesh", definition: "An expression of disbelief or admiration, often in response to something impressive." },
  { word: "Shook", definition: "Being extremely surprised or shaken by something." },
  { word: "Sigma", definition: "A man who is independent, self-sufficient, and doesn’t conform to traditional social expectations." },
  { word: "Simp", definition: "Someone who is overly attentive or submissive to someone they are attracted to, often at their own expense." },
  { word: "Situationship", definition: "A romantic relationship without clear definition or commitment." },
  { word: "Skibidi", definition: "A viral meme or dance move, often associated with a catchy song." },
  { word: "Sksksk", definition: "An expression of excitement, often used by VSCO girls or in a joking context." },
  { word: "Slaps", definition: "Used to describe something that is really good, especially music." },
  { word: "Slay", definition: "To do something exceptionally well, often with confidence and style." },
  { word: "Snatched", definition: "Used to describe someone’s appearance when they look flawless or well put together." },
  { word: "Stan", definition: "To obsessively support or be a fan of someone or something." },
  { word: "Sus", definition: "Short for suspicious, used to describe something or someone that feels shady or untrustworthy." },
  { word: "Sussy Baka", definition: "A playful way to call someone suspicious, often used in gaming or anime communities." },
  { word: "Skill Issue", definition: "When something goes wrong and it’s blamed on lack of skill, often used humorously." },
  { word: "Tea", definition: "Gossip or drama, usually involving juicy details." },
  { word: "Touch Grass", definition: "A suggestion to step outside, take a break, and stop obsessing over something online." },
  { word: "Tweaking", definition: "Being overly emotional or reacting in an exaggerated way to something." },
  { word: "Unalive", definition: "A euphemism for dying or death, often used on social media to avoid censorship." },
  { word: "Understood the Assignment", definition: "To perfectly execute a task or deliver exactly what was expected." },
  { word: "UwU", definition: "An emoticon representing a cute face, often used in a sweet or affectionate way." },
  { word: "Valid", definition: "Something that’s acceptable, reasonable, or worthy of respect." },
  { word: "Vibe Check", definition: "An assessment of the mood or atmosphere of a situation or person." },
  { word: "VSCO Girl", definition: "A popular aesthetic associated with wearing oversized shirts, scrunchies, and using environmentally-friendly products." },
  { word: "Wig", definition: "Used to express shock, excitement, or admiration. 'Wig snatched' means to be impressed." },
  { word: "Who Is This Diva?", definition: "A playful way to comment on someone’s dramatic or attention-grabbing behavior." },
  { word: "Yap", definition: "To talk excessively or annoyingly." },
  { word: "Yeet", definition: "To throw something with force, often used humorously." }
];

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

