document.addEventListener("DOMContentLoaded", function() {
    const navbarItems = document.querySelectorAll('.navbar ul li');

    navbarItems.forEach(item => {
        item.addEventListener('click', function() {
            // Check if the menu is currently shown
            const checkbox = document.getElementById('check');
            if (checkbox.checked) {
                // Toggle the 'active' class
                navbarItems.forEach(item => {
                    item.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });

    const checkbox = document.getElementById('check');
    const dropdown = document.querySelector('.navbar ul');
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            dropdown.classList.add('show');
        } else {
            dropdown.classList.remove('show');
        }
    });
});


  
  

