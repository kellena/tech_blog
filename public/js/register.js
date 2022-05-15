const registerFormHandler = async (event) => {
    
    event.preventDefault();
  
    const username = document.querySelector("#username-register").value.trim();
    const password = document.querySelector("#password-register").value.trim();
    const confirmPassword = document.querySelector("#confirm-register").value.trim()
  
    if (username && password && password === confirmPassword) {

        const response = await fetch("/api/user/register", {
            method: "POST",
            body: JSON.stringify({ username, password }),
            headers: { "Content-Type": "application/json" },
        });
    
        if (response.ok) {
            return document.location.replace("/api/recipes");
        } else {
            return console.error("Invalid Username or Password!");
        }

    }

};
  

document.querySelector(".register-form")
document.addEventListener("submit", registerFormHandler);