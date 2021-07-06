

//  Câu 1

alert("tính diện tích tam giác có cạnh là a,b,c");
let a =Number(prompt('nhập giá trị a: '));
let b =Number(prompt('nhập giá trị b: '));
let c =Number(prompt('nhập giá trị c: '));

function DTTG(a , b,c){
    
    let p=(a+b+c)/2;
    let s = Math.sqrt (p * (p - a) * (p - b) * (p - c));
    console.log("Diện tích tam giác S =" +s);
    alert(" diện tích tam giác :" +s);
    
};
DTTG(a,b,c);

// Câu 2

alert("Chuyển đổi nhiệt độ từ C -> F");
let C =Number(prompt('Nhập nhiệt độ C : '));
console.log("Nhiệt độ F = "+((1.8*C)+32) );
alert("Nhiệt độ F = " +((1.8*C)+32) );

alert("Chuyển đổi nhiệt độ từ F -> C");
let F =Number(prompt('Nhập nhiệt độ F : '));
console.log("Nhiệt độ C = "+(F-32)/1.8 );
alert("Nhiệt độ C = "+(F-32)/1.8 );


// câu 3

alert("Chuyển đổi số thành giờ và phút ");
let so =Number(prompt('nhập số: '));

function abc(so){
    if(so<=60){
        console.log(so+"phut");
    }
    else {
        if(so<1440)
        {
        let h = Math.floor(so/60);
        let p = so%60;
        console.log( h +"giờ "+ p + "phút");}
        else{
            let n =so/(24*60);
            let h = Math.floor(so/60);
            let p = so%60;
        console.log( h +"giờ "+ p + "phút");
        }
        
    }
};
abc(so);

//câu 4

alert("Chuyển đổi đơn vị từ km -> m,dm,mm.");
let km =Number(prompt('nhập số km: '));
function ddv(km){
    console.log(km*1000+ "m;"+km*10000+"dm;"+km*1000000+"mm" );
    alert(km*1000+ "m;"+km*10000+"dm;"+km*1000000+"mm" );
}
ddv(km);

//câu 5

alert("kiểm tra số");
let kt =Number(prompt('nhập số: '));

(kt>20&&kt<40) && console.log('số ' +kt+' bạn đã nhập có nằm trong khoảng từ 20 ->40.');
(kt>20&&kt<40) || console.log('số ' +kt+' bạn đã nhập không nằm trong khoảng từ 20 ->40.');
