import Typewriter from "typewriter-effect/dist/core";
const app = document.getElementById("typewriter-js");

const typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(500)
  .typeString("Zainteresowało Cię moje portfolio?")
  .pauseFor(1500)
  .deleteAll()
  .pauseFor(500)
  .typeString("Chcesz podjąć współpracę?")
  .pauseFor(1500)
  .deleteAll()
  .pauseFor(500)
  .typeString("Zapraszam do kontaktu poprzez formularz")
  .pauseFor(1500)
  .start();

const submitButton = document.querySelector(".submitButton-js");
const nameInput = document.getElementById("name");
const surnameInput = document.getElementById("surname");
const emailInput = document.getElementById("email");
const messageTextarea = document.getElementById("message");

const setEmptyFieldError = (target) => {
  target.parentElement
    .querySelector(".emptyField-js")
    .classList.remove("hidden");
  target.parentElement
    .querySelector(".incorrectField-js")
    .classList.add("hidden");
};
const setInvalidFieldError = (target) => {
  target.parentElement.querySelector(".emptyField-js").classList.add("hidden");
  target.parentElement
    .querySelector(".incorrectField-js")
    .classList.remove("hidden");
};
const clearError = (target) => {
  target.parentElement.querySelector(".emptyField-js").classList.add("hidden");
  target.parentElement
    .querySelector(".incorrectField-js")
    .classList.add("hidden");
};

const sendForm = async (e) => {
  const stringRegex = /^[a-zA-Z]+$/g;
  const mailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  e.preventDefault();
  if (nameInput.value.trim() === "") {
    setEmptyFieldError(nameInput);
  } else if (!nameInput.value.trim().match(stringRegex)) {
    setInvalidFieldError(nameInput);
  } else clearError(nameInput);
  if (surnameInput.value.trim() === "") {
    setEmptyFieldError(surnameInput);
  } else if (!surnameInput.value.trim().match(stringRegex)) {
    setInvalidFieldError(surnameInput);
  } else clearError(surnameInput);
  if (emailInput.value.trim() === "") {
    setEmptyFieldError(emailInput);
  } else if (!emailInput.value.trim().match(mailRegex)) {
    setInvalidFieldError(emailInput);
  } else clearError(emailInput);
  const isAnyEmptyField =
    document.querySelectorAll(".emptyField-js:not(.hidden)").length !== 0;
  const isAnyIncorrectField =
    document.querySelectorAll(".incorrectField-js:not(.hidden)").length !== 0;
  if (isAnyEmptyField || isAnyIncorrectField) {
    return;
  }
  const res = await fetch(
    "https://binance-backend.herokuapp.com/portfolio/contact",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: nameInput.value,
        surname: surnameInput.value,
        email: emailInput.value,
        message: messageTextarea.value,
      }),
    }
  );
  const data = await res.json();
  if (data.message === "send") {
    document.querySelector(".contact-form").classList.add("hidden");
    document.querySelector(".contact__thank-you-text").classList.add("active");
  }
};

submitButton.addEventListener("click", sendForm);
