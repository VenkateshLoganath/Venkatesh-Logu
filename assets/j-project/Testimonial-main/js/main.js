


let testItem = document.querySelectorAll('.test-column');
let buttons = document.querySelectorAll('.btn')

var counter = 0;   

function switchTest(currentTest){
    currentTest.classList.add('active');
    var testId = currentTest.getAttribute('attr');

    if(testId > counter){
        testItem[counter].style.animation = 'next1 0.5s ease-in forwards';
        counter = testId;
        testItem[counter].style.animation = 'next2 0.5s ease-in forwards';
    }
    else if(testId == counter ) {return ; }
    else{
        testItem[counter].style.animation = 'prev1 0.5s ease-in forwards';
        counter = testId;
        testItem[counter].style.animation = 'prev2 0.5s ease-in forwards';
    }
    indicators()
}


function indicators(){
    for(i=0;i<buttons.length;i++){
        buttons[i].className = buttons[i].className.replace(' active', '');
    }
    buttons[counter].className += ' active';
}

function slideNext(){
    testItem[counter].style.animation = 'next1 0.5s ease-in forwards';
    if(counter >= testItem.length - 1){
        counter = 0;
    }
    else{
        counter++;
    }
    testItem[counter].style.animation = 'next2 0.5s ease-in forwards';
    indicators();
}
function autoSliding(){
    deleteInterval = setInterval(timer, 3000);
    function timer(){
        slideNext();
        indicators();
    }
}
autoSliding();