// script.js

document.addEventListener('DOMContentLoaded',function()
{
    const menuLinks = document.querySelectorAll('.menu-link');
    const sections = document.querySelectorAll('.content-section');

    //fungsi mengubah conten yang aktif
    function activateSection(id) {
        sections.forEach(section => {
            if (section === id){
                section.classList.add('active');
            } else {
                section.classList.remove(active);
            }
        });

        menuLinks.forEach(link => {
            if(link.getAttribute('href') === '#${id}') {
                link.classList.add('active-link');
            } else {
                link.classList.remove('active-link');
            }
        });
    }

    //set bagian beranda aktif saat pertama kali dimuat
    activateSection('beranda');

    //event listener untuk klik menu
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const id = this.getAttribute('href').substring(1);
            activateSection(id);
        });
    });
});
document.querySelectorAll("nav ul li a").forEach((link) => {
    link.
    addEventListener("click", (event) => {
        event. 
        event

    preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    });
})