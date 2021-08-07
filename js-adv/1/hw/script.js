// function request({method, uri,onerror, onload, body}){//nhận tham số là một obj đẻ tùy chỉnh thao tác ajax

//     let xhr = new XMLHttpRequest();
  
//     xhr.responseType = "json";// khi nhan dc phan hoi,tu dong chuyen thanh dangj json
//     //xhr.open ("GET","https://jsonplaceholder.typicode.com/users?_embed=todos");
//     xhr.open (method,uri);
//     xhr.send(JSON.stringify(body));
    
//     xhr.onerror = onerror 
//                   ?onerror
//                   :()=> console.log("can not send");
  
//     xhr.onload = () =>{ 
//         if(xhr.status >= 200 && xhr.status <300) onload(xhr.response);
//         else{
//               console.log("error",xhr.response);
//             }
  
//   }
//   }
//   request({
//     method : "GET",
//     uri: "https://reqres.in/api/users?page=1",
//     onload: (data) =>{
        
          
//           let list = data.map(({id, first_name, email, avatar}) => {
                
//                   return `<div class="post">
//                   <a href="details.html?postID=${id}">
//                         <h3 class="title">${first_name}</h3>
//                         <p class="body">${email}</p>
//                         <img src="${avatar}">
//                   </a>
//               </div>`;
                
//           }).join(" ");
//           document.querySelector(".list-post").innerHTML= list ;
//         },
         
//   });
  //1h.45

//   let user = data.map(({first_name, email, avatar}) => {
//       return `<div>
//       <p><strong>${first_name}</strong></p>
//       <p>${email}</p>
//       <img src="${avatar}">
//       </div>`;
          

let xhr = new XMLHttpRequest();

xhr.open("GET", "https://reqres.in/api/users?page=2");

xhr.send();

xhr.onload = () => {
    let a = JSON.parse(xhr.response);

    let user = a.data.map(({ id,first_name, email, avatar }) => {
        let div = document.createElement("div");

        div.innerHTML = `
        <a href="user.html?dataID=${id}">
            <p><strong>${first_name}</strong></p>
            <p>${email}</p>
            <img src="${avatar}">
        </a>  
        `;

        return div;
    });
    document.querySelector(".user").append(...user);
};