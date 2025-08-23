//RESPONSIVE TOP NAV----------------------------------------------
function myFunction() {
  var x = document.getElementById("mynavBtn");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//DROPDOWN BUTTONS----------------------------------------------
    function toggleDropdown(menuId) {
      // Close all other dropdowns
      document.querySelectorAll(".dropdown-content").forEach(menu => {
        if (menu.id !== menuId) {
          menu.classList.remove("show");
        }
      });

      // Toggle the clicked one
      document.getElementById(menuId).classList.toggle("show");
    }

    // Close dropdown if clicking outside
    window.onclick = function(event) {
      if (!event.target.matches('.dropbtn')) {
        document.querySelectorAll(".dropdown-content").forEach(menu => {
          menu.classList.remove("show");
        });
      }
    }

//SLIDE SHOW GALERI-------------------------------------------------
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}