const hour = document.querySelector(".hours");
const minute = document.querySelector(".minutes");
const sec = document.querySelector(".seconds");
const startBtn = document.querySelector(".startBtn");
const recordBtn = document.querySelector(".recordBtn");
const stopBtn = document.querySelector(".stopBtn");
const record = document.querySelector(".record");
const reset = document.querySelector(".reset");



let  stopwatch;
let hours = 0,
    minutes = 0,
    seconds = 0;

startBtn.addEventListener("click", () => {
    
  

  stopwatch = setInterval(() => {
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
    
    if (seconds <= 9) sec.innerText = "0" + seconds;
    else sec.innerText = seconds;
    if (minutes <= 9) minute.innerText = "0" + minutes + " : ";
    else minute.innerText = minutes + " : ";
    if (hours <= 9) hour.innerText = "0" + hours + " : "; 
    else hour.innerText = hours + " : ";
  }, 1000);
});
recordBtn.addEventListener("click", () => {
    const lap = document.createElement("div");
    lap.innerText = hours + " : " + minutes + " : " + seconds;
    record.appendChild(lap);
  });

stopBtn.addEventListener("click", () => {
    
  
    clearInterval(stopwatch);
  
    
  });

reset.addEventListener("click", () => {
    
  
    clearInterval(stopwatch);
  
    hour.innerText = "00 : ";
    minute.innerText = "00 : ";
    sec.innerText = "00";
  
    hours = 0;
    minutes = 0;
    seconds = 0;
  
    record.innerHTML = "";
  });