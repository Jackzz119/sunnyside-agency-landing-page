const e = document.querySelector(".header_menu-button");
e.addEventListener("click", () => {
    'false' === e.getAttribute('aria-expanded') ? e.setAttribute('aria-expanded', 'true') : e.setAttribute('aria-expanded', 'false');
});
window.onscroll = function() {
    document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ? document.querySelector("header").classList.add("header-active") : document.querySelector("header").classList.remove("header-active")
};