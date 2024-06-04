document.addEventListener("DOMContentLoaded", () => {
    const words = document.querySelectorAll('.word');
    words.forEach(word => {
        const characters = word.textContent.split('');
        word.innerHTML = '';
        characters.forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char;
            span.style.animationDelay = `${index * 0.3}s`;
            span.classList.add('char');
            word.appendChild(span);
        });
    });
});


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 70,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1124: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
});

var swiper = new Swiper(".clientSliderSwiper", {
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
640: {
  slidesPerView: 1,
  spaceBetween: 20,
},
768: {
  slidesPerView: 1,
  spaceBetween: 40,
},
1024: {
  slidesPerView: 2,
  spaceBetween: 50,
},
},
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
640: {
  slidesPerView: 1,
  spaceBetween: 20,
},
768: {
  slidesPerView: 1,
  spaceBetween: 40,
},
1024: {
  slidesPerView: 2,
  spaceBetween: 50,
},
},
});


document.addEventListener('DOMContentLoaded', () => {
const contactUsHeading = document.querySelector('.contact-us-heading');
const contactUsButton = document.querySelector('.contact-us-button');

const observerOptions = {
threshold: 0.1 
};

const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
    }
});
}, observerOptions);

observer.observe(contactUsHeading);
observer.observe(contactUsButton);
});



const mainHead = document.querySelector('.navigation-container');
const logo = document.querySelector('.navigation-logo-img');

window.addEventListener('scroll', function() {
    if (this.scrollY > 400) {
        mainHead.classList.add('slidedown');
        logo.style.color = '#000';
    } else {
        mainHead.classList.remove('slidedown');
        logo.style.color = '';
    }
});