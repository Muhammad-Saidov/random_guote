const quotes = [
      "The only limit to our realization of tomorrow is our doubts of today.",
      "The future belongs to those who believe in the beauty of their dreams.",
      "Do not wait to strike till the iron is hot, but make it hot by striking.",
      "Success usually comes to those who are too busy to be looking for it.",
      "You miss 100% of the shots you don't take.",
      "The best way to predict the future is to create it.",
      "It does not matter how slowly you go as long as you do not stop.",
      "The only way to do great work is to love what you do.",
      "Success is not the key to happiness. Happiness is the key to success.",
      "If you love what you are doing, you will be successful.",
    ];

const usedIndexes = new Set();
const quoteElement = document.getElementById("quote");
function qeneratorQuote() {
    if (usedIndexes.size === quotes.length) {
        usedIndexes.clear()
    }
    while (true) {
        const randomIdx = Math.floor(Math.random() * quotes.length);
        if (usedIndexes.has(randomIdx))continue 

        const quote = quotes[randomIdx];
        quoteElement.innerHTML = quote;
        usedIndexes.add(randomIdx);
        break;
    }
}