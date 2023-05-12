const psw = document.querySelector("#psw");
const confirmPsw = document.querySelector("#cPsw");
const submit = document.querySelector(
  "body > div > div.main > div > form > button"
);

confirmPsw.addEventListener("focusout", (e) => {
  const passwordMatch = psw.value === confirmPsw.value;
  if (!passwordMatch) {
    confirmPsw.style.border = "2px solid red";
  } else {
    confirmPsw.style.border = "2px solid green";
  }
});

submit.addEventListener("click", (e) => {
  const passwordMatch = psw.value === confirmPsw.value;
  if (!passwordMatch) e.preventDefault();
});
// how to validate passwords that they are the same
// -- get password values
// -- add event listener to button on submit check passwords?
// -- if passwords doesn't match change confirm psw border
// -- if it does validate
