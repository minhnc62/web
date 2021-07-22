

let acc = document.getElementsByClassName("accordion");
//từ button 1->5
for(let i = 0; i < acc.length; i++){

    //sự kiện click vào button
    acc[i].addEventListener("click", function(){

        
        let panel = this.nextElementSibling;
        
        // bật tắt display
        if (panel.style.display === "block") {
             panel.style.display = "none";
        } else {
             panel.style.display = "block";
        }

        
    });
    

}

let student ={
    id:2,
    name: minh,
    age: 23,
    email: 'minh@gmail.com'
    }









