const menubar = document.querySelector('#menu-bar')
const mynav = document.querySelector('.nav')
const searchbar = document.querySelector('#search-bar')
const search = document.querySelector('.search-form')

menubar.addEventListener('click', () => {
    menubar.classList.toggle('fa-times')
    mynav.classList.toggle('active')
})
searchbar.addEventListener('click', () => {
    search.classList.toggle('active')
})
