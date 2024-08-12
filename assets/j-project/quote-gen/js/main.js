const quote = document.querySelector(".quote");
const author = document.querySelector(".autor");
const button = document.querySelector(".btn")

 let url = "https://api.quotable.io/random";


 let getQuote = () =>{
        fetch(url)
        .then((data)=>data.json())
        .then((item)=>{
            quote.innerText = item.content;
            author.innerText = item.author;


           console.log(item.content); 
        })
 }

 window.addEventListener('load', getQuote)

 button.addEventListener('click',getQuote)