var loginLink = document.querySelector(".user-block");
var loginForm = document.querySelector(".modal-login");
var loginClose = loginForm.querySelector('.modal-close');
var overlay = document.querySelector(".modal-overlay");

loginLink.addEventListener('click', function (evt) {
  evt.preventDefault();
  loginForm.classList.remove('display-none');
  loginForm.classList.add('modal-login-animate');
  overlay.classList.remove('display-none');
});

loginClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  loginForm.classList.add('display-none');
  loginForm.classList.remove('modal-login-animate');
  overlay.classList.add('display-none');
});

var mapLink = document.querySelector(".call-map");
var popupMap = document.querySelector(".modal-map");
var mapClose = popupMap.querySelector('.modal-close');

mapLink.addEventListener('click', function (evt) {
  evt.preventDefault();
  popupMap.classList.remove('display-none');
  overlay.classList.remove('display-none');
});

mapClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  popupMap.classList.add('display-none');
  overlay.classList.add('display-none');
});