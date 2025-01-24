const quotes = [
    {
        quote: "Even if I think failure is likely, not trying at all is way more boring.",
        author: "Elon Musk"
    },
    {
        quote: "Just because people don't like you doesn’t mean you’re any less awesome.",
        author: "Taylor Swift"

    },
    {
        quote: "I'm just doing my job. Somehow, I end up making people laugh.",
        author: "Ryan Reynolds"

    },
    {
        quote: "Don’t worry when eating a burger. That moment might just be the happiest in your life.",
        author: "Chris Pratt"

    },
    {
        quote: "I still can't do laundry properly. Not all superheroes are good at everything.",
        author: "Tom Holland"

    },
    {
        quote: "Smile, and good fortune will come; if not, whatever.",
        author: "Park Myung-soo"

    },
    {
        quote: "Instead of showing off, let's learn one more thing.",
        author: "Yoo Jae-suk"

    },
    {
        quote: "Life is too busy to not live it with a smile.",
        author: "Lee Young-ji" 

    },
    {
        quote: "What’s tough now will become something to laugh about later.",
        author: "IU"

    },
    {
        quote: "I like myself just the way I am.",
        author: "Lee Hyori"

    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;