const nav = document.querySelector('.navbar')

const handleNav = () => {
    nav.classList.toggle('bluemini', window.scrollY > 300)
    nav.classList.toggle('greenmini', window.scrollY > 1800)
}


window.addEventListener('scroll', handleNav)