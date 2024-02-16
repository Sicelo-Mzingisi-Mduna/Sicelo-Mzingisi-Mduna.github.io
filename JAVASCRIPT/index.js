const navItems = document.querySelectorAll('.navbar-fieldset ul li');

  // Add click event listener to each list item
  navItems.forEach(item => {
    item.addEventListener('click', function() {
      // Remove the active class from all list items
      navItems.forEach(item => {
        item.classList.remove('active');
      });

      // Add the active class to the clicked item
      this.classList.add('active');
    });
  });

  
  

