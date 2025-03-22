// Select Elements
const menuIcon = document.getElementById('menu-icon');  // Hamburger/Close Icon Button
const mobileMenu = document.getElementById('mobile-menu');  // Mobile Menu Div
const menuIconIcon = menuIcon.querySelector('i');  // Icon Inside the Button (fa-bars or fa-times)


// Function to Toggle Menu and Icon
function toggleMenu() {
    // Toggle 'show' class on mobileMenu to show/hide menu
    mobileMenu.classList.toggle('show');

    // Check if menu is open or closed and change icon accordingly
    if (mobileMenu.classList.contains('show')) 
    {
        menuIconIcon.classList.remove('fa-bars');
        menuIconIcon.classList.add('fa-times');
    } 
    
    else 
    {
        menuIconIcon.classList.remove('fa-times');
        menuIconIcon.classList.add('fa-bars');
    }
}

// Add Event Listener to Menu Icon Button
menuIcon.addEventListener('click', toggleMenu);
