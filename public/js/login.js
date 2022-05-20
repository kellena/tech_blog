const loginFormHandler = async (event) => {

    event.preventDefault();
  
    const username = document.querySelector("#username-login").value.trim();
    const password = document.querySelector("#password-login").value.trim();
  
    if (username && password) {

        const response = await fetch("/api/user/login", {
            method: "POST",
            body: JSON.stringify({ username, password }),
            headers: { "Content-Type": "application/json" },
        });
  
        if (response.ok) {
            return document.location.replace("/api/dashboard");
        } else {
            return console.error("Incorrect Username or Password!");
        }

    }

};

  
document.querySelector(".login-form")
document.addEventListener("submit", loginFormHandler);