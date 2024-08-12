const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('.btn');
const equalBtn = document.querySelector('.button-equal');
const clearBtn = document.querySelector('.button-clear')
const cBtn = document.querySelector('.button-ce')


buttons.forEach((button)=>{
   button.addEventListener('click' , (e)=>{
      e.preventDefault();

      const value = e.target.dataset.num;
      screen.value += value;
   })
})

equalBtn.addEventListener('click',(e)=>{
   if(screen.value === ''){
      screen.value = '';
   }else {
      let answer = eval(screen.value);
      screen.value = answer;
   }
})

cBtn.addEventListener('click', e=>{
   const dVal = screen.value.toString().slice(0,-1)
   screen.value = dVal;
})
clearBtn.onclick = () =>{
   screen.value = '';
}