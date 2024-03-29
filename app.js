const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

let apiQuotes = [];

/* Show loading */
/* function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

/* Hide loading */
/* function complete() {
    quoteContainer.hidden = false;
    loader.hidden = true;
} * / */
//Show new Quotes
function newQuote() {
    //Pick a random quote from apiQuotes array
    /* loading(); */
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    //Check if author field is blank and replace it with unknown
    if (!quote.author) {
        authorText.textContent = 'Unknown';
    }
    else {
        authorText.textContent = quote.author;
    }
    //Check quote length to determine styling
    if (quote.text.length > 50) {
        quoteText.classList.add('long-quote');
    }
    else {
        quoteText.classList.remove('long-quote');
    }
    //Set quote, hide loader
    quoteText.textContent = quote.text;
    /* complete(); */
}

//Get quotes from API
async function getQuote() {
    /*  const proxyUrl = 'https://cors-anywhere.herokuapp.com/'; */
    /* loading(); */
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();

    } catch (error) {
        /* getQuote();
        //Catch error here
        console.log('whoops, no quote', error); */
    }
}
//Tweet quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

//Event listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);
//On load
getQuote();