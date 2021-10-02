const navbar = document.querySelector('.nav-bar');
window.onscroll = () => {
  this.scrollY > 180
    ? navbar.classList.add('sticky')
    : navbar.classList.remove('sticky');
};
