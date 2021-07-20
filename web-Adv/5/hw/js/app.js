// CODE EXPLAINED channel

// Chọn các phần tử
let newTodo = document.querySelector(".add-to-do");


const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");


const CHECK = "bi-check-circle";
const UNCHECK = "bi-circle";
const LINE_THROUGH = "lineThrough";


let LIST, id;

// lấy  data từ localstorage
let data = localStorage.getItem("TODO");

// kiểm tra xem dữ liệu có trống không
if(data){
    LIST = JSON.parse(data);
    id = LIST.length; 
    loadList(LIST); // chuyển danh sách đến list
}else{
    // nếu dữ liệu không trống
    LIST = [];
    id = 0;
}

// tải items lên giao diện
function loadList(array){
    array.forEach(function(item){
        addToDo(item.name, item.id, item.done, item.trash);
    });
}





function updateDate() {
    let date = new Date();

    let dateString = date.toLocaleString("vi-VN", {
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric",
    });

    let saperator = dateString.indexOf(",") + 1;

    document.querySelector(".day").textContent = dateString.slice(0, saperator);
    document.querySelector(".date").textContent = dateString.slice(saperator);
}

updateDate();

document.querySelector(".btn-add").addEventListener("click", function () {
    newTodo.style.display = "block";
    Input.focus();
});

document.querySelector(".btn-cancel").addEventListener("click", function () {
    newTodo.style.display = "";
    Input.value = "";
});


function addToDo(toDo, id, done, trash){
    
    if(trash){ return; }
    
    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : "";
    
    const item = `<li class="item">
                    <i class="bi ${DONE} co" job="complete" id="${id}"></i>
                    <p class="text ${LINE}">${toDo}</p>
                    <i class="bi bi-trash-fill de" job="delete" id="${id}"></i>
                  </li>
                `;
    
    const position = "beforeend";
    
    list.insertAdjacentHTML(position, item);
}

// thêm một mục vào danh sách người dùng bằng phím enter
document.addEventListener("keyup",function(even){
    if(event.keyCode == 13){
        const toDo = input.value;
        
        // if the input isn't empty
        if(toDo){
            addToDo(toDo, id, false, false);
            
            LIST.push({
                name : toDo,
                id : id,
                done : false,
                trash : false
            });
            
            // thêm mục vào localstorage (mã này phải được thêm vào nơi cập nhật mảng LIST)
            localStorage.setItem("TODO", JSON.stringify(LIST));
            
            id++;
        }
        input.value = "";
    }
});


// hoàn thành công việc
function completeToDo(element){
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);
    
    LIST[element.id].done = LIST[element.id].done ? false : true;
}

// gỡ bỏ to do
function removeToDo(element){
    element.parentNode.parentNode.removeChild(element.parentNode);
    
    LIST[element.id].trash = true;
}

// target đến items tạo tự động

list.addEventListener("click", function(event){
    const element = event.target; // return the clicked element inside list
    const elementJob = element.attributes.job.value; // complete hoặc delete
    
    if(elementJob == "complete"){
        completeToDo(element);
    }else if(elementJob == "delete"){
        removeToDo(element);
    }
    
    // thêm mục vào localstorage (mã này phải được thêm vào nơi cập nhật mảng LIST)
    localStorage.setItem("TODO", JSON.stringify(LIST));
});


















