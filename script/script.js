// smooth scrolling--------------------------------------------------------------------------------
      $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
    });
// smooth scrolling---------------------------------------------------------------------------------------
document.addEventListener('copy', (event) => {
    event.preventDefault();  // Prevent the default copy behavior

    // You can modify the clipboard content or just clear it
    event.clipboardData.setData('text/plain', '');  // Clears the copied content

    alert("Don't copy anything");
});

        // Disable right-click context menu
        document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
        });

        // Disable image dragging
        document.querySelectorAll('img').forEach(img => {
            img.addEventListener('dragstart', function(e) {
                e.preventDefault();
            });
        });

        // Disable Ctrl+S, Ctrl+P, and other save actions
        document.addEventListener('keydown', function(e) {
            if (e.ctrlKey && (e.key === 's' || e.key === 'p' || e.key === 'u' || e.key === 'Shift+I')) {
                e.preventDefault();
            }
        });



// Disable PrintScreen (PrtSc)
document.addEventListener("keyup", function (event) {
    if (event.key === "PrintScreen") {
        let overlay = document.createElement("div");
        overlay.style.position = "fixed";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100vw";
        overlay.style.height = "100vh";
        overlay.style.background = "black";
        overlay.style.zIndex = "9999";
        document.body.appendChild(overlay);
        setTimeout(() => document.body.removeChild(overlay), 500);
        alert("Screenshots are disabled on this website.");
    }
});
document.addEventListener("keyup", function (event) {
    if (input.code === 'F11') {
        let overlay = document.createElement("div");
        overlay.style.position = "fixed";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100vw";
        overlay.style.height = "100vh";
        overlay.style.background = "black";
        overlay.style.zIndex = "9999";
        document.body.appendChild(overlay);
        setTimeout(() => document.body.removeChild(overlay), 500);
        alert("Screenshots are disabled on this website.");
    }
});


// Disable Right-Click
document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    alert("Right-click is disabled by Developer");
});

// Disable Developer Tools (F12, Ctrl + Shift + I/J, Ctrl + U)
document.addEventListener("keydown", function (event) {
    if (
        event.keyCode === 123 || // F12
        (event.ctrlKey && event.shiftKey && event.key === "I") || // Ctrl + Shift + I
        (event.ctrlKey && event.shiftKey && event.key === "J") || // Ctrl + Shift + J
        (event.ctrlKey && event.key === "U") // Ctrl + U
    ) {
        event.preventDefault();
        alert("Developer tools are disabled.");
    }
});

// Disable Print (Ctrl + P)
document.addEventListener("keydown", function (event) {
    if (event.ctrlKey && event.key === "p") {
        event.preventDefault();
        alert("Printing is disabled.");
    }
});

//Loader start-------------------------------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  const petalContainer = document.getElementById("petals-container");
  const music = document.getElementById("love-music");

  const petalShapes = ["❀", "✿", "🌸", "💮", "🌺", "🌷"];

  function createPetal() {
    const petal = document.createElement("div");
    petal.classList.add("petal");
    petal.textContent = petalShapes[Math.floor(Math.random() * petalShapes.length)];

    const size = Math.random() * 20 + 20;
    petal.style.fontSize = `${size}px`;
    petal.style.left = `${Math.random() * 100}vw`;
    petal.style.animationDuration = `${Math.random() * 3 + 4}s`;
    petal.style.color = `rgba(255, ${Math.floor(Math.random() * 100 + 100)}, ${Math.floor(Math.random() * 150 + 100)}, 0.9)`;
    petal.style.transform = `rotate(${Math.random() * 360}deg) scale(${Math.random() * 0.6 + 0.7})`;

    petalContainer.appendChild(petal);

    setTimeout(() => {
      petal.remove();
    }, 8000);
  }

  setInterval(createPetal, 250);

  setTimeout(() => {
    document.getElementById("wedding-loader").classList.add("fade-out");

    setTimeout(() => {
      document.getElementById("wedding-loader").style.display = "none";

      if (music) {
        music.play().catch((err) => console.log("Auto-play blocked:", err));
      }
    }, 1000);
  }, 5000);
});

//Loader End ---------------------------------------------------------------------------------------------------------------------


//Navbar Start----------------------------------------------------------------------------------------------
    window.onscroll = function () {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
          navbar.classList.add('nav-scrolled');
      } else {
          navbar.classList.remove('nav-scrolled');
      }
  };
//Navbar Start-----------------------------------------------------------------------------------------------
  
// simplyCountdown-----------------------------------------------------------------------------------
      simplyCountdown(".simply-countdown", {
        year: 2025, // required
        month: 6, // required
        day: 13, // required
        hours: 9, // Default is 0 [0-23] integer
        minutes: 0, // Default is 0 [0-59] integer
        seconds: 0, // Default is 0 [0-59] integer
        words: {
          days: { singular: "Day", plural: "Days" },
          hours: { singular: "Hour", plural: "Hours" },
          minutes: { singular: "Minute", plural: "Minutes" },
          seconds: { singular: "Second", plural: "Seconds" },
        },
        onEnd: function () {
          alert("The marriage has ended!");
          document.querySelector(".simply-countdown").classList.add("celebrate");
          return;
        },
        refresh: 1000, // default refresh every 1s
        onUpdate: function() {
          // Add animation effect on every countdown tick
          document.querySelectorAll(".simply-countdown span").forEach((el) => {
            el.classList.add("change");
            setTimeout(() => el.classList.remove("change"), 500);
          });
        },
      });
//simplyCountdown end ---------------------------------------------------------------------------------------


//Disable scroll----------------------------------------------------------------------------------------------
const elementRoot = document.querySelector(":root");
const notification = document.getElementById("notification");
const notificationMessage = document.getElementById("notificationMessage");
const dismissButton = document.getElementById("dismissButton");
const addToGoogleCalendarbtn = document.getElementById('addToGoogleCalendarbtn');

let notificationTimeout;

// Disable scrolling
function disableScroll() {

    // Enable pointer cursor on the "View Invitation" button
    addToGoogleCalendarbtn.style.cursor = 'pointer'; // Cursor will be the hand icon when hovering the button
}

function enableScroll() {
    window.onscroll = function () {};
    elementRoot.style.scrollBehavior = "smooth";
    localStorage.setItem("opened", "true"); 
    hideNotification(); // Hide notification
    document.body.style.overflow = 'auto'; // Ensure scrolling is allowed again

    // Reset cursor behavior when scrolling is enabled
    addToGoogleCalendarbtn.style.cursor = ''; // Remove pointer cursor style
}


function showNotification(message) {
    // Only show notification if the invitation hasn't been opened
    if (!localStorage.getItem("opened")) {
        notificationMessage.textContent = message; // Set message
        notification.classList.add("show"); // Add class for animation

        // Clear existing timeout if any
        clearTimeout(notificationTimeout);
        
        // Show notification and set a timeout to hide it
        notification.style.display = "block";
        notificationTimeout = setTimeout(hideNotification, 3000);
    }
}

function hideNotification() {
    notification.classList.remove("show"); // Remove class for animation
    // Delay the actual hiding to allow the fade-out animation to complete
    setTimeout(() => {
        notification.style.display = "none"; // Hide notification
    }, 500); // Match the duration of the opacity transition
}

// Dismiss button functionality
dismissButton.addEventListener("click", hideNotification);

// Initial check for localStorage
if (!localStorage.getItem("opened")) {
    disableScroll();
}

// Add click event to the button
addToGoogleCalendarbtn.addEventListener("click", enableScroll);

// Notify users if they click anywhere else or try to scroll
document.addEventListener("click", function(event) {
    if (event.target !== addToGoogleCalendarbtn) {
        showNotification("Please click the 'Add To Calendar' "); // Show notification
    }
});

// Show notification on scroll attempt
document.addEventListener("scroll", function() {
    showNotification("Please click the 'Add To Calendar'"); // Show notification
});

// 
//Disable scroll

//Attendance Form---------------------------------------------------------------------------------------------------
function showAlert(message, type = "success") {
  const alertBox = document.getElementById("animated-alert");
  alertBox.className = `alert-box ${type === "error" ? "error" : ""}`;
  alertBox.textContent = message;
  alertBox.style.display = "block";

  setTimeout(() => {
    alertBox.style.display = "none";
  }, 3000); // Alert visible for 3 seconds
}

document.getElementById("my-form").addEventListener("submit", function (event) {
  event.preventDefault();

  let name = document.getElementById("Name").value;
  let attendees = document.getElementById("Members").value;
  let status = document.getElementById("status").value;

  if (!name || !attendees || status === "Select one") {
    showAlert("Please fill in all the fields correctly.", "error");
    return;
  }

  let form = event.target;
  let formData = new FormData(form);

  fetch(form.action, {
    method: "POST",
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  }).then(() => {
    showAlert("Thank you for your response!");
    form.reset();
  }).catch(() => {
    showAlert("There was a problem submitting your RSVP. Please try again.", "error");
  });
});

         
//Attendance Form End--------------------------------------------------------------------------------------------------------------------------   
      

/* ===== SCROLL REVEAL ANIMATION ===== */

ScrollReveal().reveal("p", {
  duration: 1500,
  origin: "bottom",
  distance: "100px",
  easing: "cubic-bezier(.37,.01,.74,1)",
  opacity: 0.3,
  scale: 0.5
});
ScrollReveal().reveal(".navbar-brand", {
  duration: 2000,
  origin: "top",
  distance: "300px",
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  rotate: {
    x: 20,
    z: -10
  }
});
ScrollReveal().reveal("h2", {
  duration: 2500,
  origin: "top",
  distance: "400px",
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  rotate: {
    x: 20,
    z: -10
  }
});
ScrollReveal().reveal(".timeline-panel", {
  duration: 3000,
  origin: "left",
  distance: "300px",
  easing: "ease-in-out"
});
ScrollReveal().reveal(".gallery img", {
  delay: 500,
  duration: 2000,
  rotate: {
    x: 20,
    z: 20
  }
});

// video playing script-------------------------------------------------

const video = document.querySelector('.video');

video.addEventListener('mouseenter', () => {
  video.play();
});

video.addEventListener('mouseleave', () => {
  video.pause();
  video.currentTime = 0; // Optional: Reset to start when not hovering
});



//Add Calander

function addToGoogleCalendar() {
  const title = encodeURIComponent("Marriage Reminder");
  const location = encodeURIComponent("Vigneshwaran & Kalishwari Wedding Event");
  const details = encodeURIComponent(`You're warmly invited to celebrate the union of

        💑 Vigneshwaran  & Kalishwari

        📅 Date: June 13, 2025
        🕒 Time: 9:00 AM
        📍 Location: Viralimalai Murugan Temple, Pudukkottai.


        Kindly RSVP by June 13th.

        With love,
        Vigneshwaran  & Kalishwari
`);
  
  // Format: YYYYMMDDTHHMMSSZ (Z = UTC) or YYYYMMDDTHHMMSS for local
  const startDate = "20250613T043000Z";
  const endDate = "20250613T063000Z";

  const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${startDate}/${endDate}`;

  window.open(calendarUrl, "_blank");
}
// Disable pinch zoom
let viewport = document.querySelector('meta[name=viewport]');
if (!viewport) {
  viewport = document.createElement('meta');
  viewport.name = 'viewport';
  document.head.appendChild(viewport);
}
viewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';

// Disable Ctrl + scroll zoom
window.addEventListener('wheel', function (e) {
  if (e.ctrlKey) {
    e.preventDefault();
  }
}, { passive: false });

// Disable Ctrl + keyboard zoom
window.addEventListener('keydown', function (e) {
  if ((e.ctrlKey || e.metaKey) && (e.key === '+' || e.key === '-' || e.key === '=')) {
    e.preventDefault();
  }
});

const page = document.getElementById('page');

// Disable pinch zoom and multi-finger gestures
document.addEventListener('touchstart', function(event) {
    if (event.touches.length > 2) {
        blurScreen();
        event.preventDefault();
    }
}, { passive: false });

// Detect visibility change (possible screenshot)
document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'hidden') {
        blurScreen();
    }
});

function blurScreen() {
    page.classList.add('blurred');

    // After 5 seconds automatically remove blur
    setTimeout(() => {
        removeBlur();
    }, 5000);
}

// Remove blur function
function removeBlur() {
    page.classList.remove('blurred');
}

// If user taps while blurred, remove blur immediately
document.addEventListener('click', function() {
    if (page.classList.contains('blurred')) {
        removeBlur();
    }
});


// Custom Alery Box
var ALERT_TITLE = "Alert";
var ALERT_BUTTON_TEXT = "Ok";

if(document.getElementById) {
	window.alert = function(txt) {
		createCustomAlert(txt);
	}
}

function createCustomAlert(txt) {
	d = document;

	if(d.getElementById("modalContainer")) return;

	mObj = d.getElementsByTagName("body")[0].appendChild(d.createElement("div"));
	mObj.id = "modalContainer";
	mObj.style.height = d.documentElement.scrollHeight + "px";
	
	alertObj = mObj.appendChild(d.createElement("div"));
	alertObj.id = "alertBox";
	if(d.all && !window.opera) alertObj.style.top = document.documentElement.scrollTop + "px";
	alertObj.style.left = (d.documentElement.scrollWidth - alertObj.offsetWidth)/2 + "px";
	alertObj.style.visiblity="visible";

	h1 = alertObj.appendChild(d.createElement("h1"));
	h1.appendChild(d.createTextNode(ALERT_TITLE));

	msg = alertObj.appendChild(d.createElement("p"));
	msg.appendChild(d.createTextNode(txt));
	msg.innerHTML = txt;

	btn = alertObj.appendChild(d.createElement("a"));
	btn.id = "closeBtn";
	btn.appendChild(d.createTextNode(ALERT_BUTTON_TEXT));
	btn.href = "#";
	btn.focus();
	btn.onclick = function() { removeCustomAlert();return false; }

	alertObj.style.display = "block";
	
}

function removeCustomAlert() {
	document.getElementsByTagName("body")[0].removeChild(document.getElementById("modalContainer"));
}
function ful(){
alert('Alert this pages');
}



let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  // Show an install button
  const installButton = document.getElementById('install-btn');
  installButton.style.display = 'block';

  installButton.addEventListener('click', () => {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
      deferredPrompt = null;
    });
  });
});







