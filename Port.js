/* ================= MENU MOBILE ================= */

const menu = document.querySelector(".menu-toggle");

const links = document.querySelector(".nav-links");


menu.addEventListener("click", () => {

    links.classList.toggle("open");

});


/* Fermer le menu après avoir cliqué sur un lien */

document
    .querySelectorAll(".nav-links a")
    .forEach((link) => {

        link.addEventListener("click", () => {

            links.classList.remove("open");

        });

    });


/* ================= SCROLL ANIMATION ================= */

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },

    {
        threshold: 0.12
    }

);


document
    .querySelectorAll(".reveal")
    .forEach((element) => {

        observer.observe(element);

    });