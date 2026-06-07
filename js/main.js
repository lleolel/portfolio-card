// DINAMICA DOS BOTAO DE PAGINA

const currentPage = document.body.dataset.page;

const navButtons = document.querySelectorAll(".nav-button");

navButtons.forEach(button => {

    const href = button.getAttribute("href");

    if (href && href.includes(currentPage)) {
        button.classList.add("active-page");
    }

});


// DINAMICA DE IDIOMA + ANIMAÇÃO

const langButtons = document.querySelectorAll(".lang-btn");
const slider = document.querySelector(".lang-slider");

function changeLanguage(lang) {

    document.querySelectorAll("[data-en]").forEach(element => {

        if (element.dataset[lang]) {
            element.innerHTML = element.dataset[lang];
        }

    });

    langButtons.forEach(btn => {
        btn.classList.remove("active-language");
    });

    const activeButton = document.querySelector(
        `.lang-btn[data-lang="${lang}"]`
    );

    if (activeButton) {

        activeButton.classList.add("active-language");

        const index = [...langButtons].indexOf(activeButton);

        slider.style.transform = `translateX(${index * 68}px)`;

    }

}

// Carrega idioma salvo
const savedLanguage = localStorage.getItem("language") || "en";

changeLanguage(savedLanguage);

// Clique nos botões
langButtons.forEach(button => {

    button.addEventListener("click", () => {

        const lang = button.dataset.lang;

        localStorage.setItem("language", lang);

        changeLanguage(lang);

    });

});


// LIGHTBOX -> GALLERY

const clickableImages = document.querySelectorAll(
    ".gallery-grid img, .prices-page img"
);

const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");

if (lightbox) {

    clickableImages.forEach(img => {

        img.addEventListener("click", () => {

            lightbox.classList.add("active");

            // usa a imagem HD se existir
            lightboxImg.src = img.dataset.full || img.src;

        });

    });

    lightbox.addEventListener("click", () => {

        lightbox.classList.remove("active");

    });

}


// ABA -> PRICES

const pieces = document.querySelectorAll(".piece-item");

pieces.forEach(piece => {

    const aba = piece.querySelector(".piece-aba");

    if (!aba) return;

    aba.addEventListener("click", () => {

        pieces.forEach(other => {

            if (other !== piece) {
                other.classList.remove("active");
            }

        });

        piece.classList.toggle("active");

    });

});