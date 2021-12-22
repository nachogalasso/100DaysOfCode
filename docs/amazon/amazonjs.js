/* Traemos los id para poder trabajar con ellos */
const modal = document.querySelector('.simpleModal');
const btnsopenModal = document.querySelectorAll('.modalBtn');
const closeModal = document.getElementsByClassName('closeBtn')[0];
const iconMenu = document.getElementById('toggle-menu');
const mainMenu = document.getElementById('main-menu');
const mainLogo = document.getElementById('logo');

iconMenu.addEventListener('click', () => { 
    mainMenu.classList.toggle('show');
    iconMenu.classList.toggle('toggle-responsive');
    mainLogo.classList.toggle('logo');
})

const openModal = () => {
    modal.classList.add('.show');
}
// openModal.addEventListener('click', () => {
//     modal.style.display = 'block';
    
// })

// closeModal.addEventListener('click', () => {
//     modal.style.display = 'none';
    
// })

// modal.addEventListener('click', () => {
//     modal.style.display = 'none';
// })

