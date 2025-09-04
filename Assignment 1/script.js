// Select elements
const colorBtn = document.getElementById("colorBtn");
const textBtn = document.getElementById("textBtn");
const message = document.getElementById("message");
const nameInput = document.getElementById("nameInput");

// 1) Manipulate CSS property
colorBtn.addEventListener("click", () => {
  document.body.style.backgroundColor =
    document.body.style.backgroundColor === "lightblue"
      ? "#f0f0f0"
      : "lightblue";
});

// 2) Manipulate non-CSS property (innerText)
textBtn.addEventListener("click", () => {
  message.innerText =
    message.innerText === "Click the button to change me."
      ? "The text has changed!"
      : "Click the button to change me.";
});

// 3) Another event listener (input event)
nameInput.addEventListener("input", () => {
  message.innerText = `Hello, ${nameInput.value || "stranger"}!`;
});
