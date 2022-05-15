 //get elements from the dom
 const menbtn = document.getElementById('menu-btn');
 const navbar = document.getElementById('navbar');
 const menu = document.querySelector('.menu');

 //PX offsets when the navbar is active
 const offset = 50;
 //add click event t menu button
 menbtn.addEventListener('click', () =>{
    //Toggle the 'menu-open' class
    menu.classList.toggle('menu-open');
 });
 //add scroll event listener to page
 window.addEventListener('scroll', () => {
     // if the page is scrolled by 50PX or  more
     if (pageYOffset > offset){
        navbar.classList.add('navbar-active')
     } else {
         //deactivate navbar
         navbar.classList.remove('navbar-active')
     }
 });
