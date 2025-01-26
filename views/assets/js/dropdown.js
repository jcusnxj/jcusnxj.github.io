const dropdownButtons = document.getElementsByClassName("dropdown-btn");

// Check and apply saved states from localStorage
for (let i = 0; i < dropdownButtons.length; i++) {
  const dropdownButton = dropdownButtons[i];
  const dropdownContent = dropdownButton.nextElementSibling;

  // Retrieve the saved state from localStorage
  const stateKey = `dropdown-${i}`;
  const savedState = localStorage.getItem(stateKey);

  if (savedState === "open") {
    dropdownButton.classList.add("active");
    dropdownContent.style.display = "block";
  }

  // Add click event listener
  dropdownButton.addEventListener("click", function () {
    this.classList.toggle("active");
    const isActive = this.classList.contains("active");

    // Toggle dropdown content visibility
    dropdownContent.style.display = isActive ? "block" : "none";

    // Save the current state to localStorage
    localStorage.setItem(stateKey, isActive ? "open" : "closed");
  });
}
