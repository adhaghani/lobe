const button = document.getElementById("burger")
const menu = document.getElementById("menu")
const title = document.getElementById("titlenav")
menulist = () => {
  titlenav.classList.toggle("active");
  button.classList.toggle("active");
  menu.classList.toggle("active");
}


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




const popup = document.getElementById("popups")
const first = document.getElementById("one")
  const second = document.getElementById("two")
  const third = document.getElementById("three")

  let popupscreen = localStorage.getItem('pop', 'enabled');

  const enablepop = () => {
    console.log(popupscreen)
    setTimeout(() => {
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
            localStorage.setItem('popupscreen', null);
            console.log(popupscreen)
          }, 401);
        }, 400);
    }, 10000);
    }, 1);
  }
  const disablepop = () => {
    popup.style.display="none"
  }

  window.addEventListener("load", () => {
    popupscreen = localStorage.getItem('popupscreen');
    if (popupscreen == 'enabled'){
      enablepop()
    }
    else {
      disablepop()
    }
  })

  const us = document.getElementById("us");
  const her = document.getElementById("her");
  const usbutton = document.getElementById("usbutton");
  const herbutton = document.getElementById("herbutton");
  const preloader = document.getElementById("preloader")

  const herclick = () => {
    usbutton.classList.remove("active")
    herbutton.classList.add("active")
      setTimeout(() => {
        preloader.style.display="grid"
        setTimeout(() => {
          preloader.style.opacity="1"
        }, 100);
        setTimeout(() => {
          document.documentElement.scrollTop = 0;
          document.body.scrollTop = 0;
        }, 1000);
        setTimeout(() => {
          her.style.display="block";
          us.style.display="none";
        }, 3900);
        setTimeout(() => {
          preloader.style.opacity="0"
        }, 4000);
        setTimeout(() => {
          preloader.style.display="none"
        }, 4500);
      }, 1);

  }

  const usclick = () => {
    usbutton.classList.add("active")
    herbutton.classList.remove("active")

      setTimeout(() => {
        preloader.style.display="grid"
        setTimeout(() => {
          preloader.style.opacity="1"
        }, 100);
        setTimeout(() => {
          document.documentElement.scrollTop = 0;
          document.body.scrollTop = 0;
        }, 1000);
        setTimeout(() => {
          us.style.display="block";
          her.style.display="none";

        }, 3900);
        setTimeout(() => {
          preloader.style.opacity="0"
        }, 4000);
        setTimeout(() => {
          preloader.style.display="none"
        }, 4500);
      }, 1);

  }

  const herclick2 = () => {

  }

  const usclick2 = () => {

  }
  
  usbutton.addEventListener("click",function(){

    if(usbutton.classList.contains("active")) {
      usclick2();
    }
    else {
      usclick()
    }
  })

  herbutton.addEventListener("click",function(){
    if(herbutton.classList.contains("active")) {
      herclick2();
    }
    else {
    herclick();
    }
  })