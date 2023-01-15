
document.querySelector(".hamburger").addEventListener('click', () => {

    document.querySelector("#navbar").classList.toggle("hamburger-active");

    document.getElementById('navbar-list').classList.toggle("show-menu");
})
