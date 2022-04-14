const button = document.getElementById("burger")
const menu = document.getElementById("menu")
const title = document.getElementById("titlenav")
menulist = () => {
  titlenav.classList.toggle("active");
  button.classList.toggle("active");
  menu.classList.toggle("active");
}

window.addEventListener("load", function() {
  const first = document.getElementById("one")
  const second = document.getElementById("two")
  const third = document.getElementById("three")
  const popup = document.getElementById("popups")



setTimeout(() => {

    first.style.display="grid";
    first.classList.toggle("active");
  
  setTimeout(() => {
    first.style.opacity="0";
  }, 1500);
}, 1);

setTimeout(() => {
  first.style.display="none";
    second.style.display="grid";
  
    setTimeout(() => {
      second.classList.toggle("active")
    }, 500);
  
  setTimeout(() => {
    second.style.opacity="0";
  }, 2500);
}, 2400);

setTimeout(() => {
  second.style.display="none";
    third.style.display="grid";
  
    setTimeout(() => {
      third.classList.toggle("active")
    }, 500);
  
  setTimeout(() => {
    third.style.opacity="0";
  }, 3000);
}, 6000);

setTimeout(() => {
    third.style.display = "none"
    setTimeout(() => {
      popup.style.opacity="0";

      setTimeout(() => {
        popup.style.display="none"
      }, 401);
    }, 400);
}, 10000);


})



// Darkmode localstorage

let darkMode = localStorage.getItem('darkMode'); //cookie of 5 MB (no concern of security)
const darkModeToggle = document.getElementById("toggle-dark-mode");
const moon = document.getElementById("moon")
const sun = document.getElementById("sun")


//check if dark mode is enabled
//if enabled, turn it off
//if disabled, turn it on

const enableDarkMode = () =>{
  //1. Add class darkmode to the body
  document.body.classList.add('darkmode');
  //2. Update darkmode in the local storage
  localStorage.setItem('darkMode', 'enabled');
  moon.style.display="none"
  sun.style.display="block"
};

const disableDarkMode = () =>{
  //1. Add class darkmode to the body
  document.body.classList.remove('darkmode');
  //2. Update darkmode in the local storage
  localStorage.setItem('darkMode', null);
  moon.style.display="block"
  sun.style.display="none"
};

if (darkMode === 'enabled'){
  enableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode');
  if(darkMode !== 'enabled'){
    enableDarkMode();
  }
  else {
    disableDarkMode();
  }
});
