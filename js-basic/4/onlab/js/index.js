

// let chuoi= "adgeigen"
// for(let i=0;i<=chuoi.length;i++){
//     console.log(chuoi.charCodeAt(i));
// };


// function abc(minute){
    
//         let h = Math.floor(minute/60);
//         let m = minute%60;
        
//         h = String(h).padStart(2,"0");
//         m = String(m).padStart(2,"0");
        
//         return h+ ":"+m;
// };


// function abc(ms){
    
//     let now =Date.now();
//     let s = Math.floor(now/1000);
//     let m = Math.floor(s/60);
//     let h = Math.floor(minute/60);
//     let month = Math.floor(h/60);
    
//     h = String(h).padStart(2,"0");
//     m = String(m).padStart(2,"0");
    
//     return h+ ":"+m;
// };
let now = new Date();
console.log(
    now.toDateString("vi-VN",{
    day :"numeric",
    month : "long" ,
    year : ""
})
)