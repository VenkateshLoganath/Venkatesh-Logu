const getHour = document.querySelector(".clock-hour")
const getMins = document.querySelector(".clock-min")
const getSec = document.querySelector(".clock-sec")


function setTime(){
    let now = new Date();
    console.log(now)
    let hours = now.getHours();
     
    let hoursdegree = (hours / 12) * 360 + 90

    getHour.style.transform = `rotate(${hoursdegree}deg)`

    let minutes = now.getMinutes();
     
    let mindegree = (minutes / 60) * 360 + 90

    getMins.style.transform = `rotate(${mindegree}deg)`

    let seconds = now.getSeconds();
     
    let secdegree = (seconds / 60) * 360 + 90

    getSec.style.transform = `rotate(${secdegree}deg)`

}


setInterval(setTime ,1000)
setTime()
