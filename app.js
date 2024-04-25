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


  function openNav() {
    document.querySelectorAll(".overlay-container").style.width = "100%";
  }

//function openNav() {
  //  var overlayContainer = document.querySelectorAll(".overlay-container");
    //overlayContainer.classList.toggle("open");
  //}

//const menuClick = document.querySelectorAll(".menu-bar");

  
//menuClick.addEventListener("click", function() {
   // var overlayContainer = document.querySelectorAll(".overlay-container");
   // overlayContainer.style.width = "100%";
//});

/* Overlay menu */

  /* Open when someone clicks on the span element */



//function openNav(overlayContainer) {
//  overlayContainer.classList.toggle("open");
//}

//const overlayContainer = document.querySelectorAll(".overlay-container");

//function openNav() {
  //  overlayContainer.style.width = "100%";
//}
  /* Close when someone clicks on the "x" symbol inside the overlay */
 //function closeNav() {
 //   document.querySelectorAll("overlay-container").style.width = "0%";
//}


// $('.menu-bar').click(function(){
//$('.overlay-container').classList.toggle('open');
//});

//const menuBar = document.querySelector(".menu-bar");
//const overlayContainer = document.querySelector(".overlay-container");

//menuBar.click(function(){
   // overlayContainer.style.width = "100%";
//});


//$( ".menu-bar" ).on( "click", function() {
  //  $(".overlay-container").style.width = "100%";
 // } );


//$('.change').click(function(){
//    $('.overlay-container').style.width = "0%";
//});

//const menuBar = document.querySelector(".menu-bar");

//menuBar.addEventListener("click", (event) => {
   // document.querySelector(".overlay-container").style.width = "100%";
//});