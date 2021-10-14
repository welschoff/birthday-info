import { createElement } from "./elements.js";

// 📝 The onSubmit argument is not used. It should tell the parent component when the form is submitted and bypass the birthday.
// 📝 A submit input/button is missing

// Creates the page to enter the birthday
export function createEnterBirthdayPage(onSubmit) {
  // Creates <input type="date" />
  const birthdayInput = createElement("input", {
    type: "date",
    value: "1993-10-15",
  });

  const submitButton = createElement(
    "button",
    {
      className: "submitButton",
      type: "submit",
    },
    ["Submit"]
  );

  // Create a form element
  const formElement = createElement(
    "form",
    {
      className: "form",
      onsubmit: function (event) {
        event.preventDefault();
        onSubmit(birthdayInput.value);
      },
    },
    [birthdayInput, submitButton]
  );

  return formElement;
}
