// Mobile menu navigation toggle
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Scroll sections active sync
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            let targetLink = document.querySelector('header nav a[href*=' + id + ']');
            if(targetLink) targetLink.classList.add('active');
        }
    });

    // Sticky navbar adjustments
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    
    // Close navbar when clicking/scrolling to sections
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Random theme color picker custom configurations
const randColor = () => Math.floor(Math.random() * 256);

function changeTheme() {
    const newColor = `rgb(${randColor()}, ${randColor()}, ${randColor()})`;
    document.documentElement.style.setProperty('--main-color', newColor);
}

const themeBtn = document.getElementById('theme-button');
if(themeBtn) themeBtn.addEventListener('click', changeTheme);

// Contact form processing and verification
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
            
            // Comprehensive Email Verification
            if (field === email) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(field.value.trim())) {
                    if(errorDisplay) errorDisplay.innerText = 'Please enter a valid email address';
                    isValid = false;
                }
            }
        }
    });
    return isValid;
}