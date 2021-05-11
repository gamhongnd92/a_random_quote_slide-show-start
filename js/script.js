/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
 ***/
var quotes = [
    ["The greatest glory in living lies not in never falling, but in rising every time we fall", "Nelson Mandela"],
    ["The way to get started is to quit talking and begin doing.", "Walt Disney"],
    ["Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.", "Steve Jobs"]

];



/***
 * `getRandomQuote` function
 ***/
function getRandomQuote() {
    var randomNumber = Math.floor(Math.random() * quotes.length);
    var getRandomQuote = quotes[randomNumber];
    return getRandomQuote;

}




/***
 * `printQuote` function
 ***/
function printQuote() {
    var randomQuote = getRandomQuote();
    // var PtoHTML1 = "<p class='source'>" + randomQuote.quote + "<p class='source'>" + randomQuote.source;
    document.getElementById('quote').innerHTML = randomQuote[0];
    document.getElementById('source').innerHTML = randomQuote[1];
}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);