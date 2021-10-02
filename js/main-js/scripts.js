// userlogin
let userLogin = document.querySelector('.user-login');
let userLoginDrop = document.querySelector('.user-login-drop');
userLogin.addEventListener('click', () => {
  userLoginDrop.classList.toggle('user-login-show');
});

// searchDrop
let searchDropBtn = document.querySelector('.search-drop-btn');
let selectOptionTarget = document.querySelector('.select-option-target');
let searchDrop = document.querySelector('.search-drop');
let options = document.querySelectorAll('.option');
searchDropBtn.addEventListener('click', () => {
  searchDrop.classList.toggle('search-drop-show');
});

options.forEach((option) => {
  option.addEventListener('click', () => {
    selectOptionTarget.innerHTML = option.innerHTML;
  });
});

// searchPop
let searchPop = document.querySelector('.search-pop');
let searchCloseBtn = document.querySelector('.search-close-btn');
let search = document.querySelector('.search');
let example = document.getElementById('example');

function focusSearch() {
  example.focus();
}

search.addEventListener('click', () => {
  searchPop.classList.add('search-pop-show');
});

searchCloseBtn.addEventListener('click', () => {
  searchPop.classList.remove('search-pop-show');
});

// share
let share = document.querySelectorAll('.share');
let socialIcons = document.querySelectorAll('.social-icons');

share.forEach((share, index) => {
  let toggle = false;

  share.addEventListener('click', () => {
    if (toggle) {
      toggle = false;
      socialIcons[index].classList.remove('share-show');
    } else {
      toggle = true;
      socialIcons[index].classList.add('share-show');
    }
  });
});

// cources
$(document).ready(function () {
  $('.itemBox').not('.plusTwo').hide('1000');
});

$(document).ready(function () {
  $('.courses-nav-buttons ul li').click(function () {
    const value = $(this).attr('data-filters');
    if (value == 'all') {
      $('.itemBox').show('1000');
    } else {
      $('.itemBox')
        .not('.' + value)
        .hide('1000');
      $('.itemBox')
        .filter('.' + value)
        .show('1000');
    }
  });

  $('.courses-nav-buttons ul li').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
  });
});

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

// mobileshare
let mShare = document.querySelectorAll('.m-share');
let mSocialIcons = document.querySelectorAll('.m-social-icons');

mShare.forEach((mShare, index) => {
  let toggle = false;

  mShare.addEventListener('click', () => {
    if (toggle) {
      toggle = false;
      mSocialIcons[index].classList.remove('share-show');
    } else {
      toggle = true;
      mSocialIcons[index].classList.add('share-show');
    }
  });
});
