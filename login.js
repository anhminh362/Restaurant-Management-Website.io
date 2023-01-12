let apiUser = "https://63aa9ccd7d7edb3ae62c214e.mockapi.io/User";

const account_login = window.localStorage.getItem('account');

if (account_login) {
  document.getElementById("login_button").innerHTML = '<a id="logoutBtn" onclick="handleLogout()" style="margin-right: 10px;" class="btn btn-primary py-2 px-4">logout</a>';
} else {
  document.getElementById("login_button").innerHTML = '<a href="login.html" style="margin-right: 10px;" class="btn btn-primary py-2 px-4">login</a>';
}

//login
const email = document.querySelector(".input-login-email");
const password = document.querySelector(".input-login-password");
const name = document.querySelector(".input-signup-name");
const bntLogin = document.querySelector(".login__signInButton");
const bntLogout = document.querySelector("#logoutBtn");

// get user
const getUser = async () => {
  const response = await fetch(apiUser);
  const data = await response.json();
  return data;
};

const handleLogout = () => {
  localStorage.removeItem('account');
  window.location.reload();
}

// login
const handleLogin = (e) => {
  e.preventDefault();
  if (email.value == "" || password.value == "") {
    alert("Please enter your email and password");
  } else if (email.value == "yumyum@gmail.com" && password.value == "123456789") {
    window.localStorage.setItem('account', "admin");
    alert('Welcome admin ...');
    window.location.assign('Pages/Admin/index.html');
  }
  else {
    getUser().then((data) => {
      const user = data.find(
        (user) =>
          user.email == email.value && user.password == password.value
      );
      if (user) {
        window.localStorage.setItem('account', user.email);
        alert("Login successfully");
        window.location.href = "index.html";
      } else {
        alert("Login failed");
      }
    });
  }
};
