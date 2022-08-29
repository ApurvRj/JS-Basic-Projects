let apiQuotes= [];
//Show new quote
function newQuote() {
    //Pick a random quote from api quotes array
    const quote=apiQuotes[Math.floor(Math.random()*apiQuotes.length)];
   // const quote=localQuotes[Math.floor(Math.random()*apiQuotes.length)];
    console.log(quote);
}
//GET QUOTES FROM API
async function getQuotes(){
    const apiUrl='https://type.fit/api/quotes';
    try{
        const response = await fetch(apiUrl);
        apiQuotes=await response.json();
        newQuote();
        //console.log(apiQuotes[12]);
    }catch(error){
        //alert(error)
    }
}

getQuotes();