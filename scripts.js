// js for ania button functionality:


// const myCarouselElement = document.querySelector('#carouselExample')

// const carousel = new bootstrap.Carousel(myCarouselElement, {
//   interval: 2000,
//   touch: false
// })





// fuctionality to allow background to change:
const switchElement = document.querySelector('.switch')






switchElement.addEventListener('click', () => {
    document.body.classList.toggle('dark')
})