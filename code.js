document.body.style.backgroundColor = '';
let navigation = document.getElementsByClassName("navigation")[0];
let logo = document.getElementsByClassName("logo-menu")[0];

logo.addEventListener('click', () => {
    navigation.classList.toggle("active")
})