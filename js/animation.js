

// Active page Scroll animation
document.addEventListener("DOMContentLoaded", function(){
    const activePage = document.getElementById('progress-bar');
    const section = document.querySelector('body');
    
    const animateActivePage = () => {
      let AllPage = -section.getBoundingClientRect().top; // Element.getBoundingClientRect() returns size
    
      let progressWidth =
        (AllPage /
          (section.getBoundingClientRect().height -
            document.documentElement.clientHeight)) *
        100;
      let value = Math.floor(progressWidth);
    
      activePage.style.width = value + '%';
    
      if (value < 0) {
        activePage.style.width = '0%';
      }
    };
    window.addEventListener('scroll', animateActivePage);
});


// sticky nav
window.addEventListener("scroll", function(){
  let navBar = document.querySelector("nav");
  navBar.classList.toggle("sticky", window.scrollY >5);
})



// text animation
function AnimateTitle(word){
  let bigName = document.querySelector(".big-name"); 
  bigName.innerHTML = '';
  let i=0;
  let textTimeDelay= setInterval(function(){
      if (i>=word.length){
          clearInterval(textTimeDelay);
          return;
      }
      bigName.innerHTML+=word[i++];
      }, 250);
}

AnimateTitle('.TravelSolo');