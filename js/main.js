window.addEventListener('load', function () {
    const header = document.querySelector('.header');
    const headerBodyHeight = header.offsetHeight;
    const hero = document.querySelector('.hero');

    if (window.scrollY > 500) {
        header.classList.add('fixed-top');
        hero.style.marginTop = `${headerBodyHeight}px`;
    }


    window.addEventListener('scroll', () => {
        let scrollDistance = window.scrollY;

        if (scrollDistance > 500) {
            header.classList.add('fixed-top');
            hero.style.marginTop = `${headerBodyHeight}px`;
        } else {
            header.classList.remove('fixed-top');
            hero.style.marginTop = '0';
        }
    })

})