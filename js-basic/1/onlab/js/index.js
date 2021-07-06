let n = Number(prompt('nhập giá trị n: '));

function getFibonacci(n) {
    // return value
    let i;
    let fib = []; 
    
    fib[0] = 0;
    fib[1] = 1;
    for (i = 2; i <= n; i++) {
     
      fib[i] = fib[i - 2] + fib[i - 1];
      
    }
    alert(fib[i]) ;

};


