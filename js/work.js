document.addEventListener("DOMContentLoaded", () => {
        const navItems = document.querySelectorAll('.nav-item');
        const sections = document.querySelectorAll('.skills');
        // const footr = document.querySelector('.ftr');
      
        navItems.forEach(item => {
          item.addEventListener('click', () => {
            const target = item.getAttribute('data-target');
      
            sections.forEach(section => {
              if (section.id === target) {
                section.classList.add('active');
              } else {
                section.classList.remove('active');
              }
            });
          });
        });
});

document.addEventListener("DOMContentLoaded", () => {
  const abtItems = document.querySelectorAll('.abt-item');
  const sections = document.querySelectorAll('.abt');

  abtItems.forEach(item => {
    item.addEventListener('click', () => {
      const target = item.getAttribute('data-target');

      sections.forEach(section => {
        if (section.id === target) {
          section.classList.toggle('active');
        } else {
          section.classList.remove('active');
        }
      });
    });
  });
});




document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".nav-item");
  buttons.forEach((button) => {
      button.addEventListener("click", () => {
          buttons.forEach((btn) => btn.classList.remove("active"));
          
          button.classList.add("active");
      });
  });
});

/*
import Masonry from './node_modules/masonry-layout/masonry.js';

const elem = document.querySelector('.skillSection');
new Masonry(elem, {
  itemSelector: '.skills',
  columnWidth: 200,
  gutter: 10,
});
*/