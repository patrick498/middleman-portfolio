// This is where it all goes :)

document.addEventListener('DOMContentLoaded', () => {
  // Highlight button clicked on navbar
  document.querySelectorAll('.nav-link').forEach(link => {
    console.log('Hello');

    link.addEventListener('click', (event) => {
      // Remove active class from all navbar buttons
      document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
      });
      // Add active class to clicked button
      event.currentTarget.classList.add('active');
    });
  });
});
