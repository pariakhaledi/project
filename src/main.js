
 let menubar = document.querySelector(".menubar");
 let submenu = document.querySelector(".submenu");

 menubar.addEventListener("click", function () {
   if (submenu.classList.contains("hidden")) {
     submenu.classList.remove("hidden"); 
     setTimeout(function () {
       submenu.classList.remove("scale-y-0"); 
       submenu.classList.add("scale-y-100");
     }, 10);
   } else {
     submenu.classList.remove("scale-y-100"); 
     submenu.classList.add("scale-y-0"); 
     setTimeout(function () {
       submenu.classList.add("hidden"); 
     }, 300);
   }
 });