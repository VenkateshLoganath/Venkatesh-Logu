const userInput = document.querySelector(".text-content input")
const userBtn = document.querySelector(".text-content button");
const todoList = document.querySelector(".class-list");
const clearBtn = document.querySelector(".footer button");

userInput.onkeyup = () =>{
    let inputValue = userInput.value;
    
    if(inputValue.trim() != 0){
        userBtn.classList.add("active");
    }else{
        userBtn.classList.remove("active");    
    }


}

showTask()

userBtn.onclick = () =>{
    let inputValue = userInput.value;
    let getLocalStorage = localStorage.getItem("New ToDo");

    if(getLocalStorage == null){
        listArr = [];
    }else{
        listArr = JSON.parse(getLocalStorage);
    }
    listArr.push(inputValue)

    localStorage.setItem("New ToDo", JSON.stringify(listArr))
    showTask()
    userBtn.classList.remove("active");    
    
    

}

function showTask(){
    let inputValue = userInput.value;
    let getLocalStorage = localStorage.getItem("New ToDo");

    if(getLocalStorage == null){
        listArr = [];
    }else{
        listArr = JSON.parse(getLocalStorage);
    }

    let textlength = document.querySelector(".pendinglist")
    textlength.textContent = listArr.length;
    let li = "";
    if(listArr.length > 0){
        clearBtn.classList.add("active")
    }else{
        clearBtn.classList.remove("active")
    }
    listArr.forEach((element,index) => {
        li += `<li >${element}<span onclick="deleteTask(${index})"><i class="fa fa-trash"></i></span></li>`
    });

    todoList.innerHTML = li ;
    userInput.value="";
}

function deleteTask(index){
    let getLocalStorage = localStorage.getItem("New ToDo");
    listArr = JSON.parse(getLocalStorage);
    listArr.splice(index, 1)
    localStorage.setItem("New ToDo", JSON.stringify(listArr))
    showTask()

}

clearBtn.onclick = () =>{
    listArr = [];
    localStorage.setItem("New ToDo", JSON.stringify(listArr))
    showTask()
}