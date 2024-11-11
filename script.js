// Select all elements with the "clickButton" class
const clickableElements = document.querySelectorAll(".clickButton");

// Add event listeners for both click and touch events to each clickable element
clickableElements.forEach((element) => {
  const handleClick = function (event) {
    // If it's a touch event, we use the first touch point; for click, we use clientX/clientY
    const x = event.touches ? event.touches[0].clientX : event.clientX;
    const y = event.touches ? event.touches[0].clientY : event.clientY;

    // Get the position within the element where clicked or touched
    const rect = element.getBoundingClientRect();
    const offsetX = x - rect.left;
    const offsetY = y - rect.top;

    // Create a floating number element
    const floatingNumber = document.createElement("div");
    floatingNumber.classList.add("number");
    floatingNumber.textContent = "10";

    // Position the floating number based on the click/touch position within the element
    floatingNumber.style.left = `${rect.left + offsetX}px`;
    floatingNumber.style.top = `${rect.top + offsetY}px`;

    // Add the floating number to the body
    document.body.appendChild(floatingNumber);

    // Remove the floating number after the animation completes
    floatingNumber.addEventListener("animationend", () => {
      floatingNumber.remove();
    });
  };

  // Add event listeners for both click and touch events
  element.addEventListener("click", handleClick);
  element.addEventListener("touchstart", handleClick);
});
