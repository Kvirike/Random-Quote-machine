window.onload = init;
        function init(){
            generateQuote()
        }
        function generateQuote(){
            setTimeout(() => {
                let quoteSize = QUOTEBANK.length
                let randomIndex = Math.floor(Math.random() * quoteSize);
                let randomQuoteData = QUOTEBANK[randomIndex]
                let twitterLink = `https://twitter.com/intent/tweet?hashtags=quotes&text=`

                // adding the quote
                let quoteInApiFormat = randomQuoteData.quote.replace(/ /g, "%20");
                twitterLink += quoteInApiFormat
                // adding the author
                let authorInApiFormat = randomQuoteData.author.replace(/ /g, "%20");
                twitterLink += " - " + authorInApiFormat
                
                document.getElementById('tweet-quote').href  = twitterLink
                document.getElementById("text").innerText = randomQuoteData.quote
                document.getElementById("author").innerText = randomQuoteData.author
            }, 600);
        }