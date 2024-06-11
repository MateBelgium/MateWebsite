/* ====================
        NONE JS
==================== */

document.querySelector(".body__content").classList.add("hideScrollBar");

/* ====================
        Resize
==================== */

var windowWidth = window.innerWidth;

addEventListener("resize", onResize);

function onResize() {

  windowWidth = window.innerWidth;

}

/* ====================
        Scroll
==================== */

const element = document.querySelector(".body__content");

let isScrolling = false; // Flag to prevent multiple scroll events
let scrollMomentum = 0; // Stores momentum for smooth scrolling
let scrollSpeedPositive = 0.065 // Right Scroll Speed
let scrollSpeedNegative = 0.1 // Left Scroll Speed

element.addEventListener('wheel', (event) => {

  if (windowWidth > 1023) {
    event.preventDefault(); // Prevent default browser scrolling behavior

    let scrollSpeed = event.deltaY > 0 ? scrollSpeedPositive : scrollSpeedNegative;
    scrollMomentum += event.deltaY * scrollSpeed; // Add momentum based on scroll delta

    if (!isScrolling) {
      isScrolling = true;
      const scrollInterval = setInterval(() => {
        if (Math.abs(scrollMomentum) > 0.05) {
          element.scrollBy({
            left: scrollMomentum,
            behavior: 'auto' // Disable smooth scrolling for momentum
          });

          // Adjust momentum decay based on direction
          scrollMomentum *= (scrollMomentum > 0) ? 0.92 : 0.85;  // 0.9 for right, 0.7 for left
        } else {
          clearInterval(scrollInterval);
          isScrolling = false;
          scrollMomentum = 0; // Reset momentum after stopping
        }
      }, 10); // Adjust interval for momentum scrolling (milliseconds)
    }
  }
});


/* ====================
      Drag Click
==================== */

const slider = document.querySelector('.body__content');
let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener('mousedown', (e) => {

    if(windowWidth > 1023 ) {

      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
      cancelMomentumTracking();

    }
  });
  
  
  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
  });
  
  
  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
    beginMomentumTracking();
  });
  
  
  slider.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1; //scroll-fast
    var prevScrollLeft = slider.scrollLeft;
    slider.scrollLeft = scrollLeft - walk;
    velX = slider.scrollLeft - prevScrollLeft;
  });
  
  // Momentum 
  
  var velX = 0;
  var momentumID;
  
  slider.addEventListener('wheel', (e) => {
    cancelMomentumTracking();
  });  
  
  function beginMomentumTracking(){
    cancelMomentumTracking();
    momentumID = requestAnimationFrame(momentumLoop);
  }
  function cancelMomentumTracking(){
    cancelAnimationFrame(momentumID);
  }
  function momentumLoop(){
    slider.scrollLeft += velX;
    velX *= 0.95; 
    if (Math.abs(velX) > 0.5){
      momentumID = requestAnimationFrame(momentumLoop);
    }
  }


/* ====================
        NAV
==================== */

/*
const navButtonEl = document.querySelector(".mainnav__button");
const navStarEl = navButtonEl.querySelector("img")
const navHiddenEl = document.querySelector(".mainnav__hidden");
var ISnavVisible = false;

navButtonEl.addEventListener("click", onNavButtonClick);

function onNavButtonClick(e) {

  if(windowWidth < 1024) { // Mobile

    if(ISnavVisible) {   // Hide Menu
      document.body.style.position = "relative";
      navHiddenEl.style.left = "100vw";
      navStarEl.style.transform = "rotate(0deg)"
    }else {   // Show Menu
      navHiddenEl.style.left = "0px";
      navStarEl.style.transform = "rotate(135deg)"
      document.body.style.position = "fixed";
    }

  }else { // Computer

    if(ISnavVisible) {   // Hide Menu
      navHiddenEl.style.left = "-100vw";
      navStarEl.style.transform = "rotate(0deg)"
    }else {   // Show Menu
      navHiddenEl.style.left = "120px";
      navStarEl.style.transform = "rotate(135deg)"
    }

  }

  ISnavVisible = !ISnavVisible;

}
  */