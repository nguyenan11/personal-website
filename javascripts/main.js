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
const darkTheme = 'dark-theme'
const iconTheme = 'fa-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'fa-moon' : 'fa-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'fa-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
});
