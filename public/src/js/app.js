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


// // STEP 3: Add this JavaScript to your main JS file
// // Light/Dark Mode Toggle Functionality
// document.addEventListener('DOMContentLoaded', function() {
//     const modeToggle = document.getElementById('mode');
    
//     // Check for saved theme preference or use default
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme) {
//         document.body.setAttribute('data-layout-mode', savedTheme);
//     } else {
//         // Default to light mode if no preference saved
//         document.body.setAttribute('data-layout-mode', 'light');
//     }
    
//     // Handle theme toggle click
//     modeToggle.addEventListener('click', function() {
//         const currentTheme = document.body.getAttribute('data-layout-mode');
//         const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
//         // Update theme
//         document.body.setAttribute('data-layout-mode', newTheme);
        
//         // Save preference
//         localStorage.setItem('theme', newTheme);
        
//         console.log('Theme switched to:', newTheme);
//     });
    
//     // Rest of your PWA code...
// });
// STEP 3: Add this JavaScript to your main JS file
// Light/Dark Mode Toggle Functionality
// Splash screen


        // document.addEventListener('DOMContentLoaded', function() {
        //     // Hide splash screen after a delay
        //     setTimeout(function() {
        //         const splashScreen = document.getElementById('splash-screen');
        //         if (splashScreen) {
        //             splashScreen.style.opacity = '0';
        //             splashScreen.style.transition = 'opacity 0.5s ease';
        //             setTimeout(() => {
        //                 splashScreen.style.display = 'none';
        //             }, 500);
        //         }
        //     }, 1500);
            
        //     // Light/Dark Mode Toggle
        //     const modeToggle = document.getElementById('mode');
            
        //     // Check for saved theme preference or use default
        //     const savedTheme = localStorage.getItem('theme');
        //     if (savedTheme) {
        //         document.body.setAttribute('data-layout-mode', savedTheme);
        //     } else {
        //         // Default to light mode if no preference saved
        //         document.body.setAttribute('data-layout-mode', 'light');
        //     }
            
        //     // Handle theme toggle click
        //     modeToggle.addEventListener('click', function() {
        //         const currentTheme = document.body.getAttribute('data-layout-mode');
        //         const newTheme = currentTheme === 'light' ? 'dark' : 'light';
                
        //         // Update theme
        //         document.body.setAttribute('data-layout-mode', newTheme);
                
        //         // Save preference
        //         localStorage.setItem('theme', newTheme);
                
        //         console.log('Theme switched to:', newTheme);
        //     });

        //     // Close mobile menu when clicking a nav link
        //     const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
        //     const navbarToggler = document.querySelector('.navbar-toggler');
        //     const navbarCollapse = document.querySelector('.navbar-collapse');
            
        //     navLinks.forEach(function(link) {
        //         link.addEventListener('click', function() {
        //             if (navbarCollapse.classList.contains('show')) {
        //                 navbarToggler.click();
        //             }
        //         });
        //     });
        // });



// document.addEventListener('DOMContentLoaded', function() {
//     // Hide splash screen after a delay (if it exists)
//     setTimeout(function() {
//         const splashScreen = document.getElementById('splash-screen');
//         if (splashScreen) {
//             splashScreen.style.opacity = '0';
//             splashScreen.style.transition = 'opacity 0.5s ease';
//             setTimeout(() => {
//                 splashScreen.style.display = 'none';
//             }, 500);
//         }
//     }, 1500);
    
//     // Light/Dark Mode Toggle
//     const modeToggle = document.getElementById('mode');
    
//     // Check for saved theme preference or use default
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme) {
//         document.body.setAttribute('data-layout-mode', savedTheme);
//     } else {
//         // Default to light mode if no preference saved
//         document.body.setAttribute('data-layout-mode', 'light');
//     }
    
//     // Handle theme toggle click
//     modeToggle.addEventListener('click', function() {
//         const currentTheme = document.body.getAttribute('data-layout-mode');
//         const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
//         // Update theme
//         document.body.setAttribute('data-layout-mode', newTheme);
        
//         // Save preference
//         localStorage.setItem('theme', newTheme);
        
//         console.log('Theme switched to:', newTheme);
//     });

//     // ======== HAMBURGER MENU TRANSFORM CODE ========
//     // This is important to ensure the menu icon transforms properly
//     const navbarToggler = document.querySelector('.navbar-toggler');
    
//     // Toggle aria-expanded attribute which controls the icon transformation
//     navbarToggler.addEventListener('click', function() {
//         const expanded = this.getAttribute('aria-expanded') === 'true' || false;
//         this.setAttribute('aria-expanded', !expanded);
//     });
    
//     // Close mobile menu when clicking a nav link
//     const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
//     const navbarCollapse = document.querySelector('.navbar-collapse');
    
//     navLinks.forEach(function(link) {
//         link.addEventListener('click', function() {
//             if (navbarCollapse.classList.contains('show')) {
//                 navbarToggler.click();
//             }
//         });
//     });
// });

document.addEventListener('DOMContentLoaded', function () {
  // Theme toggle
  const modeToggle = document.getElementById('mode');
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.body.setAttribute('data-layout-mode', savedTheme);
  }
  modeToggle?.addEventListener('click', function () {
    const current = document.body.getAttribute('data-layout-mode');
    const newMode = current === 'light' ? 'dark' : 'light';
    document.body.setAttribute('data-layout-mode', newMode);
    localStorage.setItem('theme', newMode);
  });

  // Collapse navbar on link click
  const navLinks = document.querySelectorAll('.nav-link');
  const navbarCollapse = document.getElementById('navbarCollapse');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
      if (bsCollapse) {
        bsCollapse.hide();
      }
    });
  });

  // Assign IDs dynamically to the burger icon spans
  const burgerIcon = document.querySelector('.burger-icon');
  if (burgerIcon) {
    burgerIcon.setAttribute('id', 'hamburgerIcon');
  }

  // Create a close (X) icon dynamically
  const closeIcon = document.createElement('div');
  closeIcon.innerHTML = '&times;';
  closeIcon.style.display = 'none';
  closeIcon.style.fontSize = '28px';
  closeIcon.style.cursor = 'pointer';
  closeIcon.setAttribute('id', 'closeIcon');

  // Insert close icon next to the hamburger icon
  const toggleButton = document.querySelector('.navbar-toggler');
  toggleButton?.parentNode.insertBefore(closeIcon, toggleButton.nextSibling);

  // Collapse events
  const navbarCollapseEl = document.getElementById('navbarCollapse');
  navbarCollapseEl.addEventListener('show.bs.collapse', function () {
    document.getElementById('hamburgerIcon').style.display = 'none';
    document.getElementById('closeIcon').style.display = 'block';
  });

  navbarCollapseEl.addEventListener('hide.bs.collapse', function () {
    document.getElementById('hamburgerIcon').style.display = 'block';
    document.getElementById('closeIcon').style.display = 'none';
  });

  // Close menu when close icon is clicked
  closeIcon.addEventListener('click', function () {
    const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapseEl);
    if (bsCollapse) {
      bsCollapse.hide();
    }
  });
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

