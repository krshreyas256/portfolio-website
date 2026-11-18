
const modeToggle = document.getElementById('modeToggle');
const body = document.body;
const navbar = document.querySelector('.navbar');
const bgWhite = document.querySelectorAll('.bg-white');

function setMode(dark) {
    if (dark) {
        body.classList.add('dark-mode');
        navbar.classList.add('dark-mode');

        bgWhite.forEach(el => el.classList.add('dark-mode'));

        modeToggle.innerHTML = '<i class="bi bi-sun"></i>';
        localStorage.setItem('theme', 'dark');

    } else {
        body.classList.remove('dark-mode');
        navbar.classList.remove('dark-mode');

        bgWhite.forEach(el => el.classList.remove('dark-mode'));

        modeToggle.innerHTML = '<i class="bi bi-moon"></i>';
        localStorage.setItem('theme', 'light');
    }
}

modeToggle.addEventListener('click', () => {
    setMode(!body.classList.contains('dark-mode'));
});

// On load, set theme from localStorage or system preference
(function () {
    const saved = localStorage.getItem('theme');

    if (
        saved === 'dark' ||
        (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
        setMode(true);
    } else {
        setMode(false);
    }
})();
