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
    const mobileNav = document.getElementById('mobile-nav');

    // Add click event listener to navbar toggle button
    navbarToggle.addEventListener('click', function() {

        // Toggle 'show' class on navbar menu to display or hide it
        mobileNav.classList.toggle('active');
    });
});


document.addEventListener('DOMContentLoaded', function(){
    const images = document.querySelectorAll('.slide-images');
    let currentImageIndex = 0;

    function showImage(index){
        for(let i = 0; i < images.length; i++){
            images[i].classList.remove('active');
        }
        images[index].classList.add('active');
    }

    // Show initial image
    showImage(currentImageIndex);

    document.querySelector('.next-btn').addEventListener('click', function(){
        currentImageIndex = (currentImageIndex + 1) % images.length;
        showImage(currentImageIndex);
    });

    document.querySelector(',prev-btn').addEventListener('click', function(){
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        showImage(currentImageIndex);
    });
});