

//  let longestWord = (str) => {
//     let arr = str.split(""); 
//     res = arr.sort().join(""); 
//     return res; 
//   }

//   let findMaxLength = (str) =>
//     str.split("").sort().join("");

// console.log(findMaxLength ("HELLO WORLD abc"));

function request({method, uri,onerror, onload, body}){//nhận tham số là một obj đẻ tùy chỉnh thao tác ajax

  let xhr = new XMLHttpRequest();

  xhr.responseType = "json";// khi nhan dc phan hoi,tu dong chuyen thanh dangj json
  //xhr.open ("GET","https://jsonplaceholder.typicode.com/users?_embed=todos");
  xhr.open (method,uri);
  xhr.send(JSON.stringify(body));
  
  xhr.onerror = onerror 
                ?onerror
                :()=> console.log("can not send");

  xhr.onload = () =>{ 
      if(xhr.status >= 200 && xhr.status <300) onload(xhr.response);
      else{
            console.log("error",xhr.response);
          }

}
}
request({
  method : "GET",
  uri: "https://jsonplaceholder.typicode.com/users?_embed=todos",
  onload: (data) =>{
      
        
        let list = data.map(({username, email, phone}) => {
              let tr =  document.createElement("tr");
              tr.innerHTML = `
              
              <td>${username}</td>
              <td>${email}</td>
              <td>${phone}</td>
              `;
                return tr;
              
        });
        document.getElementById("list").append(...list);
      },
       
});



