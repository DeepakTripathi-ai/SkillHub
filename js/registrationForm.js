    // Login in
    
    document.getElementById("LoginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if (email === "" || password === "") {
    alert("Please fill in all fields");
    return;
    }
    alert("Login successful");
    });

    // signup 
    document.getElementById("signupForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    let signupEmail = document.getElementById("signupEmail").value;
    let signupPassword = document.getElementById("signupPassword").value;
    if (signupEmail === "" || signupPassword === "") {
    alert("Please fill in all fields");
    return;
    }
    alert("Sign Up successful");
    });
        