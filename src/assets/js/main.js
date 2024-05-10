
function toggleClassOnScroll(className){
    const elements = document.querySelectorAll(`.${className}`);
    if(!elements.length) return;

    elements.forEach(el => {
        let counter = 0;
        for(const child of el.children){
            child.style.setProperty('--anim-delay', `${counter * .1}s`);
            counter++;
        }

        const {scrollTop, clientHeight} = document.documentElement;

        const topElementToTopViewport = el.getBoundingClientRect().top;

        if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 1){
            el.classList.add('is-visible');
        }
    });
}

toggleClassOnScroll('animate-elem');


function closeMenu(){
    document.body.classList.remove('mobile-menu-open');
}

document.body.addEventListener('click', e => {
    if(!e.target.closest('.mobile-nav') && !e.target.closest('.menu-toggle')){
        closeMenu()
    }
})

// mobile menu toggle
const menuTogglers = document.querySelectorAll('.menu-toggle');
if(menuTogglers.length) {
    menuTogglers.forEach(menuToggler => {
        toggleMobileMenu(menuToggler)
    })
}


function toggleMobileMenu(menuToggler, button){
    menuToggler.addEventListener('click', function (e) {
        e.preventDefault();
        document.body.classList.toggle('mobile-menu-open');
    });
}

// alert(`Your screen resolution is: ${window.innerWidth} X ${window.innerHeight}`)


