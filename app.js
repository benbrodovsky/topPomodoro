const sessionTime = document.querySelector('.sessionTime')
const breakTime = document.querySelector('.breakTime')
const clock = document.querySelector('.clock')
const pausePlayButton = document.querySelector('.pausePlay')
const resetButton = document.querySelector('.reset')

function countdown(time){
    let runningTime = time
    
    let convertedElapsedTime = time * 60000 //conversion from minutes to milliseconds
    const target = new Date().getTime() + convertedElapsedTime
    setInterval(function(){
        let currentTime = new Date().getTime()
        if(currentTime < target){
            console.log(target-currentTime)  //need to convert to minutes
        }
    }, 1000)
    
}


countdown(1)