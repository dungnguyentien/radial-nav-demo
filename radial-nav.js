(function (window, document) {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var radialNavBtnPrev = document.querySelector('.radial-nav-btn-prev');
    var radialNavBtnNext = document.querySelector('.radial-nav-btn-next');
    var radialNavUl = document.querySelector('.radial-nav > ul');
    var navItemList = radialNavUl.querySelectorAll('.radial-nav-item');

    var navItemLength = navItemList.length;
    var activeIndices = [navItemLength - 2, navItemLength - 1, 0, 1, 2];
    var classNames = ['prev-2', 'prev-1', 'active', 'next-1', 'next-2'];

    // prev
    radialNavBtnPrev.addEventListener('click', function (e) {
      e.preventDefault();

      for (var itemIndex = 0; itemIndex < 5; itemIndex++) {
        navItemList[activeIndices[itemIndex]].className = 'radial-nav-item';
      }

      // transform
      for (var itemIndex = 0; itemIndex < 5; itemIndex++) {
        activeIndices[itemIndex] = (activeIndices[itemIndex] + 1) % navItemLength;
        navItemList[activeIndices[itemIndex]].classList.add('radial-nav-item-' + classNames[itemIndex]);
      }
    });

    // next
    radialNavBtnNext.addEventListener('click', function (e) {
      e.preventDefault();

      for (var itemIndex = 0; itemIndex < 5; itemIndex++) {
        navItemList[activeIndices[itemIndex]].className = 'radial-nav-item';
      }

      // transform
      for (var itemIndex = 0; itemIndex < 5; itemIndex++) {
        activeIndices[itemIndex] = (activeIndices[itemIndex] - 1 + navItemLength) % navItemLength;
        navItemList[activeIndices[itemIndex]].classList.add('radial-nav-item-' + classNames[itemIndex]);
      }
    });
  });
})(window, document);