const seekBar = document.querySelector(".value")
const artisName = document.querySelector(".top-text .artist-Name")
const songName = document.querySelector(".songName")
const forwardBtn = document.querySelector(".forward")
const reverseBtn = document.querySelector(".backward")
const playBtn = document.querySelector(".play-pause")
const currentTime = document.querySelector(".current-time")
const totalTime = document.querySelector(".songduration")
const music = document.querySelector(".audio")


playBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    if(playBtn.classList.contains('add')){
        music.pause();
    }else{
        music.play();
    }
    playBtn.classList.toggle("add")
})

const setMusic = (i) =>{
    seekBar.value= 0;
    let song = songs[i];
    console.log(i)
    currentMusic = i;   

    music.src = song.path;
    songName.innerHTML = song.name;
    artisName.innerHTML = song.artist;


    currentTime.innerHTML = '00:00';
    setTimeout(()=>{
        seekBar.max = music.duration;
        console.log( music.duration)

        totalTime.innerHTML = formatTime(music.duration);
        
    },300)

    
}

setMusic(0);

const formatTime = (time) =>{
    let min = Math.floor(time / 60)
    if(min > 60 ){
        min = `0${min}`
    }
    let sec = Math.floor(time % 60)
        if(sec > 60){
            sec = `0${sec}`
        }

        return `${min} : ${sec}`
    } 


    setInterval(()=>{
        seekBar.value = music.currentTime;
        currentTime.innerHTML = formatTime(music.currentTime);
    },500)
 

    seekBar.addEventListener("change", (e)=>{
        music.currentTime = seekBar.value;
    })

    forwardBtn.addEventListener("click",(e)=>{
        
        if(currentMusic >= songs.length - 1){
            currentMusic=0 
        }else{
            currentMusic++
        }
        
        setMusic(currentMusic)
        playBtn.click(); 
        
    })

    reverseBtn.addEventListener("click",(e)=>{
        if(currentMusic <= 0){
            currentMusic=songs.length -1 ;
        }else{
            currentMusic--
        }
        setMusic(currentMusic)
        playBtn.click();
       
    })