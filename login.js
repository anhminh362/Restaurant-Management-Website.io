let apiUser = "https://63aa9ccd7d7edb3ae62c214e.mockapi.io/User";

//login
const email = document.querySelector(".input-login-email");
const password = document.querySelector(".input-login-password");
const name = document.querySelector(".input-signup-name");
const bntLogin = document.querySelector(".login__signInButton");

// get user
const getUser = async () => {
  const response = await fetch(apiUser);
  const data = await response.json();
  return data;
};

// login
bntLogin.addEventListener("click", (e) => {
  e.preventDefault();
  if (email.value == "" || password.value == "") {
    alert("Please enter your email and password");
  } else {
    getUser().then((data) => {
      const user = data.find(
        (user) =>
          user.email == email.value && user.password == password.value
      );
      if (user) {
        alert("Login success");
        window.location.href = "http://127.0.0.1:5501/index.html";
      } else {
        alert("Login failed");
      }
    });
  }
});
