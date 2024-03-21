const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeelem = document.querySelector('.menu__close');

    hamburger.addEventListener('click', () =>  {
        menu.classList.add('active');
    })

    closeelem.addEventListener('click', () =>  {
        menu.classList.remove('active');
    })
