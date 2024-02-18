const navItems = document.querySelectorAll('.navbar ul li');

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

  // Function to add or remove 'fixed' class based on scroll position
function handleScroll() {
  const navbar = document.querySelector('.navbar');
  const scrollY = window.scrollY;

  // Add or remove 'fixed' class based on scroll position
  if (scrollY > 0) {
    navbar.classList.add('fixed');
  } else {
    navbar.classList.remove('fixed');
  }
}

// Add scroll event listener to window
window.addEventListener('scroll', handleScroll);

// Function to add or remove 'fixed' class based on scroll position
function handleScroll() {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('fixed', window.scrollY > 0);
}

// Add scroll event listener to window
window.addEventListener('scroll', handleScroll);

/*******************************************************************/
/*******************************************************************/

const breadcrumbItems = document.querySelectorAll('.breadcrumb li');

// Add click event listener to each breadcrumb item
breadcrumbItems.forEach(item => {
  item.addEventListener('click', function() {
    // Remove the active class from all breadcrumb items
    breadcrumbItems.forEach(item => {
      item.classList.remove('active');
    });

    // Add the active class to the clicked item
    this.classList.add('active');
  });
});

/*******************************************************************/
  
   
  

