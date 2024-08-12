
const startBtn = document.querySelector("#startBtn")
const endBtn = document.querySelector("#endBtn")
const prevNext = document.querySelectorAll(".prevBtn");
const numbers = document.querySelectorAll(".link");
 
let currentStep = 0;

const updateBtn = () => {
    // If we are at the last step
    if (currentStep === 5) {
      endBtn.disabled = true;
      prevNext[1].disabled = true;
    } else if (currentStep === 0) {
      // If we are at the first step
      startBtn.disabled = true;
      prevNext[0].disabled = true;
    } else {
      endBtn.disabled = false;
      prevNext[1].disabled = false;
      startBtn.disabled = false;
      prevNext[0].disabled = false;
    }
    };



numbers.forEach((number,numIndex) =>{
    number.addEventListener('click',(e)=>{
         
        e.preventDefault();
        currentStep = numIndex;
        document.querySelector('.active').classList.remove('active')
        number.classList.add('active');
        updateBtn()

    })
})

prevNext.forEach(button =>{
    button.addEventListener('click',(e)=>{
        currentStep += e.target.id === "next" ? 1 : -1 ;
       
        numbers.forEach((number,numIndex)=>{
            number.classList.toggle('active',numIndex ===currentStep )
            updateBtn();
        })
        
    })
   
})


startBtn.addEventListener('click',()=>{

    document.querySelector('.active').classList.remove('active');

    numbers[0].classList.add('active')
    currentStep = 0;
    updateBtn()
        endBtn.disabled = false;
        prevNext[1].disabled = false;
})

endBtn.addEventListener('click',()=>{

    document.querySelector('.active').classList.remove('active');

    numbers[5].classList.add('active')
    currentStep = 5;
    updateBtn()
    startBtn.disabled = false;
    prevNext[0].disabled = false;
})


 