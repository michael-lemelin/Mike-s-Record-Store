/* When the user clicks on the button, toggle between hiding and showing the dropdown content */
function toggleDropdown() {
    document.getElementById("myAccountDropdown").classList.toggle("show");
}
  
// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {

    if (!e.target.matches('.dropbtn')) {

    var myAccountDropdown = document.getElementById("myAccountDropdown");

        if (myAccountDropdown.classList.contains('show')) {

            myAccountDropdown.classList.remove('show');
        }
    }
}

// Wait for DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // Get references to navbar toggle button and menu
    const navbarToggle = document.getElementById('navbar-toggle');
    const navbarNav = document.getElementById('navbar-nav');

    // Add click event listener to navbar toggle button
    navbarToggle.addEventListener('click', function() {

        // Toggle 'show' class on navbar menu to display or hide it
        navbarNav.classList.toggle('active');
    });
});