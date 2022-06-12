const quotes = [
    {
        quote: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde",
    },
    {
        quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
        author: "Marilyn Monroe",
    },
    {
        quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author: "Albert Einstein",
    },
    { quote: "So many books, so little time.", author: "Frank Zappa" },
    {
        quote: "A room without books is like a body without a soul.",
        author: "Marcus Tullius Cicero",
    },
    {
        quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
        author: "Bernard M. Baruch",
    },
    {
        quote: "You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.",
        author: "William W. Purkey",
    },
    {
        quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        author: "Dr. Seuss",
    },
    {
        quote: "You only live once, but if you do it right, once is enough.",
        author: "Mae West",
    },
    {
        quote: "Be the change that you wish to see in the world.",
        author: "Mahatma Gandhi",
    },
    {
        quote: "In three words I can sum up everything I've learned about life: it goes on.",
        author: "Robert Frost",
    },
    {
        quote: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
        author: "J.K. Rowling",
    },
    {
        quote: "Don’t walk in front of me… I may not followDon’t walk behind me… I may not leadWalk beside me… just be my friend",
        author: "Albert Camus",
    },
    {
        quote: "If you tell the truth, you don't have to remember anything.",
        author: "Mark Twain",
    },
    {
        quote: 'Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .',
        author: "C.S. Lewis",
    },
    {
        quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
        author: "Maya Angelou",
    },
    {
        quote: "A friend is someone who knows all about you and still loves you.",
        author: "Elbert Hubbard",
    },
    {
        quote: "To live is the rarest thing in the world. Most people exist, that is all.",
        author: "Oscar Wilde",
    },
    {
        quote: "Always forgive your enemies; nothing annoys them so much.",
        author: "Oscar Wilde",
    },
    {
        quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
        author: "Mahatma Gandhi",
    },
    {
        quote: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
        author: "Martin Luther King Jr.",
    },
    {
        quote: "We accept the love we think we deserve.",
        author: "Stephen Chbosky",
    },
    {
        quote: "Without music, life would be a mistake.",
        author: "Friedrich Nietzsche",
    },
    {
        quote: "I am so clever that sometimes I don't understand a single word of what I am saying.",
        author: "Oscar Wilde",
    },
    {
        quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        author: "Ralph Waldo Emerson",
    },
    {
        quote: "Here's to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They're not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can't do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do.",
        author: "Rob Siltanen",
    },
    {
        quote: "Insanity is doing the same thing, over and over again, but expecting different results.",
        author: "Narcotics Anonymous",
    },
    {
        quote: "I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when they're right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together.",
        author: "Marilyn Monroe",
    },
    {
        quote: "It is better to be hated for what you are than to be loved for what you are not.",
        author: "Andre Gide",
    },
    {
        quote: "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.",
        author: "H. Jackson Brown Jr.",
    },
    {
        quote: "I never dreamed about success, I worked for it",
        author: "Estee Lauder",
    },
    {
        quote: "Do not try to be original, just try to be good.",
        author: "Paul Rand",
    },
    {
        quote: "Do not be afraid to give up the good to go for the great",
        author: "John D. Rockefeller",
    },
    {
        quote: "If you cannot fly then run. If you cannot run, then walk. And if you cannot walk, then crawl, but whatever you do, you have to keep moving forward.",
        author: "Martin Luther King Jr.",
    },
    {
        quote: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
        author: "Thomas Edison",
    },
    {
        quote: "The fastest way to change yourself is to hang out with people who are already the way you want to be",
        author: "REid Hoffman",
    },
    {
        quote: "Money is like gasoline during a road trip. You do not want to run out of gas on your trip, but you are not doing a tour of gas stations",
        author: "Tim O Reilly",
    },
    {
        quote: "Some people dream of success, while other people get up every morning and make it happen",
        author: "Wayne Huizenga",
    },
    {
        quote: "The only thing worse than starting something and falling.. is not starting something",
        author: "SEth Godin",
    },
    {
        quote: "If you really want to do something, you will find a way. If you do not, you will find an excuse.",
        author: "Jim Rohn",
    },
];

const quote = document.querySelector("#quote a span");
const author = document.querySelector("#quote > span");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
quote.maxlength = "40";
author.innerText = " - " + todaysQuote.author;
