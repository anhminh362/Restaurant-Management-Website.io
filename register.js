let apiUser = "https://63aa9ccd7d7edb3ae62c214e.mockapi.io/User";

const email = document.querySelector(".input-login-email");
const password = document.querySelector(".input-signup-password");
const name = document.querySelector(".input-signup-name");
const bntSignup = document.querySelector(".signup__signInButton");
// signup

const handleRegister=(e)=>{
  e.preventDefault();
  if (email.value == "" || password.value == "") {
    alert("Please enter your email and password");
  } else {
    const user = {
      Email: email.value,
      password: password.value,
      Status:true,
      UpdateAt:""
      //name: name.value,
    };
    fetch(apiUser, {
      method: "POST",
      
      headers: {
        "Content-Type": "application/json",
        
      },
      body: JSON.stringify(user),

    })
    
      .then((res) => res.json())
      .then((data) => console.log(data));
      alert("Sign Up Success");
      window.location.href = "login.html";
  }
};
