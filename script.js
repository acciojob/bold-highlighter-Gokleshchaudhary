function highlight() {
    // Select all <strong> elements
    const strongElements = document.querySelectorAll('strong');
    
    // Change their color to green
    strongElements.forEach(function(element) {
        element.style.color = 'rgb(0, 128, 0)';
    });
}

function return_normal() {
    // Select all <strong> elements
    const strongElements = document.querySelectorAll('strong');
    
    // Revert their color to black
    strongElements.forEach(function(element) {
        element.style.color = 'rgb(0, 0, 0)';
    });
}