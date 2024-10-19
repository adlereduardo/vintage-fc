/* Script para o ícone whatsapp */

window.addEventListener('scroll', function() {
    const footer = document.querySelector('footer');
    const icon = document.querySelector('.button-whatsapp');
    const footerTop = footer.getBoundingClientRect().top;
    const iconBottom = icon.getBoundingClientRect().bottom;

    if (iconBottom >= footerTop) {
        icon.style.opacity = '0'; // Torna o ícone invisível
    } else {
        icon.style.opacity = '1'; // Ícone visível fora do footer
    }
});

/* Login page (interação ao clicar) */

var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

var body = document.querySelector("body");


btnSignin.addEventListener("click", function () {
   body.className = "sign-in-js"; 
});

btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js";
})
