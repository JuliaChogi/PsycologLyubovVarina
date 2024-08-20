$(document).ready(function () {
    console.log('jQuery is working');
});
$(document).ready(function () {
    $('#burger').click(function () {
        $('#navigation').addClass('open-menu');

        $('#headerPhone').appendTo('#navigation ul');
    });

    $('#closeMenu').click(function () {
        $('#navigation').removeClass('open-menu');

        $('#headerPhone').insertAfter('.header__burger');
    });


    $('.accordion-header').click(function () {
        const index = $(this).data('index');
        const content = $('.accordion-content').eq(index);
        const icon = $(this).find('.accordion-icon');


        if (content.is(':visible')) {
            content.slideUp();
            $(this).removeClass('accordion-open');
            icon.removeClass('icon-open');
        } else {
            content.slideDown();
            $(this).addClass('accordion-open');
            icon.addClass('icon-open');
        }
    });

    $('#navigation a').click(function () {
        $('#navigation').removeClass('open-menu');
    });

    function removeBrOnSmallScreens() {
        if (window.innerWidth < 1200) {

            var elements = document.querySelectorAll('.thesis__text');

            elements.forEach(function (element) {
                element.innerHTML = element.innerHTML.replace(/<br\s*\/?>/gi, ' ');
            });
        }
    }
    window.onload = removeBrOnSmallScreens;

    window.onresize = removeBrOnSmallScreens;




    window.addEventListener('resize', createAdaptiveBlock);
    window.addEventListener('load', createAdaptiveBlock);

    function createAdaptiveBlock() {
        const newText = document.getElementById('newText');
        const newText2 = document.getElementById('newText2');
        const photo = document.getElementById('photo');

        if (window.innerWidth < 990) {
            if (!document.querySelector('.adaptive__block')) {
                const adaptiveBlock = document.createElement('div');
                adaptiveBlock.classList.add('adaptive__block');


                const adaptiveText = document.createElement('div');
                adaptiveText.classList.add('adaptive__text');

                if (newText) adaptiveText.appendChild(newText);
                if (newText2) adaptiveText.appendChild(newText2);


                adaptiveBlock.appendChild(adaptiveText);

                const adaptivePhoto = document.createElement('div');
                adaptivePhoto.classList.add('adaptive__photo');
                if (photo) adaptivePhoto.appendChild(photo);


                adaptiveBlock.appendChild(adaptivePhoto);

                const container = document.querySelector('.about .container');
                if (container) container.appendChild(adaptiveBlock);
            }
        } else {
            const adaptiveBlock = document.querySelector('.adaptive__block');
            if (adaptiveBlock) {
                const aboutText = document.querySelector('.about__text');
                if (aboutText) {
                    if (newText) aboutText.appendChild(newText);
                    if (newText2) aboutText.appendChild(newText2);
                }

                const container = document.querySelector('.about .container');
                if (container && photo) container.appendChild(photo);

                adaptiveBlock.remove();
            }
        }
    }

});



