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
 };

 

  // Get the form element
  const form1 = document.getElementById('form');
  
  // Attach event listener to form submit
  form1.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the input values
    const name = document.getElementById('name').value;
    const secondName = document.getElementById('secondName').value;
    const email = document.getElementById('email').value;
    const number = document.getElementById('number').value;
    const message = document.getElementById('message').value;

    const subject = 'Form Submission';
    const body = `
      Name: ${name}
      Second Name: ${secondName}
      Email: ${email}
      Number: ${number}
      Message: ${message}
    `;

    // Create the mailto link
    const mailtoLink = `mailto:sschmiro@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open the user's email client
    window.location.href = mailtoLink;
  });


  

  const form = document.getElementById('form');
const username = document.getElementById('name');
const sName = document.getElementById('secondName');
const email = document.getElementById('email');
const number = document.getElementById('number');
const text1 = document.getElementById('message');

form.addEventListener('submit', function(event) {
  event.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText= message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const sNameValue = sName.value.trim();
    const emailValue = email.value.trim();
    const numberValue = number.value.trim();
    const text1Value= text1.value.trim();

    if(usernameValue === '') {
        setError(username, 'Name is required and cannot be left blank');
    } else {
        setSuccess(username);
    }

    if(sNameValue === '') {
      setError(sName, 'Sacond Name is required and cannot be left blank');
  } else {
      setSuccess(sName);
  }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(numberValue === '') {
        setError(number, 'Number is required');
    } else {
        setSuccess(number);
    }

    if(text1Value === '') {
        setError(text1, 'Please confirm your text');
    } else {
        setSuccess(text1);
    }

};