// Welcome alert (more subtle)
alert("Welcome!");  // "Adios Amigos!" might be too abrupt for a user experience.

// Add background color change feature
function changeBackground() {
    document.body.style.transition = "background 0.5s ease";  // Smooth transition for background change
    document.body.style.background = "linear-gradient(to right,rgb(219, 228, 138),rgb(231, 212, 236))";  // Softer gradient tones
}

// Add button dynamically
const aboutSection = document.getElementById('about');
const button = document.createElement('button');
button.textContent = "Change Background";
button.style.cssText = `
    margin-top: 15px;
    padding: 10px 20px;
    font-size: 1rem;
    font-weight: 500;
    color: #fff;
    background-color: #0077cc;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;
`;

button.onclick = changeBackground;

// Button hover effect
button.onmouseover = function() {
    button.style.backgroundColor = "#005fa3";
    button.style.transform = "scale(1.05)";
};
button.onmouseout = function() {
    button.style.backgroundColor = "#0077cc";
    button.style.transform = "scale(1)";
};

aboutSection.appendChild(button);

// Console log for testing
console.log("Portfolio loaded successfully!");
