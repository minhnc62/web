
alert(" tam giác có cạnh là a,b,c");
let a =Number(prompt('nhập giá trị a: '));
let b =Number(prompt('nhập giá trị b: '));
let c =Number(prompt('nhập giá trị c: '));

((a+b>c)||(a+c>b)||(b+c>a)) ? console.log("["+a+b+c+"]"+" là một tam giác hợp lệ")
:console.log("["+a+b+c+"]"+" là một tam giác không hợp lệ");


alert(" nhập số ");
let A =Number(prompt('nhập giá trị A: '));
let B =Number(prompt('nhập giá trị B: '));
let C =Number(prompt('nhập giá trị C: '));

if(A<B && B<C){
    console.log("["+A+B+C+"]"+" là dãy tăng dần");
}else{
    if(A>B && B>C){
        console.log("["+A+B+C+"]"+" là dãy giảm dần dần");
    }
    console.log("["+A+B+C+"]"+" là dãy không hợp lệ");
}