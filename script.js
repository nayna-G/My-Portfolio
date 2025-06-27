alert("Welcome!");

// Multiple background options
const backgrounds = [
  "linear-gradient(to right, rgb(219, 228, 138), rgb(231, 212, 236))",
  "linear-gradient(to right, #f6d365, #fda085)",
  "linear-gradient(to right, #a1c4fd, #c2e9fb)",
  "linear-gradient(to right, #ffecd2, #fcb69f)",
  "linear-gradient(to right, #cfd9df, #e2ebf0)",
];

let currentIndex = 0;

// Change background smoothly
function changeBackground() {
  document.body.style.background = backgrounds[currentIndex];
  currentIndex = (currentIndex + 1) % backgrounds.length;
}

// Add button once
const aboutSection = document.getElementById("about");
if (aboutSection && !document.getElementById("bgToggleBtn")) {
  const button = document.createElement("button");
  button.id = "bgToggleBtn";
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

  button.onmouseover = function () {
    button.style.backgroundColor = "#005fa3";
    button.style.transform = "scale(1.05)";
  };

  button.onmouseout = function () {
    button.style.backgroundColor = "#0077cc";
    button.style.transform = "scale(1)";
  };

  aboutSection.appendChild(button);
}
