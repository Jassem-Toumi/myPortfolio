/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader (){
const header = document.getElementById ('header')
// When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
if(this.scrollY >= 50) header.classList.add ('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener ('scroll', scrollHeader)

/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll('.service-cards');
const modalBtns = document.querySelectorAll('.services__button');
const modalClose = document.querySelectorAll('.services__modal-close');

let modal = function(modalClick){
  modalViews[modalClick].classList.add('active-modal')
}
modalBtns.forEach((mb, i) =>{
  mb.addEventListener('click', () =>{
    modal(i)
    })
})

modalClose.forEach((mc) =>{
  mc.addEventListener('click', () => {
    modalViews.forEach((mv) =>{
      mv.classList.remove('active-modal')
    })
  })
})


/*========== ===== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

/* Link active work */ 
const linkWork = document.querySelectorAll('.work__item')
function activeWork(){
  linkWork.forEach(l => l.classList.remove('active_work'))
  this.classList.add('active_work')
}

linkWork.forEach(l => l.addEventListener('click', activeWork))



/*============= SCROLL SECTIONS ACTIVE LINK =============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
  const scrollY = window.pageYOffset

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight, 
    sectionTop = current.offsetTop - 58,
    sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document.querySelector('.nav__menu a[href*=' + sectionId +']').classList.add('active-link')}
      else{
        document.querySelector('.nav__menu a[href*=' +sectionId + ']').classList.remove('active-link')
      }
    
  })
}
window.addEventListener('scroll', scrollActive)

/*=============== LIGHT DARK THEME ===============*/ 
const themeButton = document.getElementById ('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'


// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the light-theme class
const getCurrentTheme = () => document.body.classList.contains (lightTheme)? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' :'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme){
// If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light
document.body.classList [selectedTheme === 'dark' ? 'add' :'remove'](lightTheme)
themeButton.classList [selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate/ deactivate the theme manually with the button
themeButton.addEventListener ('click', () =>{
// Add or remove the light / icon theme
document.body.classList.toggle (lightTheme)
themeButton.classList.toggle (iconTheme )
// We save the theme and the current icon that the user chose
localStorage.setItem('selected-theme', getCurrentTheme())
localStorage. setItem('selected -icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true,
})

sr.reveal(`.home__data`)
sr.reveal(`.home__handle`, {delay:250})
sr.reveal(`.home__social, .home__scroll`, {delay:500, origin: 'bottom'})

// About Section
sr.reveal(`.about__img`, {delay:300, origin: 'bottom'})
sr.reveal(`.about__info`, {delay:350, origin: 'bottom'})
sr.reveal(`.about__description, .reveal_button`, {delay:400, origin: 'bottom'})

// Skills

sr.reveal(`.skills__content`, {delay:280, origin: 'bottom'})
sr.reveal(`.skills__title`, {delay:300, origin: 'bottom'})
sr.reveal(`.skills__box`, {delay:350, origin: 'bottom'})

//  SERVICES

// sr.reveal(`.services__card`, {delay:280, origin: 'bottom'})
// sr.reveal(`.services__title`, {delay:300, origin: 'bottom'})
// sr.reveal(`.services__button`, {delay:350, origin: 'bottom'})

// WORK

sr.reveal(`.work__filters`, {delay:280, origin: 'bottom'})
sr.reveal(`.work__card`, {delay:300, origin: 'bottom'})
sr.reveal(`.services__button`, {delay:350, origin: 'bottom'})

// TESTIMONIALS

sr.reveal(`.contact_left-reveal`, {delay:350, origin: 'left'})
sr.reveal(`.contact_right-reveal`, {delay:400, origin: 'right'})


// Adding Color Variable 

// Switch to Pink
function pink_theme() {
document.documentElement.style.setProperty('--first-hue', '356');
document.documentElement.style.setProperty('--lig', ' 70%');
document.documentElement.style.setProperty('--first-color-alt', 'hsl(var(--first-hue), var(--sat), 66%)');
// document.documentElement.style.setProperty('--your-variable', '#YOURCOLOR');
}

// Switch to Pink
function blue_theme() {
document.documentElement.style.setProperty('--first-hue', '207');
document.documentElement.style.setProperty('--sat', '90%');
document.documentElement.style.setProperty('--lig', ' 68%');
document.documentElement.style.setProperty('--first-color-alt', 'hsl(var(--first-hue), var(--sat), 64%)');
}

// Switch to yellow
function yellow_theme(){
document.documentElement.style.setProperty('--first-hue', '54');
document.documentElement.style.setProperty('--sat', '90%');
document.documentElement.style.setProperty('--lig', ' 45%');
document.documentElement.style.setProperty('--first-color-alt', 'hsl(var(--first-hue), var(--sat), 46%)');
}

// Switch to Purple // Default
function purple_theme(){
document.documentElement.style.setProperty('--first-hue', '250');
document.documentElement.style.setProperty('--sat', '66%');
document.documentElement.style.setProperty('--lig', ' 65%'); // Already default
document.documentElement.style.setProperty('--first-color-alt', 'hsl(var(--first-hue), var(--sat), 61%)');
}


