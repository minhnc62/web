let hour = document.querySelector(".hour");
let min = document.querySelector(".min");
let sec = document.querySelector(".sec");
let btn = document.querySelector(".btn-start");
let moretime = document.querySelector(".btn-warning");
let forms = document.querySelector(".forms");
let music = document.querySelector(".music");


document.querySelectorAll(".time").forEach((el) => {
    el.addEventListener("keypress", (ev) => {
        ev.preventDefault();
        let key = Number(ev.key);
        let value = Number(el.value + key);

        if (el.classList.contains("hour")) {
            if (value > 0 && value < 24) el.value = value;
        } else {
            if (value > 0 && value < 60) el.value = value;
        }
    });
});

btn.addEventListener("click", (ev) => {
    let h = Number(hour.value);
    let m = Number(min.value);
    let s = Number(sec.value);
    
    hour.disabled = min.disabled = sec.disabled = true;

    let total = h * 60 * 60 + m * 60 + s;

    if (total <= 0) return;

    let timer = setInterval(() => {
        total--;

        s = total % 60;
        m = ((total - s) / 60) % 60;
        h = Math.floor(total / 3600);

        if (total <= 0) {
            
            clearInterval(timer);
            
            new Audio("./ring.mp3").play();
            
            
            
        }
        
        hour.value = String(h).padStart(2, "0");
        min.value = String(m).padStart(2, "0");
        sec.value = String(s).padStart(2, "0");
    }, 1000);
});

moretime.addEventListener("click",(ev) =>{
    
    let m = 5;
    let s = 0;
    let totals = m * 60 + s;
    let timers = setInterval(() =>{
        totals--;
        s = totals % 60;
        m = ((totals - s) / 60) % 60;
       
        if(totals <=0){
            clearInterval(timers);
            new Audio("./ring.mp3").play();
        }
            min.value = String(m).padStart(2, "0");
            sec.value = String(s).padStart(2, "0");
    },1000);

});


function initAudio(){
    let audio, dir, ext;
    dir = "./";
    ext = ".mp3";
    // Audio Object
    audio = new Audio();
    
    // Event Handling
    
    forms.addEventListener("change", changeTrack);
    // Functions
    function changeTrack(event){
        
        audio.src = dir+event.target.value+ext;
        audio.play();
    }
}
window.addEventListener("load", initAudio);
