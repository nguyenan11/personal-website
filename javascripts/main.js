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

/************************** Dark theme **************************/

const themeButton = $("#theme-button")[0]
const darkTheme = "dark-theme"
const iconTheme = "fa-sun"

// Previously selected - if user selected (cache is not emptied yet)
const selectedTheme = localStorage.getItem("selected-theme")
const selectedIcon = localStorage.getItem("selected-icon")

// Gets current theme from the interface by validating the dark-theme variables
const getCurrentTheme = () => $(document.body).hasClass(darkTheme) ? "dark" : "light"
const getCurrentIcon = () => themeButton.hasClass(iconTheme) ? "fa-moon" : "fa-sun"

// Next validation step if the user previously chose a topic (cache)
if (selectedTheme) {
  // If validation is good, check what the issue was to know if we activated or deactivated the dark
  $(document.body)[selectedTheme === "dark" ? "add" : "remove"](darkTheme)
  $(themeButton)[selectedIcon === "fa-moon" ? "add" : "remove"](iconTheme)
}

// Manually activate / deactivate theme with button
$(themeButton).click(function() {
    // Add / remove the dark theme and icon
    $(document.body).toggle(darkTheme)
    $(themeButton).toggle(iconTheme)
    // Save theme and current icon of user's choice
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
});
