$(function(){
    $(".btn.btn-primary").on("click",function(){
        let kg = Number($("#kg").val());
        let h = Number($("#cao").val());

        if (!isFinite(kg) || !isFinite(h)) { 
            $(".bmi").html("chưa điền một trong hai giá trị");
            return ;
        }
        
        let bmi = kg/(h*h);
        let kq = $(".ketqua");
        
        $(".bmi").html("Your BMI: <b>" + bmi + "</b>");

        if(bmi < 16) kq.text( "Gầy độ 3"); 
        else if(bmi < 17) kq.text( "Gầy độ 2"); 
        else if(bmi < 18.5) kq.text( "Gầy độ 1"); 
        else if(bmi < 25) kq.text( "Bình thường"); 
        else if(bmi < 30) kq.text( "Thừa cân"); 
        else if(bmi < 35) kq.text( "Béo phì độ 1"); 
        else if(bmi < 40) kq.text( "Béo phì độ 2"); 
        else kq.text( "Béo phì độ 3");

        
    })
})


$(function(){
let btn = $("button");
let div = $("div");
let body = $("body");

function randomHex() {
    let hex = "#";

    for (let i = 0; i < 6; i++) {
        let x = Math.floor(Math.random() * 16).toString(16);

        hex += x;
    }

    return hex;
}

function changeColor() {
    let c1 = randomHex();
    let c2 = randomHex();

    div.html(`
        background-image: linear-gradient(to right,
            <span style="color: ${c1}">${c1}</span>,
            <span style="color: ${c2}">${c2}</span>)`);

    body.css({
        backgroundImage: `linear-gradient(to right, ${c1}, ${c2})`,
    });
}

changeColor();

btn.on("click", changeColor);
})