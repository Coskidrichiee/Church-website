
  document.getElementById('hamburger').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('active');
  });


    // Go to up button
    // scroll to top button
document.addEventListener('DOMContentLoaded', function() {
    const goTopBtn = document.getElementById('goTopBtn');
  
    // Show button when scrolled down 100px from the top
    window.onscroll = function() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            goTopBtn.style.display = 'block';
        } else {
            goTopBtn.style.display = 'none';
        }
    };
  
    // Smooth scroll to top when button is clicked
    goTopBtn.onclick = function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  });

  /* Preloader
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
// JavaScript to hide the loader after a delay (e.g., 3 seconds)
window.addEventListener('load', function() {
  // Simulate a delay before hiding the loader (3 seconds in this example)
  setTimeout(function() {
      document.querySelector('.loader_bg').style.display = 'none';
  }, 2000); // 2000 milliseconds = 2 seconds
});


