// Select all elements with the "clickButton" class
const clickableElements = document.querySelectorAll(".clickButton");

// Add event listeners for both click and touch events to each clickable element
clickableElements.forEach((element) => {
  const handleClick = function (event) {
    // Prevent the default action for touch events to avoid interference with multitapping
    event.preventDefault();

    // Determine the touches: if it's a touch event, iterate over all touch points; if it's a click, just handle one point
    const touches = event.touches
      ? event.touches
      : [{ clientX: event.clientX, clientY: event.clientY }];

    Array.from(touches).forEach((touch) => {
      const x = touch.clientX;
      const y = touch.clientY;

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
    });
  };

  // Add event listeners for both click and touch events
  element.addEventListener("click", handleClick);
  element.addEventListener("touchstart", handleClick);
});
