document.addEventListener("DOMContentLoaded", function() {
  const navbarItems = document.querySelectorAll('.navbar ul li');

  navbarItems.forEach(item => {
      item.addEventListener('click', function() {
          navbarItems.forEach(item => {
              item.classList.remove('active');
          });
          this.classList.add('active');
      });
  });
});

