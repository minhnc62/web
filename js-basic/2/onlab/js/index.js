

// let user={
//     firstName :prompt('firstName'),
//     age:prompt('tuổi'),
//     add:prompt('Địa Chỉ'),
//     brother:{
//         firstName :prompt('firstName'),
//         age:prompt('tuổi'),
//         add:prompt('Địa Chỉ'),
//     },
// };
let a =Number(prompt('nhập giá trị a: '));
let b =Number(prompt('nhập giá trị b: '));

function operator(a , b){
    console.log(a +"+"+ b +"=" +(a +b ));
    console.log(a +"-"+ b +"=" +(a -b ));
    console.log(a +"/"+ b +"=" +(a /b ));
    console.log(a +"*"+ b +"=" +(a *b ));
    console.log(a +"%"+ b +"=" +(a %b ));


};
operator(a,b);
