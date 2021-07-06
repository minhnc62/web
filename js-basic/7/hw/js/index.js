let arr = [-2, -5, -6, -10];

function sumAvg(arr){
    let sum = 0;
    for(let i =0; i<= arr.length; i++){
        sum+= arr[i];
    }
    return sum/arr.length;
}
console.log(sumAvg(arr));

function findMax(arr){
    let max = arr[0];
    for (let i = 1; i < arr.length; i++){
        if (arr[i] >= max)
        {
            max = arr[i];
        }
    }
    return max;

}
console.log(findMax(arr));

function fibonacci(n){
    let A = [0, 1];
    
    for( let i = 3; i<= n; i++){
    
    A.push(c);
    }
    
    console.log(A);
    
   
}
console.log(fibonacci(11));


