let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            sec.classList.add('show-animate');
        } else {
            sec.classList.remove('show-animate');
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

const randColor = () => Math.floor(Math.random() * 256);

function changeTheme() {
    const newColor = `rgb(${randColor()}, ${randColor()}, ${randColor()})`;
    document.documentElement.style.setProperty('--main-color', newColor);
}

const themeBtn = document.getElementById('theme-button');
if(themeBtn) themeBtn.addEventListener('click', changeTheme);

const form = document.getElementById('form');
const username = document.getElementById('name');
const sName = document.getElementById('secondName');
const email = document.getElementById('email');
const number = document.getElementById('number');
const message = document.getElementById('message');

if(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if(validateInputs()) {
            const subject = encodeURIComponent('Contact from Portfolio');
            const body = encodeURIComponent(`Name: ${username.value} ${sName.value}\nPhone: ${number.value}\nMessage: ${message.value}`);
            window.location.href = `mailto:miro.zukina@icloud.com?subject=${subject}&body=${body}`;
        }
    });
}

function validateInputs() {
    let isValid = true;
    const fields = [username, sName, email, number, message];
    
    fields.forEach(field => {
        const errorDisplay = field.parentElement.querySelector('.error');
        if(!field.value.trim()) {
            if(errorDisplay) errorDisplay.innerText = 'Field required';
            isValid = false;
        } else {
            if(errorDisplay) errorDisplay.innerText = '';
        }
    });
    return isValid;
}