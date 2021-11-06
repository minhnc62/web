

let newTodo = document.querySelector(".new-todo");
let input = document.querySelector(".todo-input");


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
  input.focus();
});

document.querySelector(".btn-cancel").addEventListener("click", function () {
  newTodo.style.display = "";
  input.value = "";
});

let todoApi = 'http://localhost:3000/todos';

function start(){
    gettodo(rendertodo);
    createtodo();
    
    
}
start();

function gettodo(callback){
    
    fetch(todoApi)
        .then(function(response){
            return response.json();
        })
        .then(callback);
        
}

function rendertodo(todos){
    // let doingList = document.querySelector(".todo-list");
    // let htmls = todos.map(function(todo){

    //     return `
    //         <li class = "todo-item todo-item-${todo.id}">
    //         <i  class="bi bi-circle todo-icon"></i> ${todo.title}
    //         <button class="btn-clear" >
    //             <i onclick = "deletetodo(${todo.id})" class="bi bi-trash-fill"></i>
    //         </li>

    //     `;
        
    // });
    // doingList.innerHTML = htmls.join("");
    
    $(".doing .todo-list").append(
        todos.map((todo) => $(`<li class = "todo-item todo-item-${todo.id}">
                                    <i  class="bi bi-circle todo-icon"></i> ${todo.title}
                                <button class="btn-clear" >
                                    <i onclick = "deletetodo(${todo.id})" class="bi bi-trash-fill"></i>
                                </li>`))
    );

    // $(".completed .todo-list").append(
    //     todos.map((todo) => $(`<li class = "todo-item todo-item-${todo.id}">
    //                                 <i  class="bi bi-check2 todo-icon"></i> ${todo.title}
    //                             <button class="btn-clear" >
                                    
    //                             </li>`))
    // );
    
    
//     let li = document.createElement("li");
//     li.className = "todo-item ";
//           li.innerHTML =  `
//           <i class="bi bi-circle"></i> ${todo.title}
//          <button class="btn-clear" >
//              <i onclick = "deletetodo(${todo.id})" class="bi bi-trash-fill"></i>
//           `;
//     return li;
    
// });
// doingList.append(...htmls);
    
   
}



function createtodo(){
    
    document.forms.new.addEventListener("submit", function (ev,callback) {
          ev.preventDefault();
          
          let todo = {
                      title: input.value.trim(),
                      completed: false,
                      
                  };
             fetch(todoApi,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(todo),
            }).then(function(response){
                response.json();
            })
            .then(callback)
            .then(()=>{
                newTodo.style.display = "";
                input.value = "";
                
            });
           
            gettodo(rendertodo);
            
        });
        

}

function deletetodo(id){
    fetch(todoApi + '/' + id,{
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        
    })
    .then(() =>{
       let todoitem =  document.querySelector('.todo-item-' + id);
       if(todoitem)
       {
           todoitem.remove();
       }
    });
    //gettodo(rendertodo);
    
}



