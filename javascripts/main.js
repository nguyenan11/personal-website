/************************** Menu Show and Hidden **************************/
const navMenu = $("#nav-menu"), 
      navToggle = $("#nav-toggle"),
      navClose = $("#nav-close")

/* Menu Show */
if (navToggle) {
    navToggle.click(function() {
        navMenu.addClass("show-menu")
    })
}

/* Menu Hidden */
if (navClose) {
    navClose.click(function() {
        navMenu.removeClass("show-menu")
    })
}

/************************** Remove Menu Mobile **************************/
$(".nav__link").click(function() {
    navMenu.removeClass("show-menu")
})