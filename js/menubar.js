// to select all Navigation Links elements, you can use the following code:
let menu = document.getElementById("menu");

// now select menu bar-icon
let menuicon = document.getElementById("menuIcon");

// now select close icon
let closeicon = document.getElementById("closeIcon");

// jab bhi ham menu bar icon par click karenge to open menu function execute hoga  
function openMenu() {
  menu.style.display = "block"; // menu show
  menuicon.style.display = "none"; // menu icon hide
  closeicon.style.display = "block"; // close icon show
}

// now when click closeicon menu bar will be close
function closeMenu() {
  menu.style.display = "none"; //menu hide
  menuicon.style.display = "block"; 
  closeicon.style.display = "none"; 
}