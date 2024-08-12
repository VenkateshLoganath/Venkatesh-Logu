 const popup = document.querySelector('.container');
 const close = document.querySelector('.btn');

 window.onload = function(){
    setTimeout(function(){
        popup.classList.add('active');
    },2000)
 }

 close.onclick = () =>{
    popup.classList.remove('active');
 }