const animatedBlock = document.getElementById('animatedBlock');
const toggleButton = document.getElementById('toggleButton');

let isMoved = false;

toggleButton.addEventListener('click', function() {
    if (isMoved) {
        animatedBlock.style.transform = 'translateX(0)'; // Move back to the original position
    } else {
        animatedBlock.style.transform = 'translateX(500px)'; // Moves the block 500px in the right side
    }
    isMoved = !isMoved;
});
