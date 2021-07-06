// khai báo hàm
// function sum(a,b)
// {
    
//       let min = a > b ? b : a;
//       let max = a > b ? a : b;
//         let tong =0;
//         for(let i = min;i <=max;i++){
//             tong += i;
//         }
//         return tong;
    
        
// }
// console.log(sum(10,20));
function sum(){
    let sum = 0;
    for(let i = 0;i <= arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}

