// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
// scroll
let sections = document.querySelectorAll('section');
let navLink = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop -100;
      let height= sec.offsetHeight;
      let id = sec.getAttribute('id');
// active navbar
      if(top >= offset && top < offset + height){
        navLink.forEach(links => {
            links.classList.remove('active')
            document.querySelector('header nav a[href*=' + id +']').classList.add('active');
        });
// active anination on scroll
sec.classList.add('show-animate');



      }

      else{
         sec.classList.remove('show-animate');
      }
    });


   let header = document.querySelector('header');
   header.classList.toggle('sticky', window.scrollY > 100 )

// remove taggl icon

   menuIcon.classList.remove('bx-x');
   navbar.classList.remove('active');
};

// change color

const randColor = () => {
   return Math.floor(Math.random() * 256);
 }
 
 const button = document.querySelector('button');
 button.addEventListener('click', colorChange);

 const ps = document.querySelectorAll('p');
  ps.forEach(p => {
  p.addEventListener('click', colorChange);
});
 
 function colorChange() {
   this.style.backgroundColor = `rgb(${randColor()}, ${randColor()}, ${randColor()})`;
   this.style.color = `rgb(${randColor()}, ${randColor()}, ${randColor()})`;
 }

