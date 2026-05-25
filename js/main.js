// DINAMICA DOS BOTAO DE PAGINA

const currentPage = document.body.dataset.page;

const navButtons = document.querySelectorAll(".nav-button");

navButtons.forEach(button =>{

    const href = button.getAttribute("href");

    if(href.includes(currentPage)){
        button.classList.add("active-page");
    }
});

// DINAMICA DE IDIOMA + ANIMAÇÃO

const langButtons = document.querySelectorAll(".lang-btn");
const slider = document.querySelector(".lang-slider");

langButtons.forEach((button, index) => {

    button.addEventListener("click", () => {

        const lang = button.dataset.lang;

        document.querySelectorAll("[data-en]").forEach(element => {
            element.innerHTML = element.dataset[lang];
        });

        langButtons.forEach(btn => {
            btn.classList.remove("active-language");
        });

        button.classList.add("active-language");

        slider.style.transform = `translateX(${index * 68}px)`;
    });

});


//LIGHTBOX -> GALLERY

const galleryImages = document.querySelectorAll(".gallery-grid img");

const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");

galleryImages.forEach(img => {

    img.addEventListener("click", () => {

        lightbox.classList.add("active");
        lightboxImg.src = img.src;
    });

});

lightbox.addEventListener("click", () => {
    lightbox.classList.remove("active");
});