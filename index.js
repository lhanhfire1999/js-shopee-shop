const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Search History
$('.header__search-history').onmousedown = (e) => {
  e.preventDefault();
}

// Modal
// 0 - SignIn && 1 - SignUp
const showModal = () => {
  $('.modal').classList.add('open');
};

const hideModal = () => {
  $('.modal').classList.remove('open');
  for(let index in $$('.auth-form')){
    $$('.auth-form')[index].classList.remove('open');
  }
};

const showSignInDialog = () => {
  $$('.auth-form')[0].classList.remove('open');
  $$('.auth-form')[1].classList.add('open');
}

const showSignUpDialog = () => {
  $$('.auth-form')[1].classList.remove('open');
  $$('.auth-form')[0].classList.add('open');
}

$('.navbar__item--signin').addEventListener('click', () => {
  showModal();
  showSignInDialog();
});

$('.navbar__item--signup').addEventListener('click', () => {
  showModal();
  showSignUpDialog();
});

$$('.auth-form__switch-btn')[0].addEventListener('click', showSignInDialog);
$$('.auth-form__switch-btn')[1].addEventListener('click', showSignUpDialog);

$$('.js-model-close')[0].addEventListener('click', hideModal);
$$('.js-model-close')[1].addEventListener('click', hideModal);

$('.modal').addEventListener('click', hideModal);
$$('.modal__container')[0].addEventListener('click', e => e.stopPropagation());
$$('.modal__container')[1].addEventListener('click', e => e.stopPropagation());





