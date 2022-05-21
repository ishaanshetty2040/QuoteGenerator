let apiQuotes = [];

//Show new Quotes
function newQuote() {
    //Pick a random quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote);
}

//Get quotes from API
async function getQuote() {
    /*  const proxyUrl = 'https://cors-anywhere.herokuapp.com/'; */
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

//On load
getQuote();