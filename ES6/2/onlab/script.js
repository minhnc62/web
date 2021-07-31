function showTime(){
    let date = new Date();
    let h = date.getHours(); 
    let m = date.getMinutes(); 
    let s = date.getSeconds(); 

    let time = h + ":" + m + ":" + s ;
    document.getElementById("MyClock").innerText = time;
 
    setTimeout(showTime, 1000);
    
}

showTime();

// let clock = document.getElementById("MyClock");

// let timer = setInterval(() => {
//     let date = new Date();
//     let hour = date.getHours();
//     let min = date.getMinutes();
//     let sec = date.getSeconds();

//     clock.textContent = `${hour}:${min}:${sec}`;
// });

// let process = () => {
//     return {
//         error: "Lỗi kết nối database",
//         value: null,
//     };
// };

// let async = (callback) => {
//     setTimeout(() => {
//         let { error, value } = process();
//         callback(error, value);
//     }, 3000);
// };

// async((err, value) => {
//     if (err) console.log("Error", err);
//     else console.log("Get data", value);
// });

// let process = (name) => {
//     console.log("Thực hiện công việc:", name);
// };

// let async = (name, callback) => {
//     process(name);

//     setTimeout(() => {
//         callback();
//     }, 3000);
// };

// async("Khách vào", () => {
//     async("Order đồ uống", () => {
//         async("Thanh toán", () => {
//             async("Làm đồ uống", () => {
//                 async("Giao cho khách", () => {
//                     console.log("Cảm ơn, đéo hẹn gặp lại!!!");
//                 });
//             });
//         });
//     });
// });

// function capitalize(param, ms) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (typeof param === "string" || param instanceof String) {
//                 let result = param
//                     .split(" ")
//                     .map(
//                         (word) =>
//                             word[0].toUpperCase() + word.slice(1).toLowerCase()
//                     )
//                     .join(" ");

//                 resolve(result);
//             } else {
//                 reject(new Error(`'${param}' is not a string`));
//             }
//         }, ms);
//     });
// }

// capitalize(123, 3000).then(console.log).catch(console.log);


// let process = (name) => console.log("Thực hiện công việc:", name);

// let promise = new Promise((resolve, reject) => {
//     process("Khách vào");

//     setTimeout(() => {
//         resolve();
//     }, 4000);
// });

// promise
//     .then(() => {
//         process("Order đồ uống");

//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve();
//             }, 4000);
//         });
//     })
//     .then(() => {
//         process("Thanh toán");

//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve();
//             }, 4000);
//         });
//     })
//     .then(() => {
//         process("Đợi làm đồ uống");

//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve();
//             }, 4000);
//         });
//     })
//     .then(() => {
//         process("Giao đồ uống");

//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve();
//             }, 4000);
//         });
//     })
//     .then(() => {
//         process("Đuổi khách");
//     });



// let process = (name) => console.log("Thực hiện công việc:", name);

// async function f(name) {
//     process(name);

//     return new Promise((r) => {
//         setTimeout(() => r(), 5000);
//     });
// }

// await f("Khách vào");
// await f("Order đồ uống");
// await f("Thanh toán");
// await f("Làm đồ uống");
// await f("Giao đồ");
// await f("Đuổi khách");
