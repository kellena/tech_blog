const logout = async () => {

    const response = await fetch("/api/user/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
    });
  
    if (response.ok) {
        return document.location.replace("/user/login");
    } else {
        return console.log("Failed to logout.");
    }

};
  

document.querySelector("#logout-button").addEventListener("click", logout);