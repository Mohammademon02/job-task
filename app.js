$(document).ready(function () {

    const menuIndicator = document.querySelector(".menu-indicator");
    const menuItems = document.querySelectorAll(".category-menu-item");

    


    function categoryMenuIndicator(element) {
        menuItems.forEach((menuItem) => {
            menuItem.classList.remove("active");
        });

        menuIndicator.style.width = `${element.offsetWidth}px`;
        menuIndicator.style.left = `${element.offsetLeft}px`;
        menuIndicator.style.backgroundColor = `black`;

        element.classList.add("active");

    }


    menuItems.forEach((menuItem) => {
        menuItem.addEventListener("click", (event) => {
            categoryMenuIndicator(event.target);
            
        });
    });


    $('.category-menu-item').click(function (event) {
        event.preventDefault();
        // $('.collection-2').css('display', 'block')
        document.querySelector('.collection-2').removeAttribute('style')
        let dataFor = $(this).attr('data-for');
        $('.product-collection').hide();
        $('.product-collection.' + dataFor).show();

    });


    $('.product-gallery').slick({
        dots: true,
        infinite: true,
        speed: 200,
        cssEase: 'linear',
        arrows: false,
    });

});
