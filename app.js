const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

// When the user clicks the lean more button it scrolls to
// to the learn more options
function infoFunction() {
    console.log("Working")
    document.body.scrollTop = 800 // For Safari
    document.documentElement.scrollTop = 800; // For everything else
}

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});