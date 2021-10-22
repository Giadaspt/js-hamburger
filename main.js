
const hamburger = document.querySelector('.hamburger-menu');
const navLink = document.querySelector('.header-right > a');
const hambActive = document.querySelector('.hamburger-menu.active');
const iconClose = document.querySelector('.close')
const hambUlLiA = document.querySelector('.hamburger-menu ul')

navLink.addEventListener('click', function(){
  if (hamburger){
    hamburger.classList.toggle("hambActive");
    hamburger.style.display = 'block';
    console.log('apri');
  }
})

iconClose.addEventListener('click', function(){
  if (hambUlLiA){
    hamburger.classList.toggle("iconClose");
    hamburger.style.display = 'none';
    console.log('chiudi');
  }
})

