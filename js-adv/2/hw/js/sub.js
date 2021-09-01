
// $(function(){
//     let btn = $("button");
//     let div = $("div");
//     let body = $("body");
    
//     function randomHex() {
//         let hex = "#";
    
//         for (let i = 0; i < 6; i++) {
//             let x = Math.floor(Math.random() * 16).toString(16);
    
//             hex += x;
//         }
    
//         return hex;
//     }
    
//     function changeColor() {
//         let c1 = randomHex();
//         let c2 = randomHex();
    
//         div.html(`
//             background-image: linear-gradient(to right,
//                 <span style="color: ${c1}">${c1}</span>,
//                 <span style="color: ${c2}">${c2}</span>)`);
    
//         body.css({
//             backgroundImage: `linear-gradient(to right, ${c1}, ${c2})`,
//         });
//     }
    
//     changeColor();
    
//     btn.on("click", changeColor);
//     })

$(function(){
    function ramdomColor() {
        let hex = "#";
        for (let i = 0; i < 6; i++) {
            let x = Math.floor(Math.random() * 16).toString(16);
            hex += x;
        }
        return hex;
    };
    function ramdomNum() {
        let id = Math.floor(Math.random() * 50);
        return id;
    };
    
    function change() {
        let c1 = ramdomColor();
        let c2 = ramdomColor();
        let c3 = ramdomColor();
        let c4 = ramdomColor();
        let c5 = ramdomColor();
        let c6 = ramdomColor();
        let c7 = ramdomColor();
        let c8 = ramdomColor();
      
    
        let rdnum1 = ramdomNum();
        let rdnum2 = ramdomNum();
        add = rdnum1 - rdnum2;
    
        
        const question = $(".question");
    
        $("<div></div>")
            .appendTo(question)
            .addClass("num1")
            .css({ color: c1 })
            .html(rdnum1);
    
        $("<div></div>")
            .appendTo(question)
            .addClass("num1")
            .html("-")
            .css({ color: c2 });
        
        $("<div></div>")
            .appendTo(question)
            .addClass("num2")
            .css({ color: c3 })
            .html(rdnum2);
       
        $("<div></div>")
            .appendTo(question)
            .addClass("equal")
            .css({ color: c4 })
            .html("=");
    
        
        $("<div></div>")
            .appendTo(question)
            .addClass("ques")
            .css({ color: c5 })
            .html("?");
        
        $("<li></li>")
            .appendTo(".answer-item")
            .addClass("answer1")
            .css({ color: c6 })
            .html(add);
        
        $("<li></li>")
            .appendTo(".answer-item")
            .addClass("answer2")
            .css({ color: c7 })
            .html(add + 5);
        
        $("<li></li>")
            .appendTo(".answer-item")
            .addClass("answer3")
            .css({ color: c8 })
            .html(add - 5);
        
    
    };
    let ul = $("ul")
    for (let i = ul.children.length; i >= 0; i--) {
        ul.append(ul.children[Math.random() * i | 0]);
        
    };
    
    $(function() {
       
        $(".answer1").on("click", function() {
            $(".ques").html(add);
            $(".result-options").text("bạn đã chọn đúng");
            setTimeout(() => {
                $(".result-options").html("");
                location.reload();
            }, 1000);
        })
    
        $(".answer2").on("click", function() {
            $(".result-options").text("bạn đã chọn sai");
            setTimeout(() => {
                $(".result-options").html("");
              }, 1000);
        })
    
        $(".answer3").on("click", function() {
            $(".result-options").text("bạn đã chọn sai");
            setTimeout(() => {
                $(".result-options").html("");
              }, 1000);
        })
    })
    change();
    })
    