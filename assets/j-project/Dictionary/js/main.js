 const url = "https://api.dictionaryapi.dev/api/v2/entries/en/"
 const sound = document.getElementById("sound");
 const searchbtn = document.querySelector(".search-btn")
 const result = document.querySelector(".output")

 searchbtn.addEventListener("click",(e)=>{
       e.preventDefault();
       const inputTxt = document.getElementById("box").value;
       console.log(inputTxt);
       fetch(`${url} ${inputTxt}`)
       .then((Response)=> Response.json())
       .then((data) => {console.log(data)
              result.innerHTML = ` 
              <div class="words">
              <h5>${inputTxt}</h5>
              <button onclick="playSound()" id="sound-btn"><i class="fa-solid fa-volume-high"></i></button>
              </div>
              <div class="ex-words">
              <p class="pos">${data[0].meanings[0].partOfSpeech}</p>
              <p>/${data[0].phonetic}/</p>
              </div>

              <div class="wordsoutput">
               <p class="wordsmeaning">${data[0].meanings[0].definitions[0].definition}</p>
      
               <p class="wordsous">${data[0].meanings[0].definitions[0].example || "" }</p>
              </div>
               `  
              sound.setAttribute("src", `${data[0].phonetics[0].audio}`);
       })

       .catch(()=>{

            result.innerHTML = `<h4 class="error">coudn't find the word</h4>`
       })
       

 })
 function playSound() {
      sound.play();
  }