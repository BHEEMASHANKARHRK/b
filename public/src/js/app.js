var deferredPrompt;

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
    .then(reg => console.log('Service Worker registered:', reg))
    .catch(err => console.error('Service Worker registration failed:', err));
}

window.addEventListener("beforeinstallprompt", (event) => {
    console.log("beforeinstallprompt fired");
    event.preventDefault();
    deferredPrompt = event; // Assign the event
    console.log('deferredPrompt assigned:', deferredPrompt);
    document.getElementById('install-button').style.display = 'block'; // Show the install button
});




/********************* Menu Js **********************/

function windowScroll() {
  const navbar = document.getElementById("navbar");
  if (
    document.body.scrollTop >= 50 ||
    document.documentElement.scrollTop >= 50
  ) {
    navbar.classList.add("nav-sticky");
  } else {
    navbar.classList.remove("nav-sticky");
  }
}

window.addEventListener('scroll', (ev) => {
  ev.preventDefault();
  windowScroll();
})


// STEP 3: Add this JavaScript to your main JS file
// Light/Dark Mode Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get the theme toggle button
    const modeToggle = document.getElementById('mode');
    
    // Check for saved theme preference or use preferred color scheme
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Set initial theme based on saved preference or system preference
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        setDarkMode();
    } else {
        setLightMode();
    }
    
    // Toggle theme when button is clicked
    modeToggle.addEventListener('click', function() {
        if (document.body.classList.contains('dark-mode')) {
            setLightMode();
        } else {
            setDarkMode();
        }
    });
    
    // Function to set dark mode
    function setDarkMode() {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
        localStorage.setItem('theme', 'dark');
        
        // Update logo
        updateLogo();
        
        // Hide sun icon, show moon icon
        document.querySelector('.fa-sun-bright').style.display = 'none';
        document.querySelector('.fa-moon').style.display = 'block';
    }
    
    // Function to set light mode
    function setLightMode() {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
        
        // Update logo
        updateLogo();
        
        // Show sun icon, hide moon icon
        document.querySelector('.fa-sun-bright').style.display = 'block';
        document.querySelector('.fa-moon').style.display = 'none';
    }
    
    // Function to update logo based on theme
    function updateLogo() {
        const logoLink = document.getElementById('logo-link');
        const logoLight = logoLink.querySelector('.logo-light');
        const logoDark = logoLink.querySelector('.logo-dark');
        
        if (document.body.classList.contains('dark-mode')) {
            logoLight.style.display = 'block';
            logoDark.style.display = 'none';
        } else {
            logoLight.style.display = 'none';
            logoDark.style.display = 'block';
        }
    }
});


// tiny slide **** home

try {
  var slider = tns({
    container: '.home-slider',
    loop: true,
    autoplay: false,
    mouseDrag: true,
    controls: true,
    navPosition: "bottom",
    nav: false,
    autoplayTimeout: 5000,
    speed: 900,
    center: false,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    controlsText: ['&#8592;', '&#8594;'],
    autoplayButtonOutput: false,
    gutter: 50,
    responsive: {

      992: {
        gutter: 50,
        items: 1
      },

    }
  });

} catch (error) {

}



// text-animation

try {
  var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };

  TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';
    var that = this;
    var delta = 200 - Math.random() * 100;
    if (this.isDeleting) { delta /= 2; }
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
    setTimeout(function () {
      that.tick();
    }, delta);
  };

  function typewrite() {
    if (toRotate === 'undefined') {
      changeText()
    }
    else
      var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #ffffff}";
    document.body.appendChild(css);
  };
  typewrite();

} catch (error) {

}



// swiper slider

try {
  new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 3,
    paginationClickable: true,
    spaceBetween: 20,
    pagination: '.swiper-pagination',
    slidesPerView: 'auto',
    paginationClickable: true,
    spaceBetween: 0,
    centeredSlides: true,
    speed: 1500,
    breakpoints: {
      1920: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      1028: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 10
      }
    }
  });

} catch (error) {

}



// tiny slide **** home

try {
  var slider = tns({
    container: '.work-slider',
    loop: true,
    autoplay: true,
    mouseDrag: true,
    controls: true,
    navPosition: "bottom",
    nav: false,
    autoplayTimeout: 5000,
    speed: 900,
    center: false,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    controlsText: ['&#8592;', '&#8594;'],
    autoplayButtonOutput: false,
    gutter: 50,
    responsive: {

      992: {
        gutter: 50,
        items: 3
      },

    }
  });

} catch (error) {

}


try {
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })
} catch (error) {

}



home-5


try {
  var slider = tns({
    container: '.home5-slider',
    loop: true,
    autoplay: true,
    mouseDrag: true,
    controls: false,
    navPosition: "bottom",
    nav: false,
    autoplayTimeout: 5000,
    speed: 900,
    center: false,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    controlsText: ['&#8592;', '&#8594;'],
    autoplayButtonOutput: false,
    items:2,
    gutter: 50,
    responsive: {

      992: {
        gutter: 50,
        items: 3
      },

      576:{
        gutter: 30,
        items: 2
      }

    }
  });

} catch (error) {

}




// 
// home-5


try {
  var slider = tns({
    container: '.home6-slider',
    loop: true,
    autoplay: true,
    mouseDrag: true,
    controls: false,
    navPosition: "bottom",
    nav: false,
    autoplayTimeout: 5000,
    speed: 900,
    center: false,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    controlsText: ['&#8592;', '&#8594;'],
    autoplayButtonOutput: false,
    items:2,
    gutter: 30,
    responsive: {

      992: {
        gutter: 30,
        items: 2.5
      },

      576:{
        gutter: 30,
        items: 2
      }

    }
  });

} catch (error) {

}




// Contact Form
function validateForm() {
  var name = document.forms["myForm"]["name"].value;
  var email = document.forms["myForm"]["email"].value;
  var subject = document.forms["myForm"]["subject"].value;
  var comments = document.forms["myForm"]["comments"].value;
  document.getElementById("error-msg").style.opacity = 0;
  document.getElementById('error-msg').innerHTML = "";
  if (name == "" || name == null) {
      document.getElementById('error-msg').innerHTML = "<div class='alert alert-warning'>*Please enter a Name*</div>";
      fadeIn();
      return false;
  }
  if (email == "" || email == null) {
      document.getElementById('error-msg').innerHTML = "<div class='alert alert-warning'>*Please enter a Email*</div>";
      fadeIn();
      return false;
  }
  if (subject == "" || subject == null) {
      document.getElementById('error-msg').innerHTML = "<div class='alert alert-warning'>*Please enter a Subject*</div>";
      fadeIn();
      return false;
  }
  if (comments == "" || comments == null) {
      document.getElementById('error-msg').innerHTML = "<div class='alert alert-warning'>*Please enter a Comments*</div>";
      fadeIn();
      return false;
  }

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
          document.getElementById("simple-msg").innerHTML = this.responseText;
          document.forms["myForm"]["name"].value = "";
          document.forms["myForm"]["email"].value = "";
          document.forms["myForm"]["subject"].value = "";
          document.forms["myForm"]["comments"].value = "";
      }
  };
  xhttp.open("POST", "php/contact.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("name=" + name + "&email=" + email + "&subject=" + subject + "&comments=" + comments);
  return false;
}

function fadeIn() {
  var fade = document.getElementById("error-msg");
  var opacity = 0;
  var intervalID = setInterval(function () {
      if (opacity < 1) {
          opacity = opacity + 0.5
          fade.style.opacity = opacity;
      } else {
          clearInterval(intervalID);
      }
  }, 200);
}


window.addEventListener('load', function() {
  console.log("Page loaded");

  const logoLink = document.getElementById('logo-link');
  console.log("Logo link element:", logoLink);

  if (logoLink) {
    // Add event listener to the logo link
    logoLink.addEventListener('click', function(event) {
      console.log('Logo clicked');
      event.preventDefault(); // Prevent default navigation

      if (deferredPrompt) {
        console.log('deferredPrompt exists at logo click', deferredPrompt);
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then(function(choiceResult) {
          console.log(choiceResult.outcome);

          if (choiceResult.outcome === 'dismissed') {
            console.log("User cancelled installation");
          } else {
            console.log("User added to Home screen");
          }

          deferredPrompt = null;
        });
      } else {
        console.log("deferredPrompt does not exist at logo click");
      }
    });
  } else {
    console.log("Logo link element not found");
  }
});

