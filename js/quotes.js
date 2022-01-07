const quotes = [
    {
        quote:"Have a healthy disregard for the impossible and actually build new solutions.",
        author:"- Larry page -",
    },
    {
        quote:"If you never want to be criticized, for goodness' sake don't do anything new.",
        author:"- Jeff bezos -",
    },
    {
        quote:"Put the customer first. Invent. And be patient.",
        author:"- Jeff Bazos -",
    },
    {
        quote:"Having a big dream is the most important thing.",
        author:"- Masayoshi Son -",
    },
    {
        quote:"You just need to come up with great ideas with passion, with a business plan and the money will chase you.",
        author:"- Masayoshi Son -",
    },
    {
        quote:"If you double the number of experiments you do per year, you're going to double your inventiveness.",
        author:"- Jeff Bezos -",
    },
    {
        quote:"Remembering that you are going to die is the best way to avoid the trap of thinking you have something to lose.",
        author:"- Steve Jobs -",
    },
    {
        quote:"Creativity is just connecting things.",
        author:"- Steve Jobs -",
    },
    {
        quote:"I had a dream of becoming a businessman, becoming an entrepreneur.",
        author:"- Masayoshi Son -",
    },
    {
        quote:"Work like hell. I mean you just have to put in 80 to 100 hour weeks every week.",
        author:"- Elon Musk -",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;