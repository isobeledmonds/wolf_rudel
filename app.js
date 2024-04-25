const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.toggle("show", entry.isIntersecting);
        } else {
            entry.target.classList.remove("show");
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


function menuBar(x) {
    x.classList.toggle("change");
  }


/* Overlay menu */

  /* Open when someone clicks on the span element */

//const overlayContainer = document.querySelectorAll(".overlay-container");


//function openNav(overlayContainer) {
//  overlayContainer.classList.toggle("open");
//}
  
function OpenNav() {
    document.querySelectorAll("overlay-container").style.width = "100%";
}
  /* Close when someone clicks on the "x" symbol inside the overlay */
 function closeNav() {
    document.querySelectorAll("overlay-container").style.width = "0%";
}


// $('.menu-bar').click(function(){
//$('.overlay-container').classList.toggle('open');
//});



$('.change').click(function(){
    document.querySelectorAll("overlay-container").style.width = "0%";
});