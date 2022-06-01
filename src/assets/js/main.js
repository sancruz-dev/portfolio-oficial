// /*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup('.work__container', {
   selectors: {
      target: '.work__card'
   },
   animation: {
      duration: 300
   } 
})

/* Link active work */
const linkWork = document.querySelectorAll('.work__item')

function activeWork() {
   linkWork.forEach(l => l.classList.remove('active-work'))
   this.classList.add('active-work')
}

linkWork.forEach(l => l.addEventListener('click', activeWork))

/*=============== SWIPER TESTIMONIAL ===============*/
const swiperTestimonial = new Swiper(".testimonial__container", {
   spaceBetween: 24,
   loop: true,
   grabCursor: true,

   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },

   breakpoints: {
      576: {
         slidesPerView: 2,
      },
      768: {
         slidesPerView: 2,
         spaceBetween: 48,
      },
   },
})

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
window.addEventListener('scroll', () => {
   let sections = document.querySelectorAll('section[id]'),
      scrollY = window.pageYOffset

   sections.forEach(current => {
      let sectionHeight = current.offsetHeight,
         sectionTop = current.offsetTop - 58,
         sectionId = current.getAttribute('id'),
         activedLink = document.querySelector(`.nav__menu a[href*=${sectionId}]`)

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
         activedLink.classList.add('active-link')

      } else { activedLink.classList.remove('active-link') }
   })
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
   origin: 'top',
   distance: '60px',
   duration: 2500,
   delay: 400,
   // reset: true
})

sr.reveal(`.home__data`)
sr.reveal(`.home__handle`, { delay: 700 })
sr.reveal(`.home__social, .home__scroll`, { delay: 900, origin: 'bottom' })

