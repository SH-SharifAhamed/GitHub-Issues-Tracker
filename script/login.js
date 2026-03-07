console.log('Login page is working');

// username and password input
document.getElementById("login-btn").addEventListener("click", function () {
     
     const username = document.getElementById("username").value;
     // const userNameInput = username.value;
     console.log(username);
     
     const password = document.getElementById("password").value;
     console.log(password);
     
     if (username === "admin" && password === "admin123") {
          // Redirect to the dashboard page
          alert("login successful");
          window.location.href = "./home.html";
     }
     else {
          alert("Invalid username or password. Please try again.");
          return;
     }
});