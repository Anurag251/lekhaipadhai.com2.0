// m-profile

let mProfleCloseBtn = document.querySelector('.m-profile-close');
let mProfileBtn = document.querySelector('.m-profile-show-btn');
let mProfile = document.querySelector('.m-profile');

mProfileBtn.addEventListener('click', () => {
  mProfile.classList.add('m-profile-show');
});

mProfleCloseBtn.addEventListener('click', () => {
  mProfile.classList.remove('m-profile-show');
});

// m-side-nav

let hamburger = document.querySelectorAll('.hamburger');
let mSideNav = document.querySelector('.m-side-nav');
let sideNavCloseBtn = document.querySelector('.side-nav-close-btn');
let sideNavMoreBtn = document.querySelectorAll('.side-nav-more-btn');
let sideNavMore = document.querySelectorAll('.side-nav-more');

sideNavCloseBtn.addEventListener('click', () => {
  mSideNav.classList.remove('m-side-nav-show');

  hamburger.forEach((hamburger) => {
    hamburger.classList.remove('cross');
  });
});

hamburger.forEach((hamburger) => {
  let toggle = false;
  hamburger.addEventListener('click', () => {
    if (toggle) {
      toggle = false;
      mSideNav.classList.remove('m-side-nav-show');
      hamburger.classList.remove('cross');
    } else {
      toggle = true;
      mSideNav.classList.add('m-side-nav-show');
      hamburger.classList.add('cross');
    }
  });
});

sideNavMoreBtn.forEach((sideNavMoreBtn, index) => {
  sideNavMoreBtn.addEventListener('click', () => {
    sideNavMore[index].classList.toggle('side-nav-more-show');
  });
});
