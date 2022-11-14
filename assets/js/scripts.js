const body = document.querySelector('body');
const menuTrigger = document.querySelector('#toggle-main-menu-mobile');
const menuContainer = document.querySelector('#main-menu-mobile');

menuTrigger.onclick = function() {
  menuContainer.classList.toggle('open');
  menuTrigger.classList.toggle('is-active');
  body.classList.toggle('lock-scroll');
};

// https://raw.githubusercontent.com/Ovski4/jekyll-tabs/master/docs/tabs.js
const removeActiveClasses = function(ulElement) {
  const lis = ulElement.querySelectorAll('li');
  Array.prototype.forEach.call(lis, function(li) {
    li.classList.remove('active');
  });
};

const getChildPosition = function(element) {
  const parent = element.parentNode;
  let i = 0;
  for (i = 0; i < parent.children.length; i++) {
    if (parent.children[i] === element) {
      return i;
    }
  }

  throw new Error('No parent found');
};

window.addEventListener('load', function() {
  const tabLinks = document.querySelectorAll('ul.tab li a');

  Array.prototype.forEach.call(tabLinks, function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();

      liTab = link.parentNode;
      ulTab = liTab.parentNode;
      position = getChildPosition(liTab);
      if (liTab.className.includes('active')) {
        return;
      }

      removeActiveClasses(ulTab);
      tabContentId = ulTab.getAttribute('data-tab');
      tabContentElement = document.getElementById(tabContentId);
      removeActiveClasses(tabContentElement);

      tabContentElement.querySelectorAll('li')[position]
          .classList.add('active');
      liTab.classList.add('active');
    }, false);
  });
});
