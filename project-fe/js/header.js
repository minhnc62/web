let searchForm = document.querySelector('.search-form');
let searchBtn = document.querySelector('#search-btn')
let shoppingCart = document.querySelector('.shopping-cart');
let navbar = document.querySelector('.navbar');
let menuBtn = document.querySelector('#menu-btn')

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
}

searchBtn.addEventListener('click', ()=>{
    searchBtn.classList.toggle('fa-times');
})



document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
}



document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

menuBtn.addEventListener('click', ()=>{
    menuBtn.classList.toggle('fa-times');
})


window.onscroll = () =>{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    
}
