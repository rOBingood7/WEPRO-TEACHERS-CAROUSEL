const slides = document.querySelectorAll('.slide')
const indicators = document.querySelectorAll('.indicator')
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')

let slideIndex = 0

showSlides(slideIndex)

function showSlides(n) {
    if (n >= slides.length) {
        slideIndex = 0
    }

    if (n < 0) {
        slideIndex = slides.length - 1
    }

    slides.forEach((slide) => slide.classList.add('hide', 'fade'))
    slides[slideIndex].classList.remove('hide')

    indicators.forEach((indicator) => indicator.classList.remove('active'))
    indicators[slideIndex].classList.add('active')
}

next.onclick = () => {
    slideIndex++
    showSlides(slideIndex)
};

prev.onclick = () => {
    slideIndex--
    showSlides(slideIndex)
}

indicators.forEach((indicator, idx) => {
    indicator.onclick = () => {
        slideIndex = idx
        showSlides(slideIndex)
    }
})
