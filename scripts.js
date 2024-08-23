const container = document.querySelector('.container');
const overlay = document.querySelector('.overlay');

// Move the violet overlay based on mouse position
container.addEventListener('mousemove', (e) => {
  const containerWidth = container.offsetWidth;
  const mouseX = e.clientX - container.getBoundingClientRect().left;

  // If the mouse is on the left side of the container, move the overlay to the right
  if (mouseX < containerWidth / 2) {
    container.classList.remove('right-active');
    container.classList.add('left-active');
  } 
  // If the mouse is on the right side of the container, move the overlay to the left
  else {
    container.classList.remove('left-active');
    container.classList.add('right-active');
  }
});
