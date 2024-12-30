document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll('.nav-item');
  const sections = document.querySelectorAll('.skills');

  // Set the default active section and button
  const defaultSection = document.querySelector('#languages');
  const defaultNavItem = document.querySelector('.nav-item[data-target="languages"]');
  defaultNavItem.classList.add('active');

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

          navItems.forEach(nav => nav.classList.remove('active'));
          item.classList.add('active');
      });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".abt-item");
  const sections = document.querySelectorAll(".abt");

  // Automatically activate the first button and section
  if (buttons.length > 0 && sections.length > 0) {
    buttons[0].classList.add("active");
    sections[0].classList.add("active");
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.getAttribute("data-target");

      // Remove 'active' class from all buttons
      buttons.forEach((btn) => btn.classList.remove("active"));

      // Add 'active' class to the clicked button
      button.classList.add("active");

      // Show the corresponding section and hide others
      sections.forEach((section) => {
        if (section.id === target) {
          section.classList.add("active");
        } else {
          section.classList.remove("active");
        }
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".abtWork-item");
  const targetId = button.getAttribute("data-target");
  const targetBlock = document.getElementById(targetId);

  button.addEventListener("click", () => {
    if (targetBlock) {
      targetBlock.classList.toggle("active");
    }
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
