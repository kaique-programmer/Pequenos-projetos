var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

var body = document.querySelector("body");


btnSignin.addEventListener("click", () => {
  body.className = "sign-in-js";
});

btnSignup.addEventListener("click", () => {
  body.className = "sign-up-js";
})
