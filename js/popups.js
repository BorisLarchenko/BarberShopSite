var loginLink = document.querySelector(".user-block");
var loginForm = document.querySelector(".modal-login");
var loginClose = loginForm.querySelector('.modal-close');

loginLink.addEventListener('click', function (evt) {
  evt.preventDefault();
  loginForm.classList.remove('display-none');
});

loginClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  loginForm.classList.add('display-none');
});
