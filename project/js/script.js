let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
}

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

let showcasedt = document.querySelector('.show-case-dt');
let showcaselaptop = document.querySelector('.show-case-laptop');
let showcasetv = document.querySelector('.show-case-tv');
let showcasephukien = document.querySelector('.show-case-phukien');


document.querySelector('#laptop').onclick = () =>{
    showcaselaptop.classList.toggle('active');
    showcasedt.classList.toggle('active-laptop');
    
    
}
document.querySelector('#tv').onclick = () =>{
    showcasetv.classList.toggle('active');
    showcaselaptop.classList.toggle('active-tv');
    showcasedt.classList.toggle('active-tv');
    
}
document.querySelector('#phukien').onclick = () =>{
    showcasephukien.classList.toggle('active');
    showcasetv.classList.toggle('active-phukien');
    showcaselaptop.classList.toggle('active-phukien');
    showcasedt.classList.toggle('active-phukien');
    
}

$('.list-2').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    
  });




















window.onscroll = () =>{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active')
}




































































































