const buttonTop = document.querySelector('.scroll__top');

buttonTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.onscroll = () => changeScrollButtonVisibility();

function changeScrollButtonVisibility() {
  const button = document.querySelector('.scroll__top');
  const offsetTrigger = 1600;
  const pageOffset = window.pageYOffset;

  if (pageOffset > offsetTrigger) {
    button.classList.remove('js-transparent');
  } else {
    button.classList.add('js-transparent');
  }
}