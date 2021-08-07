let xhr = new XMLHttpRequest();

xhr.open("GET", "https://reqres.in/api/users?page=2");

xhr.send();

xhr.onload = () => {
    let b = JSON.parse(xhr.response);

    let profile = b.data.map(({ first_name, email, avatar }) => {
        let div = document.createElement("div");
        
        div.innerHTML = `

            <p><strong>${first_name}</strong></p>
            <p>${email}</p>
            <img src="${avatar}">
        
        `;

        return div;
    });
    document.querySelector(".profile").append(...profile);
};