// Init Icons
lucide.createIcons();

// Navbar Interaction
const navbar = document.getElementById('navbar');
const logoText = document.getElementById('logo-text');
const navLinks = document.querySelectorAll('.nav-link');
const menuBtn = document.getElementById('menu-btn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
        navbar.classList.add('bg-white/90', 'backdrop-blur-xl', 'shadow-xl', 'py-4');
        navbar.classList.remove('py-6');
        logoText.classList.replace('text-white', 'text-slate-950');
        menuBtn.classList.replace('text-white', 'text-slate-950');
        navLinks.forEach(l => {
            l.classList.replace('text-slate-300', 'text-slate-600');
            l.classList.replace('hover:text-white', 'hover:text-slate-950');
        });
    } else {
        navbar.classList.remove('bg-white/90', 'backdrop-blur-xl', 'shadow-xl', 'py-4');
        navbar.classList.add('py-6');
        logoText.classList.replace('text-slate-950', 'text-white');
        menuBtn.classList.replace('text-slate-950', 'text-white');
        navLinks.forEach(l => {
            l.classList.replace('text-slate-600', 'text-slate-300');
            l.classList.replace('hover:text-slate-950', 'hover:text-white');
        });
    }
});

// Features Scroll Functionality
const container = document.getElementById('features-container');
const btnPrev = document.getElementById('scroll-prev');
const btnNext = document.getElementById('scroll-next');

btnNext.addEventListener('click', () => {
    const cardWidth = container.querySelector('.bento-card').offsetWidth + 32; // card + gap
    container.scrollBy({ left: cardWidth, behavior: 'smooth' });
});

btnPrev.addEventListener('click', () => {
    const cardWidth = container.querySelector('.bento-card').offsetWidth + 32;
    container.scrollBy({ left: -cardWidth, behavior: 'smooth' });
});

// Mobile Menu
const mobileMenu = document.getElementById('mobile-menu');
let isOpen = false;
menuBtn.addEventListener('click', () => {
    isOpen = !isOpen;
    mobileMenu.classList.toggle('hidden');
    document.getElementById('menu-icon').setAttribute('data-lucide', isOpen ? 'x' : 'menu');
    lucide.createIcons();
});

const lottieHero = document.getElementById('lottie-hero');
if (lottieHero && typeof lottie !== 'undefined') {
    lottie.loadAnimation({
        container: lottieHero,
        path: './assets/loading.json',
        renderer: 'svg',
        loop: true,
        autoplay: true,
        rendererSettings: { preserveAspectRatio: 'xMidYMid meet' }
    });
}

