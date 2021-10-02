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

var filterList = document.querySelector('.filter-list');
var searchPageFilterButton = document.querySelector(
  '.search-page-filter-button'
);

let iconRotate = document.querySelector('.icon-rotate');

searchPageFilterButton.addEventListener('click', () => {
  filterList.classList.toggle('filter-list-show');
  iconRotate.classList.toggle('rotate');
});
