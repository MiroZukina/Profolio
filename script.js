// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
// scroll
 let section = document.querySelectorAll('section');
 let navLink = document.querySelectorAll('header nav a');


window.onscroll = () => {
   section.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeihgt;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height){
       // active navbar links
       navLink.forEach(links => {
             links.classList.remove('active');
             document.querySelector('header nav a[herf*=' + id +']').classList.add('active');
       });
    }

   } );


    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100 )

// remove tsggle icon

   // menuIcon.classList.remove('bx-x');
   // navbar.classList.remove('active');
}