const colorButton = document.getElementById("colorButton");
const textButton = document.getElementById("textButton");
const message = document.getElementById("message");
const nameInput = document.getElementById("nameInput");
const title = document.getElementById("title");

// CSS manipulation & 1st event listener
colorButton.addEventListener("click", () => {
  document.body.style.backgroundColor =
    document.body.style.backgroundColor === "rgb(26, 26, 26)"
      ? "rgba(15, 12, 35, 1)"
      : "rgb(26, 26, 26)";
});

// Non-CSS manipulation & 1st event listener
textButton.addEventListener("click", () => {
  message.innerText =
    message.innerText === "Welcome to the DOM"
      ? "The DOM welcomes you!"
      : "Welcome to the DOM";
});

// 2nd event listener
nameInput.addEventListener("input", () => {
  title.innerText = nameInput.value
    ? nameInput.value.toUpperCase()
    : "INTERACT";
});
