document.getElementById('submitButton').addEventListener('click', function() {
    const formContainer = document.getElementById('search');
    const blocks = document.querySelectorAll('.block');
    const resetText = document.getElementById('resetText');

    // Move the form up
    formContainer.style.transform = 'translateY(-324px)';

    // Show blocks after the form moves
    setTimeout(() => {
        blocks.forEach((block, index) => {
            block.classList.add('show');
            // Adjust the bottom position for each block
            block.style.bottom = `${304 + (index * (152 + 28))}px`; // 152px height + 28px margin
        });
        
        // Show reset text
        resetText.style.display = 'block';
    }, 500); // Delay to match the form's animation time
});

document.getElementById('resetText').addEventListener('click', function() {
    const formContainer = document.getElementById('search');
    const blocks = document.querySelectorAll('.block');
    const resetText = document.getElementById('resetText');

    // Reset form position
    formContainer.style.transform = 'translateY(0)';

    // Hide blocks and reset their position
    blocks.forEach(block => {
        block.classList.remove('show');
        block.style.bottom = '-152px'; // Reset to below the viewport
    });
    
    // Hide reset text again
    resetText.style.display = 'none';
});