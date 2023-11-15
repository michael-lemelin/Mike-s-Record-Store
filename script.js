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